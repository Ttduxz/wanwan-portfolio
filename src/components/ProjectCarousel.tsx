'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { type EmblaCarouselType } from 'embla-carousel-react';

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    if (!api) return;
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((image: string, index: number) => (
            <div className="min-w-0 shrink-0 grow-0 basis-full pl-4" key={index}>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute h-8 w-8 rounded-full border bg-background/80 backdrop-blur-sm shadow-sm transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-50 left-0 sm:-left-4 md:-left-12 top-1/2 -translate-y-1/2 flex items-center justify-center"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
        <span className="sr-only">Previous slide</span>
      </button>

      <button
        className="absolute h-8 w-8 rounded-full border bg-background/80 backdrop-blur-sm shadow-sm transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-50 right-0 sm:-right-4 md:-right-12 top-1/2 -translate-y-1/2 flex items-center justify-center"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  );
} 