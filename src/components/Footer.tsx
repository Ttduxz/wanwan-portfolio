export default function Footer() {
  return (
    <footer className="w-full border-t border-[#f5f5f5] py-8 bg-white/70 text-center text-sm font-light tracking-wider">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} Jirapat Kantaros</span>
        <span>Contact: <a href="mailto:wanwanjirapatkantaros@gmail.com" className="underline hover:text-gray-500">wanwanjirapatkantaros@gmail.com</a></span>
      </div>
    </footer>
  );
} 