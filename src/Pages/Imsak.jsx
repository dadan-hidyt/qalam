import { useEffect, useState } from "react";
import axios from "axios";
import Sekeleton from "../Components/Skeleton";

export default function Imsak() {
  const [Provinsi, setProvinsi] = useState(null);
  const [KabKota, setKabKota] = useState(false);
  const [JadwalResponse, setJadwalResponse] = useState(null);
  const [CurrentProvinsi, setCurrentProvinsi] = useState(null);
  const [CurrentKabKota, setCurrentKabKota] = useState();
  const loadProvinsi = (e) => {
    axios
      .get("https://equran.id/api/v2/imsakiyah/provinsi")
      .then(function (response) {
        let data = [];

        for (let i of response.data.data) {
          data.push(i);
        }
        setProvinsi(data);
      });
  };
  //for create option element
  const createItem = (x) => {
    return (
      <option key={x} value={x}>
        {x}
      </option>
    );
  };

  useEffect(function () {
    loadProvinsi();
  }, []);

  const loadKabKota = (e) => {
    const provinsi = e.target.value;
    setKabKota([]);
    axios
      .post("https://equran.id/api/v2/imsakiyah/kabkota", {
        provinsi: provinsi,
      })
      .then(function (e) {
        setCurrentProvinsi(provinsi);
        setKabKota(e.data.data);
      });
  };
  const loadJadwalImsyakiah = (e) => {
    let payload = {
      provinsi: CurrentProvinsi,
      kabKota: e.target.value,
    };
    setJadwalResponse(null);
    setCurrentKabKota(e.target.value);
    axios
      .post("https://equran.id/api/v2/imsakiyah/jadwal", payload, {
        responseType: "json",
      })
      .then(function (response) {
        let data = [];
        for (let i in response.data.data.data) {
          data.push(response.data.data.data[i]);
        }
        setJadwalResponse(data);
      });
  };

  const createCard = (x) => {
    return (
      <>
        <div className="w-full md:w-1/2 lg:w-4/12 p-2" key={x.tanggal}>
          <div
            
            className="mb-4 bg-white border border-green-600 rounded sm:p-4 p-5 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl text-slate-500 leading-none text-gray-900 dark:text-white">
                {x.tanggal}
              </h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        IMSAK
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.imsak}
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        SUBUH
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.subuh}
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        TERBIT
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.terbit}
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        DZUHUR
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.dzuhur}
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        ASHAR
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.ashar}
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        MAGHRIB
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.maghrib}
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        ISYA
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                      {x.isya}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="w-full">
          <div className="bg-white mb-3 mt-4">
            <div className="mt-4">
              <div className="flex gap-3 p-3">
                <div className="col-md-4">
                  <label className="block" htmlFor="form-label">
                    Pilih Provinsi
                  </label>
                  <select
                    onChange={loadKabKota}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name=""
                    id="form-label"
                  >
                    {Provinsi ? (
                      Provinsi.map(createItem)
                    ) : (
                      <option>loading...</option>
                    )}
                  </select>
                </div>
                <div className={KabKota ? "col-md-6 d-block" : "d-none"}>
                  <label className="block" htmlFor="form-label">
                    Pilih Kabupaten
                  </label>
                  <select
                    onChange={loadJadwalImsyakiah}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name=""
                    id="form-label"
                  >
                    {KabKota ? (
                      KabKota.map(createItem)
                    ) : (
                      <option>Silahkan Pilih Provinsi</option>
                    )}
                  </select>
                </div>
              </div>

              {JadwalResponse ? (
                <div className="w-full mt-4">
                  {/* <div className="text-muted h5">
                    Provinsi: {CurrentProvinsi}
                  </div>
                  <div className="text-muted h5">
                    Kab Kota: {CurrentKabKota}
                  </div> */}

                  <div className="flex flex-wrap">
                    {JadwalResponse.map(createCard)}
                  </div>
                </div>
              ) : (
                <Sekeleton className="mt-3"/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
