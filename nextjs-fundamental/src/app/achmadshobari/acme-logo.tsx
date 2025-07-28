import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row flex-wrap items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Achmad</p>
    </div>
  );
}
