import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans p-6 sm:p-16 flex flex-col items-center bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed]">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 md:gap-12 h-full">
        {/* (1) Top left: Main content */}
        <div className="flex flex-col justify-center">
          <div className="text-black font-light text-4xl sm:text-5xl md:text-6xl mb-6" style={{letterSpacing: '-0.02em'}}>
            Welcome to my Portfolio
          </div>
          <div className="text-gray-700 font-light text-base sm:text-lg max-w-xl mb-8">
            <span className="font-normal text-black">It's Marcella!</span> A graphic design student majored in <span className="italic">Visual Communication Design</span> based in Tangerang. I'm interested in challenging myself to <span className="italic">gain new knowledges</span> and <span className="italic">developing my creativity</span> in fun and creative designs. I consider myself as a hard-working and easy to adapt. I hope my abilities able to contribute to the growth of your firm.
          </div>
          <a
            href="https://linkedin.com/in/marcella-aurelia/"
            className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-light shadow-sm hover:bg-pink-200 transition text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/marcella-aurelia/
          </a>
        </div>
        {/* (3) Right: Profile image, no background */}
        <div className="row-span-2 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Your portrait"
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
          </div>
        </div>
        {/* (2) Bottom left: Education */}
        <div className="flex flex-col justify-start">
          <h3 className="text-black font-light text-2xl mb-4">EDUCATION</h3>
          <ul className="text-gray-700 font-light text-base space-y-4">
            <li>
              <span className="font-normal text-black">2017 – 2020</span><br />
              Atisa Dipamkara Vocational HighSchool<br />
              Multimedia
            </li>
            <li>
              <span className="font-normal text-black">2020</span><br />
              Multimedia Nusantara University<br />
              Visual Communication Design
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
