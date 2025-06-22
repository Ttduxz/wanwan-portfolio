import Image from "next/image";
import Link from "next/link";
import { projects } from "./portfolio/data";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-b from-[#fefcf8] to-[#fcf7ed] text-gray-800">
      
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full">
          {/* Left: Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left md:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-['Playfair_Display'] font-bold mb-4 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Welcome to<br />My portfolio</h1>
            <p className="text-md text-gray-500 mb-10 tracking-widest">— A CREATIVE BASED IN CHIANG MAI</p>
            
            {/* --- CTA Buttons --- */}
            <div className="w-full sm:w-auto">
              {/* Mobile: 4-button grid */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                <Link href="/#about" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                  About Me
                </Link>
                <Link href="/#portfolio" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                  Portfolio
                </Link>
                <Link href="/#why-me" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                  Why Me
                </Link>
                <Link href="/#contact" className="bg-amber-800 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-900 transition-colors duration-300 text-center">
                  Contact Me
                </Link>
              </div>

              {/* Desktop: 2-button row */}
              <div className="hidden md:flex flex-col sm:flex-row items-center gap-4">
                <Link href="/#portfolio" className="bg-amber-800 text-white rounded-full px-8 py-3 font-semibold hover:bg-amber-900 transition-colors duration-300 text-center w-full sm:w-auto">
                  View My Work
                </Link>
                <Link href="/#contact" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-8 py-3 font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center w-full sm:w-auto">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-2/5 flex items-start justify-center mt-8 md:mt-0 md:pt-20">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="JIRAPAT KANTAROS Portrait"
                width={400}
                height={533}
                className="w-full h-full object-contain rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center text-gray-500 opacity-75 hover:opacity-100 transition-opacity cursor-pointer animate-pulse">
                <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </a>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="py-16 md:py-24 bg-white/60 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-6 sm:px-12">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-12 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>About Me</h2>
          
          <div className="mb-12 text-center w-full">
            <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">Who I Am</h3>
            <p className="text-base leading-relaxed font-light">
              Hi, I&apos;m Jirapat Kantaros. I graduated from Chiang Mai University, Faculty of Mass Communication.
              I&apos;m a friendly person who enjoys being around people and working as part of a team. I get along well with others, and I always make sure to deliver work on time. I&apos;m also dedicated and committed to doing my best in everything I do.
            </p>
          </div>

          <div className="mb-12 text-center w-full">
            <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">What I Can Do</h3>
            <div className="text-base leading-relaxed font-light text-left inline-block">
              <p className="mb-4 text-center">I have experience working with real clients, both during my internship and in ongoing freelance work. I can plan and manage full campaigns, create content ideas, and handle social media from start to finish. I&apos;ve created videos, designed visuals, and written briefs for different platforms like Facebook, TikTok, Shopee, and YouTube.</p>
              <p className="font-semibold text-center mt-6 mb-2">Here are some tools I use:</p>
              <ul className="list-none space-y-1 text-center">
                <li><b>Design & Editing:</b> Lightroom, Photoshop, DaVinci Resolve, Canva</li>
                <li><b>AI Tools:</b> ChatGPT, Claude, Gemini</li>
                <li><b>Office Tools:</b> Microsoft Word, Excel, PowerPoint</li>
              </ul>
              <p className="mt-4 text-center">I&apos;m also confident in project coordination, teamwork, and communicating ideas clearly.</p>
            </div>
          </div>

          <div className="text-center w-full">
            <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">What I&apos;m Looking For</h3>
            <p className="text-base leading-relaxed font-light">
              I&apos;m looking for opportunities to grow in marketing and creative work.
              I want to join a team where I can learn more, support brand goals, and bring real value through content and communication.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 bg-amber-800/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-amber-900/80">
            &quot;I enjoy bringing ideas to life and believe good work comes from both creativity and consistency.&quot;
          </h3>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-12 leading-tight text-center" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group block relative w-full aspect-[4/5] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-['Playfair_Display'] font-bold drop-shadow-lg">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="py-16 md:py-24 bg-white/60 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-6 sm:px-12">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight text-center" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Why Should You Choose Me?</h2>
          <div className="text-center">
            <p className="text-base leading-relaxed font-light mb-6">
              Choosing the right designer is about more than just skills—it&apos;s about passion, reliability, and a genuine desire to help you succeed. Here&apos;s why I believe I&apos;m the right fit for your next project:
            </p>
            <ul className="list-disc list-inside text-base font-light space-y-4 mb-8 inline-block text-left">
              <li><span className="font-semibold">Creative & Versatile:</span> I bring fresh ideas and adapt my style to fit your brand, ensuring every project is unique and memorable.</li>
              <li><span className="font-semibold">Detail-Oriented:</span> I care deeply about the little things, from typography to color harmony, so your design always looks polished and professional.</li>
              <li><span className="font-semibold">Collaborative:</span> I listen to your needs, value your feedback, and work with you every step of the way to achieve your vision.</li>
              <li><span className="font-semibold">Reliable & Timely:</span> I respect deadlines and am committed to delivering high-quality work on time, every time.</li>
              <li><span className="font-semibold">Continuous Learner:</span> I stay up-to-date with the latest design trends and tools, so your project always feels modern and relevant.</li>
            </ul>
            <p className="text-base leading-relaxed font-light">
              Let&apos;s create something amazing together! I&apos;m excited to help you bring your ideas to life and make your brand stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-6 sm:px-12">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Contact</h2>
          <p className="text-base leading-relaxed mb-8 font-light max-w-2xl text-center">
            I&apos;d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the form below or by email.
          </p>
          <form className="w-full max-w-md bg-white/80 rounded-xl shadow-lg p-6 mb-8 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
            <input type="email" placeholder="Your Email" className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
            <textarea placeholder="Your Message" rows={4} className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
            <button type="submit" className="bg-amber-800 text-white rounded px-4 py-2 font-semibold shadow hover:shadow-lg hover:bg-amber-900 transition-all duration-300">Send Message</button>
          </form>
          <div className="text-base font-light text-gray-700 text-center">
            Or email me directly: <a href="mailto:wanwanjirapatkantaros@gmail.com" className="underline text-amber-800 hover:text-amber-900">wanwanjirapatkantaros@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
