'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

// Reusable Button and Dot components from our old ProjectModal
interface ButtonProps {
  onClick: () => void;
}

const PrevButton = ({ onClick }: ButtonProps) => (
  <button className="embla__button embla__button--prev" onClick={onClick}>
    <svg className="embla__button__svg" viewBox="0 0 532 532"><path fill="currentColor" d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a599.98 599.98 0 0 0-229.332-229.45c-13.785-13.805-13.785-36.239 0-50.044a599.97 599.97 0 0 0 229.332-229.45z" /></svg>
  </button>
);

const NextButton = ({ onClick }: ButtonProps) => (
  <button className="embla__button embla__button--next" onClick={onClick}>
    <svg className="embla__button__svg" viewBox="0 0 532 532"><path fill="currentColor" d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.39c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 74.742 74.78 229.332 229.53 229.53 229.53 13.785 13.805 13.785 36.239 0 50.044-74.742 74.78-229.332 229.53-229.332 229.53z" /></svg>
  </button>
);

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

const DotButton = ({ selected, onClick }: DotButtonProps) => (
  <button
    className={`embla__dot ${selected ? 'embla__dot--selected' : ''}`}
    type="button"
    onClick={onClick}
  />
);

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mb-12">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image: string, index: number) => (
            <div className="embla__slide" key={index}>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Dots positioned inside the carousel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} />
      <NextButton onClick={scrollNext} />
    </div>
  );
} 