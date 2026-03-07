import React, { useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  id: string;
}

interface ProjectImagesProps {
  images: ImageData[];
}

export const ProjectImages: React.FC<ProjectImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="bg-white dark:bg-[rgb(31,31,31)] overflow-hidden pl-5 pr-5 py-5 rounded-[32px] max-md:max-w-full max-md:pr-5 transition-colors duration-300">
      <h2 className="sr-only">Project Screenshots</h2>
      <div className="space-y-5 max-md:space-y-[10px]">
        {images.map((image, index) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className={`aspect-[1.79] object-cover w-full rounded-[20px] max-md:max-w-full transition-opacity duration-300 ${
                loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(image.id)}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-[20px] transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged project screenshot"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors text-2xl"
              aria-label="Close image modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
