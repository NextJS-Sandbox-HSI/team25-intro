import styles from "./achmad.module.css";

export default function achmadshobari() {
  return (
    <div
      className={`${styles.container} min-h-screen flex items-center justify-center`}
    >
      <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 rounded-2xl p-8 md:p-12 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
          Achmad Shobari
        </h1>
        <h1 className="w-24 bg-white h-5 mx-auto my-auto rounded-2xl"></h1>
      </div>
    </div>
  );
}
