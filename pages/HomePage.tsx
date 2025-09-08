import React, { useState, useEffect } from 'react';
import { CARS, TESTIMONIALS, ARTICLES, HERO_SLIDES, VIDEOS } from '../constants';
import CarCard from '../components/CarCard';
import TestimonialCard from '../components/TestimonialCard';
import ArticleCard from '../components/ArticleCard';
import TestDriveModal from '../components/TestDriveModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % HERO_SLIDES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % HERO_SLIDES.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };


  return (
    <div style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')" }}>
      {/* Hero Carousel Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-black text-white overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentSlide}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start">
               <div className={`transform transition-all duration-700 ease-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">{slide.subtitle}</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-suzukiRed text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 text-lg"
                >
                  Jadwalkan Test Drive
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors z-10"
            aria-label="Previous slide"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors z-10"
            aria-label="Next slide"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {HERO_SLIDES.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-suzukiRed' : 'bg-white/50 hover:bg-white/80'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </section>

      {/* Produk Unggulan */}
      <section id="produk" className="py-16 bg-transparent">
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
      <section id="testimoni" className="py-16 bg-white/80 backdrop-blur-sm rounded-xl m-4">
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
      <section id="artikel" className="py-16 bg-transparent">
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
      <section id="video" className="py-16 bg-white/80 backdrop-blur-sm rounded-xl m-4">
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
    </div>
  );
};

export default HomePage;