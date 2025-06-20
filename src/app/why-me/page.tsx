import Link from "next/link";
import Image from "next/image";

export default function WhyMe() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-28 pb-12 max-w-3xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight text-center">Why Should You Choose Me?</h1>
        <section className="mb-10">
          <p className="text-base leading-relaxed font-light mb-6 text-center">
            Choosing the right designer is about more than just skills—it's about passion, reliability, and a genuine desire to help you succeed. Here's why I believe I'm the right fit for your next project:
          </p>
          <ul className="list-disc list-inside text-base font-light space-y-4 mb-8">
            <li><span className="font-semibold">Creative & Versatile:</span> I bring fresh ideas and adapt my style to fit your brand, ensuring every project is unique and memorable.</li>
            <li><span className="font-semibold">Detail-Oriented:</span> I care deeply about the little things, from typography to color harmony, so your design always looks polished and professional.</li>
            <li><span className="font-semibold">Collaborative:</span> I listen to your needs, value your feedback, and work with you every step of the way to achieve your vision.</li>
            <li><span className="font-semibold">Reliable & Timely:</span> I respect deadlines and am committed to delivering high-quality work on time, every time.</li>
            <li><span className="font-semibold">Continuous Learner:</span> I stay up-to-date with the latest design trends and tools, so your project always feels modern and relevant.</li>
          </ul>
          <p className="text-base leading-relaxed font-light text-center">
            Let's create something amazing together! I'm excited to help you bring your ideas to life and make your brand stand out.
          </p>
        </section>
      </div>
    </main>
  );
} 