export default function ContactSection() {
  return (
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
  );
} 