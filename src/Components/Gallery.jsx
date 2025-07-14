import { useState, useEffect, useRef } from 'react';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import your images (adjust paths as needed)
import gal1 from '../assets/gal1.jpg';
import gal2 from '../assets/gal2.jpg';
import gal3 from '../assets/gal3.jpg';
import gal4 from '../assets/gal4.jpg';
import gal5 from '../assets/gal5.jpg';
import gal6 from '../assets/gal6.jpg';

const Gallery = () => {
  const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const intervalRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % galleryImages.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, galleryImages.length]);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false);
  };

  const openModal = (img) => {
    setModalImage(img);
    setShowModal(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsAutoPlaying(true);
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          STEM in Action
        </h2>

        {/* Main Gallery */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large Display Image */}
          <div 
            className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer transition-transform hover:scale-[1.01]"
            onClick={() => openModal(galleryImages[currentIndex])}
          >
            <img 
              src={galleryImages[currentIndex]} 
              alt={`STEM activity ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-medium">
                STEM Activity {currentIndex + 1}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-purple-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-purple-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Thumbnail Strip */}
          <div className="flex justify-center mt-6 space-x-3 overflow-x-auto py-2">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${currentIndex === index ? 'ring-4 ring-purple-500 scale-110' : 'opacity-80 hover:opacity-100'}`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Fullscreen View */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl hover:text-purple-300 transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img 
              src={modalImage} 
              alt="Fullscreen view"
              className="w-full h-full object-contain max-h-[80vh] mx-auto"
            />
            
            <div className="flex justify-between mt-4">
              <button 
                onClick={() => {
                  const newIndex = (galleryImages.indexOf(modalImage) - 1 + galleryImages.length) % galleryImages.length;
                  setModalImage(galleryImages[newIndex]);
                }}
                className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                Previous
              </button>
              <button 
                onClick={() => {
                  const newIndex = (galleryImages.indexOf(modalImage) + 1) % galleryImages.length;
                  setModalImage(galleryImages[newIndex]);
                }}
                className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;