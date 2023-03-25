import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Link} from 'react-router-dom'
import "./App.css";
import axios from "axios";
import Sekeleton from "./Components/Skeleton";
function App() {
  window.document.title = "Qallam";
  const [count, setCount] = useState(0);

  const [Surahs, setSurahs] = useState(false);
  const [Search, SetSearch] = useState(null);
  function searchTerm(e) {
    SetSearch(e.target.value);
  }
  useEffect(() => {
    axios.get("https://equran.id/api/v2/surat").then((res) => {
      setSurahs(res.data.data);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="dark:bg-gray-800 rounded text-center text-2xl text-slate-600 bg-slate-100 w-full p-4 font-semibold text-primary-green-light dark:text-slate-200  border border-green-500 dark:border-primary-green-dark">
        بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
      </div>

      <div className="mt-4">
        <div className="mb-6">
          <input
            onKeyUp={searchTerm}
            type="search"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari surat"
            required
          />
        </div>

        <div className="mt-3">
          {Surahs ? (
            <div className="flex flex-wrap">
              {Surahs.map(function (x) {
                return (
                  <div key={x.nomor} className="w-full md:w-1/2 lg:w-3/12 p-1">
                      <Link to={'surah/'+x.nomor}>
                      <div className="p-4 text-slate-500 text-slate-600 border border-green-500 bg-green-300 rounded dark:text-slate-200 hover:bg-primary-hover-light hover:dark:bg-primary-hover-dark">
                        <p className="dark:font-semibold">
                          {x.nomor}-{x.namaLatin}
                        </p>
                        <p className="text-right font-lateef font-semibold text-3xl">
                          {x.nama}
                        </p>
                        <p className="text-right text-sm mt-3">
                          {x.tempatTurun} • {x.arti}
                        </p>
                      </div>
                      </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <Sekeleton/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
