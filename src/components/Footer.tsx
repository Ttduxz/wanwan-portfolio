export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200/80 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8">
        <div className="text-sm text-gray-500 font-light text-center md:flex md:justify-between">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Jirapat Kantaros. All Rights Reserved.</p>
          <a href="mailto:jirapatkantaros.work@gmail.com" className="underline hover:text-amber-800 transition-colors">
            jirapatkantaros.work@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
} 