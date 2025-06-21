export default function Portfolio() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800 flex flex-col">
      {/* This div will grow to fill available space */}
      <div className="flex-grow">
        {/* Portfolio Section */}
        <section className="w-full px-8 py-32 max-w-6xl mx-auto pt-32">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-10 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Portfolio</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                {/* Replace with real project image */}
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="text-lg font-light">Project Title 1</div>
            </div>
            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                {/* Replace with real project image */}
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="text-lg font-light">Project Title 2</div>
            </div>
            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                {/* Replace with real project image */}
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="text-lg font-light">Project Title 3</div>
            </div>
            {/* Add more items as needed */}
          </div>
        </section>
      </div>
    </main>
  );
} 