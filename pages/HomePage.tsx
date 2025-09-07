import React, { useState } from 'react';
import { CARS, TESTIMONIALS, ARTICLES, HERO_SLIDES, VIDEOS } from '../constants';
import CarCard from '../components/CarCard';
import TestimonialCard from '../components/TestimonialCard';
import ArticleCard from '../components/ArticleCard';
import TestDriveModal from '../components/TestDriveModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${HERO_SLIDES[0].image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">{HERO_SLIDES[0].title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">{HERO_SLIDES[0].subtitle}</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-suzukiRed text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 text-lg"
          >
            Jadwalkan Test Drive
          </button>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section id="produk" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">Produk Unggulan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Artikel */}
      <section id="artikel" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">Artikel & Tips Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Review */}
      <section id="video" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">Video Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map(video => (
              <div key={video.title} className="rounded-lg overflow-hidden shadow-lg">
                 <div className="relative h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <iframe 
                        src={video.embedUrl} 
                        title={video.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestDriveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HomePage;