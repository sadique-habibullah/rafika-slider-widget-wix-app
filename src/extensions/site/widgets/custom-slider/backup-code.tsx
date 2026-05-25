import reactToWebComponent from "react-to-webcomponent";
import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";

const CSS = `
  .rs-slider {
    position: relative;
    background-color: #F5E4D8;
    border-radius: 10px;
    padding: 25px 50px;
    font-family: Georgia, 'Times New Roman', serif;
    width: 100%;
    height: 650px;
    max-width: 480px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .rs-slider__viewport {
    overflow: hidden;
    width: 100%;
  }

  .rs-slider__track {
    display: flex;
    align-items: stretch;
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .rs-slider__slide {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    box-sizing: border-box;
    padding: 8px 0;
    overflow: hidden;
  }

  .rs-slider__title {
    font-size: 28px;
    font-weight: 700;
    color: #7B3100;
    line-height: 1.35;
    margin: 0;
    text-align: center;
    font-family: Georgia, 'Times New Roman', serif;
    word-break: break-word;
  }

  .rs-slider__img-wrap {
    width: 170px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .rs-slider__img {
    width: 170px;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .rs-slider__desc {
    font-size: 15.5px;
    color: #7B3100;
    font-style: italic;
    line-height: 1.8;
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    max-width: 340px;
    text-align: center;
  }

  .rs-slider__desc * {
    margin: 0;
    padding: 0;
    font-style: italic;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .rs-slider__desc p + p {
    margin-top: 0.5em;
  }

  .rs-slider__btn {
    display: inline-block;
    border: 1.5px solid #C4A870;
    border-radius: 50px;
    background: transparent;
    color: #C4A870;
    padding: 12px 62px;
    font-size: 14.5px;
    font-family: Georgia, 'Times New Roman', serif;
    cursor: pointer;
    letter-spacing: 0.3px;
    text-decoration: none;
    transition: background-color 0.2s;
    white-space: nowrap;
  }

  .rs-slider__btn:hover {
    background-color: rgba(196, 168, 112, 0.1);
  }

  .rs-slider__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 28px;
    color: #5A2800;
    padding: 6px 4px;
    line-height: 1;
    z-index: 10;
    user-select: none;
    font-family: Georgia, 'Times New Roman', serif;
  }

  .rs-slider__nav--prev { left: 14px; }
  .rs-slider__nav--next { right: 14px; }
  .rs-slider__nav:hover { opacity: 0.6; }

  .rs-slider__dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 28px;
  }

  .rs-slider__dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #D4C2B8;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.25s;
    flex-shrink: 0;
  }

  .rs-slider__dot--active {
    background-color: #C4783A;
  }

  /* ── Tablet ── */
  @media (min-width: 600px) {
    .rs-slider {
      max-width: 560px;
      padding: 25px 50px;
    }

    .rs-slider__title { font-size: 32px; }
    .rs-slider__img-wrap { width: 170px; }
    .rs-slider__desc { font-size: 16px; max-width: 380px; }
    .rs-slider__btn { font-size: 15px; padding: 13px 68px; }
    .rs-slider__nav { font-size: 32px; }
    .rs-slider__nav--prev { left: 16px; }
    .rs-slider__nav--next { right: 16px; }
  }

  /* ── Desktop ── */
  @media (min-width: 900px) {
    .rs-slider {
      max-width: 720px;
      padding: 25px 50px;
    }

    .rs-slider__title { font-size: 30px; }
    .rs-slider__img-wrap { width: 170px; }
    .rs-slider__desc { font-size: 17px; max-width: 480px; }
    .rs-slider__btn { font-size: 16px; padding: 14px 72px; }
    .rs-slider__nav { font-size: 36px; }
    .rs-slider__nav--prev { left: 20px; }
    .rs-slider__nav--next { right: 20px; }
    .rs-slider__dots { margin-top: 36px; }
    .rs-slider__dot { width: 12px; height: 12px; }
  }

`;

const Slider = ({ slides = "" }) => {
  console.log("slides:", slides);

  slides = JSON.parse(slides);

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  if (!slides.length) return null;

  const total = slides.length;
  const goToPrev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const goToNext = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) dx > 0 ? goToNext() : goToPrev();
    touchStartX.current = null;
  };

  const hasMultiple = total > 1;

  return (
    <>
      <style>{CSS}</style>
      <div className="rs-slider">
        <div
          className="rs-slider__viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="rs-slider__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={slide.id ?? i} className="rs-slider__slide">
                {slide.title && (
                  <h2 className="rs-slider__title">{slide.title}</h2>
                )}

                {slide.image && (
                  <div className="rs-slider__img-wrap">
                    <img
                      src={slide.image}
                      alt={slide.title || `Slide ${i + 1}`}
                      className="rs-slider__img"
                    />
                  </div>
                )}

                {slide.description && (
                  <div
                    className="rs-slider__desc"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                )}

                {slide.buttonText && slide.buttonUrl && (
                  <a href={slide.buttonUrl} className="rs-slider__btn">
                    {slide.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {hasMultiple && (
          <>
            <button
              className="rs-slider__nav rs-slider__nav--prev"
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
            <button
              className="rs-slider__nav rs-slider__nav--next"
              onClick={goToNext}
              aria-label="Next slide"
            >
              &#8250;
            </button>
            <div className="rs-slider__dots" role="tablist" aria-label="Slides">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rs-slider__dot${i === current ? " rs-slider__dot--active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default reactToWebComponent(Slider, React, ReactDOM, {
  shadow: "open",
  props: {
    slides: "string",
  },
});
