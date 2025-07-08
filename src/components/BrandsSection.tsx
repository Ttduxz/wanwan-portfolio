import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

const brands = [
  { name: 'Amarit', logo: '/amarit.png', width: 180, height: 77 },
  { name: 'Berror', logo: '/berror.png', width: 120, height: 120 },
  { name: 'JJ Agency', logo: '/jj.png', width: 120, height: 120 },
  { name: 'Prochang', logo: '/prochang.png', width: 195, height: 65 },
  { name: 'Vitawelle', logo: '/vitawelle.png', width: 180, height: 103 },
];

interface BrandsSectionProps {
  language: 'en' | 'zh';
}

export default function BrandsSection({ language }: BrandsSectionProps) {
  return (
    <section id="brands" className="relative overflow-hidden py-20 px-4 bg-gray-50 text-gray-800 lg:min-h-screen flex flex-col justify-center">
      <div 
        aria-hidden="true"
        className="absolute top-0 -left-1/4 w-[40rem] h-[40rem] bg-gray-300/30 rounded-full filter blur-3xl opacity-50"
      ></div>
       <div 
        aria-hidden="true"
        className="absolute bottom-0 -right-1/4 w-[50rem] h-[50rem] bg-amber-100/30 rounded-full filter blur-3xl opacity-70"
      ></div>
      <AnimatedSection>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-4 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
            {language === 'en' ? `Brands I've Worked With` : '我合作过的品牌'}
          </h2>
          <p className="text-lg text-gray-500 mb-16">
            {language === 'en'
              ? `I've had the privilege of collaborating with a diverse range of brands.`
              : '我有幸与各种品牌合作。'}
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