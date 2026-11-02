import { useState, useEffect } from 'react';
import Slide from './Slide';
import './Slideshow.css';

// Slideshow built from scratch: arrows, dots, and auto-advance that pauses on hover
function Slideshow({ slides, delay = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const showSlide = (index) => {
    setCurrent((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setCurrent((current + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [current, paused, delay, slides.length]);

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <Slide
          key={slide.title}
          image={slide.image}
          label={slide.label}
          title={slide.title}
          text={slide.text}
          active={index === current}
        />
      ))}

      <button className="slide-arrow prev" type="button" aria-label="Previous slide" onClick={() => showSlide(current - 1)}>&#8249;</button>
      <button className="slide-arrow next" type="button" aria-label="Next slide" onClick={() => showSlide(current + 1)}>&#8250;</button>

      <div className="slide-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={index === current ? 'dot active' : 'dot'}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => showSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
