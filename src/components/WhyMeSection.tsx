export default function WhyMeSection() {
  return (
    <section id="why-me" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-50 text-gray-800 lg:min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-12 text-center leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Why Should You Choose Me?</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base leading-relaxed font-light mb-8">
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
  );
} 