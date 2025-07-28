import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Semua 👋, saya{" "}
                <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                  Achmad
                </span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
                Student &{" "}
                <span className="text-dark dark:text-white">Web developer</span>
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-secondary">
                Belajar web programming itu mudah dan menyenangkan bukan.{" "}
              </p>

              <Link
                href={``}
                className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                Hubungi Saya
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <img
                  src=""
                  alt=""
                  className="relative z-10 mx-auto max-w-full"
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
