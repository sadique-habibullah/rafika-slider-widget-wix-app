import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

interface Slide {
  title?: string;
  image?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

interface Props {
  slides?: string;
  accentColor?: string;
  bgColor?: string;
  buttonColor?: string;
}

const CustomElement: React.FC<Props> = ({
  slides,
  accentColor = "#964D32",
  bgColor = "#F8EFEA",
  buttonColor = "#CFA360",
}) => {
  // -----------------------------------
  // STATE
  // -----------------------------------

  const [data, setData] = useState<Slide[]>([]);

  // IMPORTANT
  // START FROM 1 FOR INFINITE SLIDER
  const [index, setIndex] = useState(1);

  const [isTransitioning, setIsTransitioning] = useState(true);

  // -----------------------------------
  // FIX WIX IMAGE URL
  // -----------------------------------
  // -----------------------------------
  // FIX WIX IMAGE URL (Improved)
  // -----------------------------------
  // -----------------------------------
  // IMPROVED FIX WIX IMAGE
  // -----------------------------------
  const fixImage = (image?: string) => {
    if (!image) return "";

    // Wix protocol
    if (image.startsWith("wix:image://")) {
      const id = image.split("~")[0].replace("wix:image://v1/", "");
      return `https://static.wixstatic.com/media/${id}`;
    }

    // Wix CDN safe
    if (image.includes("static.wixstatic.com/media/")) {
      return image;
    }

    // external safe check
    try {
      new URL(image);
      return image;
    } catch {
      return "https://picsum.photos/300";
    }
  };
  // -----------------------------------
  // PARSE SLIDES
  // -----------------------------------

  useEffect(() => {
    if (!slides) {
      setData([]);

      return;
    }

    try {
      const parsed = typeof slides === "string" ? JSON.parse(slides) : slides;

      if (Array.isArray(parsed)) {
        const fixedSlides = parsed.map((slide) => ({
          ...slide,

          image: fixImage(slide.image),
        }));

        setData(fixedSlides);

        // RESET
        setIndex(1);
      }
    } catch (err) {
      console.log(err);

      setData([]);
    }
  }, [slides]);

  // -----------------------------------
  // CLONE SLIDES
  // -----------------------------------

  const slidesWithClones =
    data.length > 1 ? [data[data.length - 1], ...data, data[0]] : data;

  // -----------------------------------
  // NEXT
  // -----------------------------------

  const goNext = () => {
    if (!data.length) return;

    setIndex((prev) => prev + 1);
  };

  // -----------------------------------
  // PREV
  // -----------------------------------

  const goPrev = () => {
    if (!data.length) return;

    setIndex((prev) => prev - 1);
  };

  // -----------------------------------
  // INFINITE LOOP FIX
  // -----------------------------------

  useEffect(() => {
    if (data.length <= 1) return;

    // LAST CLONE
    if (index === slidesWithClones.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);

        setIndex(1);
      }, 700);
    }

    // FIRST CLONE
    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);

        setIndex(data.length);
      }, 700);
    }
  }, [index]);

  // -----------------------------------
  // RE-ENABLE TRANSITION
  // -----------------------------------

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  // -----------------------------------
  // DOT CLICK
  // -----------------------------------

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex + 1);
  };
  console.log("hey...");
  return (
    <>
      <style>{`

        :host {
          display: block;
          width: 100%;
          height: 100%;
          font-family: Arial, sans-serif;
        }

        .wrapper {
          width: 450px;
          height: max-content;
          overflow: hidden;
          position: relative;
          background: ${bgColor};
        }

        /* -------------------------------- */
        /* SLIDER TRACK */
        /* -------------------------------- */

        .slider {

          display: flex;

          width: 100%;
          height: max-content;

          transform:
            translateX(-${index * 100}%);

          transition:
            ${
              isTransitioning
                ? "transform 0.7s cubic-bezier(0.65,0,0.35,1)"
                : "none"
            };
          /* the line below may make break the style (sadique) */
        }

        /* -------------------------------- */
        /* SINGLE SLIDE */
        /* -------------------------------- */

        .slide {

          min-width: 100%;
          height: 100%;

          display: flex;

          justify-content: center;
          align-items: center;

          padding: 40px;

          box-sizing: border-box;
        }

        /* -------------------------------- */
        /* CARD */
        /* -------------------------------- */

        .card {

          width: 100%;

          height: 100%;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .title {

        font-family:neue-haas-grotesk-display-pro, sans-serif;;
      // font-style: italic;
          font-size: 30px;
line-height:36px;
font-weight: bold;
          font-hieght: 36px;

          color: ${accentColor};

          margin-bottom: 28px;
        }
 .image {
          width: 178px;
          height: 178px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 28px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
        }
       .desc {
  font-size: 18px;
  font-family: Arial, sans-serif;
  font-style: italic;
  line-height: 22px;
  color: ${accentColor};
  margin-bottom: 34px;
  max-width: 320px;

  white-space:  pre-wrap;
}

        .btn {

          // padding: 14px 34px;

          border: none;
width:212px;
height:40px;
font-size: 16px;

 
font-family:Arial, sans-serif;

          border-radius: 50px;

          background: ${buttonColor};

          color: white;

          cursor: pointer;



          transition: 0.3s ease;
        }


        .btn:hover {
border:1px solid ;
border-color: ${buttonColor};
width:212px;
height:40px;
font-size: 16px;

font-family:Arial, sans-serif;
   background: ${bgColor};
          border-radius: 50px;
           color: ${buttonColor};

        }

        /* -------------------------------- */
        /* NAV BUTTON */
        /* -------------------------------- */

//         .nav {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);

//   width: 48px;
//   height: 48px;

//   border: none;

//   background: ${bgColor};

//   // backdrop-filter: blur(10px);
// font-weight:Light;
//   cursor: pointer;

//   font-size: 40px;  

//   z-index: 10;

//   transition: 0.3s ease;
// }

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background: ${bgColor};

  cursor: pointer;

  font-size: 40px;    

  font-weight: 100;  

  line-height: 1;

  z-index: 10;

  transition: 0.3s ease;
}

       .nav:hover {
  transform:
    translateY(-50%)
    // scale(1.08);
}

        .left {

          left: 10px;
        }

        .right {

          right: 10px;
        }

        /* -------------------------------- */
        /* DOTS */
        /* -------------------------------- */

        .dots {

          position: absolute;

          bottom: 20px;

          left: 50%;

          transform:
            translateX(-50%);

          display: flex;

          gap: 10px;
        }

        .dot {

          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #ccc;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .dot.active {

          background: ${accentColor};

          transform: scale(1.3);
        }

      `}</style>

      <div className="wrapper">
        {/* -------------------------------- */}
        {/* SLIDER */}
        {/* -------------------------------- */}

        <div className="slider">
          {slidesWithClones.map((slide, i) => (
            <div className="slide" key={i}>
              <div className="card">
                {slide?.title && <div className="title">{slide?.title}</div>}

                {slide?.image && (
                  <img
                    src={slide?.image}
                    className="image"
                    alt={slide?.title}
                  />
                )}

                {slide?.description && (
                  <div className="desc">{slide?.description}</div>
                )}

                {slide?.buttonText && (
                  <button
                    className="btn"
                    onClick={() =>
                      slide?.buttonUrl &&
                      window.open(slide?.buttonUrl, "_blank")
                    }
                  >
                    {slide?.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* -------------------------------- */}
        {/* NAVIGATION */}
        {/* -------------------------------- */}

        {data.length > 1 && (
          <>
            <button className="nav left" onClick={goPrev}>
              ‹
            </button>

            <button className="nav right" onClick={goNext}>
              ›
            </button>
          </>
        )}

        {/* -------------------------------- */}
        {/* DOTS */}
        {/* -------------------------------- */}

        {data.length > 1 && (
          <div className="dots">
            {data.map((_, i) => (
              <div
                key={i}
                className={`dot ${
                  i + 1 === index || (index === data.length + 1 && i === 0)
                    ? "active"
                    : ""
                }`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default reactToWebComponent(CustomElement, React, ReactDOM, {
  shadow: "open",

  props: {
    slides: "string",
    accentColor: "string",
    bgColor: "string",
    buttonColor: "string",
  },
});
