import { useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Surahs() {
  const data = useLoaderData();
  const [played, setPlayed] = useState();
  let audios = null;
  for (let i in data.audioFull) {
    audios = data.audioFull[i];
  }
  let audio = new Audio(audios);
  function putarAudio() {
    if (audio.currentTime === audio.duration) {
      audio.currentTime = 0;
    }
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return (
    <>
      <div className="w-full bg-white-500 rounded text-dark border border-green-500 p-4">
        <div className="text-3xl text-center mt-4 mb-3">
          {data.namaLatin} - {data.nama}
        </div>
        <div className="mb-3 text-center">
          {data.arti} - {data.jumlahAyat} Ayat - {data.tempatTurun}
        </div>
        <button
          onClick={putarAudio}
          type="button"
          className="text-gray-900 bg-white border text-green-400 border-green-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Play
        </button>
      </div>

      <div className="text-slate-600 mb-3 shadow-sm border border-green-500 text-center text-2xl mt-4 p-4">
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
                      <span className="text-slate">
                       {x.teksArab}
                      </span>
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
