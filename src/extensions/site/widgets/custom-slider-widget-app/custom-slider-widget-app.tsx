import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

interface Slide {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  price?: string;
}

interface Props {
  slides?: string;
  accentColor?: string;
  bgColor?: string;
  buttonColor?: string;
}

const CustomElement: React.FC<Props> = ({
  slides,
  accentColor = "#7B3F2A",
  bgColor = "#F5EBE4",
  buttonColor = "#C4973E",
}) => {
  const [index, setIndex] = useState(0);
  const [parsedSlides, setParsedSlides] = useState<Slide[]>([]);

  /* ✅ FIX: proper slide parsing */
  useEffect(() => {
    if (!slides) return;

    try {
      const data = JSON.parse(slides);

      if (Array.isArray(data) && data.length > 0) {
        setParsedSlides(data);
        setIndex(0);
      }
    } catch (e) {
      console.log("Invalid slides");
    }
  }, [slides]);

  const changeSlide = (dir: "next" | "prev") => {
    setIndex((i) =>
      dir === "next"
        ? (i + 1) % parsedSlides.length
        : (i - 1 + parsedSlides.length) % parsedSlides.length
    );
  };

  const current = parsedSlides[index] || {};

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: bgColor,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          height: "450px",
          position: "relative",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        {/* TITLE */}
        {current.title && (
          <h2 style={{ color: accentColor, textAlign: "center" }}>
            {current.title}
          </h2>
        )}

        {/* IMAGE */}
        {current.image && (
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "10px auto",
            }}
          >
            <img
              src={current.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* DESCRIPTION */}
        {current.description && (
          <p style={{ textAlign: "center", color: accentColor }}>
            {current.description}
          </p>
        )}

        {/* 💰 PRICE (FIXED) */}
        {current.price && (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "5px",
              color: "#000",
            }}
          >
            💰 {current.price}
          </div>
        )}

        {/* BUTTON */}
        {current.buttonText && (
          <button
            onClick={() => {
              if (current.buttonUrl) window.open(current.buttonUrl, "_blank");
            }}
            style={{
              display: "block",
              margin: "15px auto",
              padding: "10px 20px",
              background: buttonColor,
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            {current.buttonText}
          </button>
        )}

        {/* NAV */}
        {parsedSlides.length > 1 && (
          <>
            <button onClick={() => changeSlide("prev")} style={navStyleLeft}>
              ‹
            </button>
            <button onClick={() => changeSlide("next")} style={navStyleRight}>
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const navStyleLeft: any = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
};

const navStyleRight: any = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
};

export default reactToWebComponent(CustomElement, React, ReactDOM as any, {
  props: {
    slides: "string",
    accentColor: "string",
    bgColor: "string",
    buttonColor: "string",
  },
});