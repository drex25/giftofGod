import React from 'react';

const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
];

const Gallery: React.FC = () => (
  <section className="relative py-20 bg-white dark:bg-neutral-900 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 z-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-neutral-900 dark:text-white drop-shadow-lg tracking-tight">
        Galería de fotos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-lg group relative">
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
