import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

const brands = [
  { name: 'Amarit', logo: '/amarit.png', width: 180, height: 77 },
  { name: 'Berror', logo: '/berror.png', width: 120, height: 120 },
  { name: 'JJ Agency', logo: '/jj.png', width: 120, height: 120 },
  { name: 'Prochang', logo: '/prochang.png', width: 195, height: 65 },
  { name: 'Vitawelle', logo: '/vitawelle.png', width: 180, height: 103 },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 px-4 bg-gray-50 text-gray-800 lg:min-h-screen flex flex-col justify-center">
      <AnimatedSection>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-4 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
            Brands I&apos;ve Worked With
          </h2>
          <p className="text-lg text-gray-500 mb-16">
            I&apos;ve had the privilege of collaborating with a diverse range of brands.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16">
            {brands.map((brand) => (
              <div key={brand.name} className="flex-shrink-0" title={brand.name}>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
} 