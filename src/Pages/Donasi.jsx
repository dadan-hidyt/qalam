export default function Donasi() {
  return (
    <>
      <div className="container h-fit mx-auto mb-5">
        <h2 className="text-2xl">DONASI</h2>
        <div className="mt-3 mb-3">
          <p className="text-slate-400">
            Jika kamu mendukung saya dalam mengembangkan aplikasi ini, Kamu bisa
            trakter saya seikhlasnya Mau traktir do'a atau traktir apapun bebas
          </p>
          <div className="tf">
            <span class="bg-green-100 block text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Dana: 088218689324
            </span>

            <span class="bg-green-100 block mt-3 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Pulsa: 088218689324
            </span>
          </div>
          <div className="mt-4 mb-4">
            <a
              target={"_blank"}
              className="bg-green-400 rounded text-white border border-green-500 p-1"
              href="https://trakteer.id/dadanskhidayat/tip"
            >
              Trakteer
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
