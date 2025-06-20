import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-28 pb-12 max-w-3xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight">Contact</h1>
        <p className="text-base leading-relaxed mb-8 font-light max-w-2xl text-center">
          I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the form below or by email.
        </p>
        <form className="w-full max-w-md bg-white/80 rounded-xl shadow p-6 mb-8 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
          <input type="email" placeholder="Your Email" className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
          <textarea placeholder="Your Message" rows={4} className="border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200" />
          <button type="submit" className="bg-pink-600 text-white rounded px-4 py-2 font-semibold hover:bg-pink-700 transition">Send Message</button>
        </form>
        <div className="text-base font-light text-gray-700">
          Or email me directly: <a href="mailto:wanwanjirapatkantaros@gmail.com" className="underline text-pink-600 hover:text-pink-800">wanwanjirapatkantaros@gmail.com</a>
        </div>
      </div>
    </main>
  );
} 