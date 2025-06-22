export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-50 text-gray-800 lg:min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Contact</h2>
          <p className="text-base leading-relaxed mb-8 font-light max-w-2xl mx-auto">
            I&apos;d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the form below or by email.
          </p>
          <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mx-auto mb-8 flex flex-col gap-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1 text-left">Your Name</label>
              <input id="name" type="text" placeholder="John Doe" className="form-input w-full border border-gray-300 rounded-md px-4 py-2 transition-colors focus:outline-none" />
            </div>
            <div className="form-group">
               <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1 text-left">Your Email</label>
              <input id="email" type="email" placeholder="john.doe@example.com" className="form-input w-full border border-gray-300 rounded-md px-4 py-2 transition-colors focus:outline-none" />
            </div>
            <div className="form-group">
               <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1 text-left">Your Message</label>
              <textarea id="message" placeholder="Your message..." rows={4} className="form-input w-full border border-gray-300 rounded-md px-4 py-2 transition-colors focus:outline-none" />
            </div>
            <button type="submit" className="bg-amber-800 text-white rounded-md px-4 py-3 font-semibold shadow-md hover:shadow-lg hover:bg-amber-900 transition-all duration-300">Send Message</button>
          </form>
          <div className="text-base font-light text-gray-700 text-center">
            Or email me directly: <a href="mailto:wanwanjirapatkantaros@gmail.com" className="underline text-amber-800 hover:text-amber-900 font-medium">wanwanjirapatkantaros@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
} 