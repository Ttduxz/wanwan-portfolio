import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white text-gray-800 lg:min-h-screen flex flex-col justify-center pb-16 md:pb-0">
      <div 
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full filter blur-3xl"
      ></div>
      <AnimatedSection>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-12 text-center leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>About Me</h2>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">Who I Am</h3>
              <p className="text-base leading-relaxed font-light">
                Hi, I&apos;m Jirapat Kantaros. I graduated from Chiang Mai University, Faculty of Mass Communication.
                I&apos;m a friendly person who enjoys being around people and working as part of a team. I get along well with others, and I always make sure to deliver work on time. I&apos;m also dedicated and committed to doing my best in everything I do.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">What I Can Do</h3>
              <div className="text-base leading-relaxed font-light">
                <p className="mb-4">I have experience working with real clients, both during my internship and in ongoing freelance work. I can plan and manage full campaigns, create content ideas, and handle social media from start to finish. I&apos;ve created videos, designed visuals, and written briefs for different platforms like Facebook, TikTok, Shopee, and YouTube.</p>
                <p className="font-semibold text-center mt-6 mb-2">Here are some tools I use:</p>
                <ul className="list-none space-y-1">
                  <li><b>Design & Editing:</b> Lightroom, Photoshop, DaVinci Resolve, Canva</li>
                  <li><b>AI Tools:</b> ChatGPT, Claude, Gemini</li>
                  <li><b>Office Tools:</b> Microsoft Word, Excel, PowerPoint</li>
                </ul>
                <p className="mt-4">I&apos;m also confident in project coordination, teamwork, and communicating ideas clearly.</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">What I&apos;m Looking For</h3>
              <p className="text-base leading-relaxed font-light">
                I&apos;m looking for opportunities to grow in marketing and creative work.
                I want to join a team where I can learn more, support brand goals, and bring real value through content and communication.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
} 