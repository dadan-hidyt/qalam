import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import formatDuarsi from "../Helpers";
export default function Surah() {
  const data = useLoaderData();
  const [Played, setPlayed] = useState();
  const [audioDuration, setAudioDuration] = useState(null);
  let audios = null;
  for (let i in data.audioFull) {
    audios = data.audioFull[i];
  }
  function putarAudio() {
    const audio = document.getElementById("audioMurotal");
    if (audio.currentTime === audio.duration) {
      audio.currentTime = 0;
    }
    if (audio.paused) {
      setPlayed(true);
      audio.play();
    } else {
      audio.pause();
      setPlayed(false);
    }
  }

  useEffect(() => {
    const audio = document.getElementById("audioMurotal");
    audio.addEventListener("timeupdate", () => {
      if (audio.currentTime === audio.duration) {
        setPlayed(false);
      }
      setAudioDuration(
        formatDuarsi(audio.currentTime) + " : " + formatDuarsi(audio.duration)
      );
    });
  });

  return (
    <>
      <div className="w-full bg-green-300 rounded text-dark border border-green-500 p-4">
        <div className="text-3xl text-gray-700 text-center mt-4 mb-3">
          {data.namaLatin} - {data.nama}
        </div>
        <div className="mb-3 text-gray-700 text-center">
          {data.arti} - {data.jumlahAyat} Ayat - {data.tempatTurun}
        </div>
        <button
          id="btnStart"
          onClick={putarAudio}
          type="button"
          className="text-2xl"
        >
          {Played ? "⏸️" : "▶️"}
        </button>
        <audio className="hidden" id="audioMurotal" src={audios}></audio>
        <small className={Played ? "show block" : " hidden block"}>
          {audioDuration}
        </small>
      </div>

      <div className="text-slate-600 mb-3 rounded shadow-sm border border-green-500 text-center text-2xl mt-4 p-4">
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
      </div>

      <div className="w-full">
        <div className="flex flex-wrap">
          {data.ayat.map(function (x) {
            return (
              <>
                <div className="w-full mb-2" key={x.nomorAyat}>
                  <div className="p-4 rounded bg-slate-50 border border-green-500 dark:border-gray-900">
                    <p className="mb-5 text-slate-700">
                      <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                        {x.nomorAyat} : {data.nomor}
                      </span>
                    </p>
                    <p className="text-right mb-5 text-primary-green-light dark:text-slate-200 rtl-grid text-3xl my-1 leading-none">
                      <span className="text-slate">{x.teksArab}</span>
                    </p>
                    <p className="text-left text-primary-hover-light dark:text-slate-300 text-sm font-semibold">
                      {x.teksLatin}
                    </p>
                    <div className="flex py-2 items-center">
                      <div className="flex-grow border-t border-primary-green-light dark:border-slate-300" />
                    </div>
                    <p className="text-left text-primary-hover-light dark:text-slate-400 text-sm text-justify">
                      {x.teksIndonesia}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
