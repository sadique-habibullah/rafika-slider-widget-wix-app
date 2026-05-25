import reactToWebComponent from "react-to-webcomponent";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";

const CSS = `
  /* ── Outer wrapper — salmon/terracotta background ───────────────────── */
  .rs2-outer {
    font-family: Georgia, 'Times New Roman', serif;
    box-sizing: border-box;
    width: 100%;
  }

  /* ── Swiper container — also acts as the card surface ───────────────── */
  .rs2-swiper-wrap {
    position: relative;
    background-color: #F5EBE3;
    border-radius: 14px;
    max-width: 480px;
    margin: 0 auto;
    overflow: hidden;      /* clips sliding track; nav buttons sit inside */
  }

  /* Auto-height transition so the card resizes smoothly between slides */
  .rs2-swiper-wrap .swiper-wrapper {
    transition-property: transform, height;
  }

  /* ── Slide content area ─────────────────────────────────────────────── */
  .rs2-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 48px 68px;    /* side padding keeps content clear of nav arrows */
    min-height: 440px;
    gap: 24px;
    box-sizing: border-box;
  }

  /* ── Title ──────────────────────────────────────────────────────────── */
  .rs2-title {
    font-size: 28px;
    font-weight: 700;
    color: #7B3000;
    line-height: 1.3;
    margin: 0;
    word-break: break-word;
    font-family: Georgia, 'Times New Roman', serif;
  }

  /* ── Circular image ─────────────────────────────────────────────────── */
  .rs2-img-wrap {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .rs2-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Rich-text description ──────────────────────────────────────────── */
  .rs2-desc {
    font-size: 15px;
    color: #7B3000;
    line-height: 1.85;
    margin: 0;
    max-width: 320px;
    text-align: center;
    font-family: Georgia, 'Times New Roman', serif;
  }

  /* Propagate font settings into all inner HTML nodes */
  .rs2-desc * {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .rs2-desc em,
  .rs2-desc i       { font-style: italic; }

  .rs2-desc strong,
  .rs2-desc b       { font-weight: 700; }

  .rs2-desc p       { margin: 0; }
  .rs2-desc p + p   { margin-top: 0.9em; }

  /* Lists render as a centered block with left-aligned item text */
  .rs2-desc ul,
  .rs2-desc ol {
    display: inline-block;
    text-align: left;
    list-style: disc;
    padding-left: 1.35em;
    margin: 0;
  }

  .rs2-desc ol       { list-style: decimal; }
  .rs2-desc li       { margin-bottom: 5px; }

  /* ── CTA button ─────────────────────────────────────────────────────── */
  .rs2-btn {
    display: block;
    width: 100%;
    max-width: 256px;
    background-color: #C49640;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 13px 20px;
    font-size: 14.5px;
    font-weight: 600;
    font-family: Georgia, 'Times New Roman', serif;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    transition: opacity 0.2s;
    box-sizing: border-box;
  }

  .rs2-btn:hover { opacity: 0.85; }

  /* ── Navigation arrows ──────────────────────────────────────────────── */
  .rs2-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 22px;
    color: #7B3000;
    padding: 8px 5px;
    line-height: 1;
    z-index: 10;
    user-select: none;
    font-family: Georgia, 'Times New Roman', serif;
  }

  .rs2-nav--prev { left: 12px; }
  .rs2-nav--next { right: 12px; }
  .rs2-nav:hover { opacity: 0.55; }

  /* ── Tablet ─────────────────────────────────────────────────────────── */
  @media (min-width: 600px) {
    .rs2-outer         { padding: 48px 28px; }
    .rs2-swiper-wrap   { max-width: 580px; }
    .rs2-slide         { padding: 56px 80px; min-height: 480px; gap: 28px; }
    .rs2-title         { font-size: 32px; }
    .rs2-img-wrap      { width: 195px; height: 195px; }
    .rs2-desc          { font-size: 16px; max-width: 370px; }
    .rs2-btn           { max-width: 280px; font-size: 15px; padding: 14px 24px; }
    .rs2-nav           { font-size: 26px; }
    .rs2-nav--prev     { left: 14px; }
    .rs2-nav--next     { right: 14px; }
  }

  /* ── Desktop ─────────────────────────────────────────────────────────── */
  @media (min-width: 1024px) {
    .rs2-outer         { padding: 56px 40px; }
    .rs2-swiper-wrap   { max-width: 700px; }
    .rs2-slide         { padding: 64px 96px; min-height: 520px; gap: 32px; }
    .rs2-title         { font-size: 38px; }
    .rs2-img-wrap      { width: 220px; height: 220px; }
    .rs2-desc          { font-size: 17px; max-width: 440px; }
    .rs2-btn           { max-width: 300px; font-size: 16px; padding: 15px 28px; }
    .rs2-nav           { font-size: 30px; }
    .rs2-nav--prev     { left: 18px; }
    .rs2-nav--next     { right: 18px; }
  }

  /* ── Large desktop ───────────────────────────────────────────────────── */
  @media (min-width: 1440px) {
    .rs2-swiper-wrap   { max-width: 820px; }
    .rs2-slide         { padding: 72px 112px; }
    .rs2-title         { font-size: 44px; }
    .rs2-img-wrap      { width: 250px; height: 250px; }
    .rs2-desc          { font-size: 18px; max-width: 520px; }
  }
`;

const SwiperSlider = ({ slides = "" }) => {
  console.log("prop slides: ", slides);

  const [swiper, setSwiper] = useState(null);

  slides = JSON.parse(slides);
  console.log("prop slides parsed: ", slides);

  if (!slides.length) return null;

  const hasMultiple = slides.length > 1;

  return (
    <>
      <style>{CSS}</style>

      <div className="rs2-outer">
        <div className="rs2-swiper-wrap">
          <Swiper
            modules={[A11y]}
            onSwiper={setSwiper}
            slidesPerView={1}
            loop={hasMultiple}
            autoHeight
            a11y={{
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={slide.id ?? i}>
                <div className="rs2-slide">
                  {slide.title && <h2 className="rs2-title">{slide.title}</h2>}

                  {slide.image && (
                    <div className="rs2-img-wrap">
                      <img
                        src={slide.image}
                        alt={slide.title || `Slide ${i + 1}`}
                        className="rs2-img"
                      />
                    </div>
                  )}

                  {slide.description && (
                    <div
                      className="rs2-desc"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
                  )}

                  {slide.button &&
                    (slide.button.url ? (
                      <a href={slide.button.url} className="rs2-btn">
                        {slide.button.label}
                      </a>
                    ) : (
                      <button
                        className="rs2-btn"
                        onClick={slide.button.onClick}
                      >
                        {slide.button.label}
                      </button>
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {hasMultiple && (
            <>
              <button
                className="rs2-nav rs2-nav--prev"
                onClick={() => swiper?.slidePrev()}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button
                className="rs2-nav rs2-nav--next"
                onClick={() => swiper?.slideNext()}
                aria-label="Next slide"
              >
                &#8250;
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default reactToWebComponent(SwiperSlider, React, ReactDOM, {
  shadow: "open",
  props: {
    slides: "string",
  },
});
