export default function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      onClick={onClick}
      className="fixed top-8 right-8 z-50 flex flex-col h-12 w-12 border-2 border-white/50 rounded-full justify-center items-center group"
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-100"
            : "opacity-100"
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-100"
            : "opacity-100"
        }`}
      />
    </button>
  );
}