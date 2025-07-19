import TypingAnimation from "./_components/TypingAnimation";

export default function Dandyar() {
  return (
    <div className="w-full border border-white border-opacity-20 max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
                Welcome
            </h1>

            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto my-6 rounded-full"></div>
            
            <TypingAnimation />

        </div>
  );
}
