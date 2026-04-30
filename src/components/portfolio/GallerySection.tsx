import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const galleryImages = [
  {
    url: "/gallery/1.jpg",
    alt: "Gallery Image 1"
  },
  {
    url: "/gallery/2.jpg",
    alt: "Gallery Image 2"
  },
  {
    url: "/gallery/3.jpg",
    alt: "Gallery Image 3"
  },
  {
    url: "/gallery/4.jpeg",
    alt: "Gallery Image 4"
  },
  {
    url: "/gallery/5.jpeg",
    alt: "Gallery Image 5"
  }
];

export const GallerySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -containerWidth : containerWidth,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    if (direction === 'prev') {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
    } else {
      setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="section-card min-h-[220px] md:h-full flex flex-col min-w-0">
      <div className="section-label mb-3">
        Gallery
      </div>

      {/* Scrollable image strip with side navigation */}
      <div className="relative flex-1 group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-7 h-8 rounded-md bg-white/90 dark:bg-black/80 shadow-sm hover:bg-white dark:hover:bg-black flex items-center justify-center transition-colors disabled:opacity-0"
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4 text-[rgba(40,40,40,1)] dark:text-[rgba(220,220,220,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="absolute inset-0">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto h-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="shrink-0 rounded-md overflow-hidden h-full aspect-square cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-7 h-8 rounded-md bg-white/90 dark:bg-black/80 shadow-sm hover:bg-white dark:hover:bg-black flex items-center justify-center transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4 text-[rgba(40,40,40,1)] dark:text-[rgba(220,220,220,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Lightbox Portal */}
      {selectedIndex !== null && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          {/* Close Area */}
          <div className="absolute inset-0" onClick={closeLightbox} />
          
          {/* Main Image Container */}
          <div className="relative z-10 max-w-[90vw] max-h-[90vh] flex flex-col items-center">
            <img
              src={galleryImages[selectedIndex].url}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <p className="text-white/60 text-xs mt-4 font-medium tracking-tight">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>,
        document.body
      )}
    </section>
  );
};
