// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import reactToWebComponent from "react-to-webcomponent";

// interface Slide {
//   image?: string;
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   buttonUrl?: string;
//   price?: string;
// }

// interface Props {
//   slides?: string;
//   accentColor?: string;
//   bgColor?: string;
//   buttonColor?: string;
// }

// const ANIM = 350;

// const CustomElement: React.FC<Props> = ({
//   slides,
//   accentColor = "#7B3F2A",
//   bgColor = "#F5EBE4",
//   buttonColor = "#C4973E",
// }) => {
//   const [index, setIndex] = useState(0);
//   const [parsedSlides, setParsedSlides] = useState<Slide[]>([]);
//   const [dir, setDir] = useState<"next" | "prev">("next");
//   const [anim, setAnim] = useState(false);

//   useEffect(() => {
//     try {
//       const data = JSON.parse(slides || "[]");
//       setParsedSlides(Array.isArray(data) ? data : []);
//       setIndex(0);
//     } catch {
//       setParsedSlides([]);
//     }
//   }, [slides]);

//   const go = (type: "next" | "prev") => {
//     if (!parsedSlides.length) return;

//     setDir(type);
//     setAnim(true);

//     setTimeout(() => {
//       setIndex((i) =>
//         type === "next"
//           ? (i + 1) % parsedSlides.length
//           : (i - 1 + parsedSlides.length) % parsedSlides.length,
//       );

//       setTimeout(() => setAnim(false), ANIM);
//     }, ANIM);
//   };

//   const current = parsedSlides[index] || {};

//   // 🔥 SLIDE ANIMATION STYLE
//   const getStyle = () => {
//     if (!anim) return { transform: "translateX(0)", opacity: 1 };

//     if (dir === "next") return { transform: "translateX(-100%)", opacity: 0 };

//     return { transform: "translateX(100%)", opacity: 0 };
//   };

//   return (
//     <>
//       {/* 🔥 FIX WIX HEIGHT LOCK */}
//       <style>{`
//         :host {
//           display: block;
//           height: 450px !important;
//           max-height: 450px !important;
//           overflow: hidden !important;
//         }
//       `}</style>

//       {/* OUTER */}
//       <div
//         style={{
//           width: "100%",
//           height: "450px", // ✅ FIXED ALWAYS
//           overflow: "hidden",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: bgColor,
//           padding: "10px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* CARD */}
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "380px",
//             height: "450px",
//             position: "relative",
//             background: "#fff",
//             borderRadius: "18px",
//             overflow: "hidden",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//           }}
//         >
//           {/* SLIDE AREA */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "20px",
//               textAlign: "center",
//               gap: "8px",
//               transition: `all ${ANIM}ms ease`,
//               ...getStyle(),
//             }}
//           >
//             {/* IMAGE */}
//             {current.image && (
//               <img
//                 src={current.image}
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               />
//             )}

//             {/* TITLE */}
//             {current.title && (
//               <h2 style={{ color: accentColor, margin: 0 }}>{current.title}</h2>
//             )}

//             {/* DESCRIPTION */}
//             {current.description && (
//               <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>
//                 {current.description}
//               </p>
//             )}

//             {/* PRICE */}
//             {current.price && (
//               <div
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                   color: "#000",
//                   marginTop: "5px",
//                 }}
//               >
//                 💰 {current.price}
//               </div>
//             )}

//             {/* BUTTON */}
//             {current.buttonText && (
//               <button
//                 onClick={() =>
//                   current.buttonUrl && window.open(current.buttonUrl, "_blank")
//                 }
//                 style={{
//                   marginTop: "10px",
//                   padding: "10px 20px",
//                   borderRadius: "999px",
//                   border: "none",
//                   cursor: "pointer",
//                   background: buttonColor,
//                   color: "#fff",
//                 }}
//               >
//                 {current.buttonText}
//               </button>
//             )}
//           </div>

//           {/* NAV BUTTONS */}
//           {parsedSlides.length > 1 && (
//             <>
//               <button
//                 onClick={() => go("prev")}
//                 style={{
//                   position: "absolute",
//                   left: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                 }}
//               >
//                 ‹
//               </button>

//               <button
//                 onClick={() => go("next")}
//                 style={{
//                   position: "absolute",
//                   right: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                 }}
//               >
//                 ›
//               </button>

//               {/* 🔥 DOTS */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "12px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   display: "flex",
//                   gap: "6px",
//                 }}
//               >
//                 {parsedSlides.map((_, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setIndex(i)}
//                     style={{
//                       width: "7px",
//                       height: "7px",
//                       borderRadius: "50%",
//                       background: i === index ? accentColor : "#ccc",
//                       cursor: "pointer",
//                     }}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default reactToWebComponent(CustomElement, React, ReactDOM as any, {
//   props: {
//     slides: "string",
//     accentColor: "string",
//     bgColor: "string",
//     buttonColor: "string",
//   },
// });
//// eta kaj korew

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import reactToWebComponent from "react-to-webcomponent";

// interface Slide {
//   image?: string;
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   buttonUrl?: string;
//   price?: string;
// }

// interface Props {
//   slides?: string;
//   accentColor?: string;
//   bgColor?: string;
//   buttonColor?: string;
// }

// const CustomElement: React.FC<Props> = ({
//   slides,
//   accentColor = "#7B3F2A",
//   bgColor = "#F5EBE4",
//   buttonColor = "#C4973E",
// }) => {
//   const [index, setIndex] = useState(0);
//   const [data, setData] = useState<Slide[]>([]);
//   const [dir, setDir] = useState<"next" | "prev">("next");

//   useEffect(() => {
//     try {
//       const parsed = JSON.parse(slides || "[]");
//       setData(Array.isArray(parsed) ? parsed : []);
//       setIndex(0);
//     } catch {
//       setData([]);
//     }
//   }, [slides]);

//   const go = (type: "next" | "prev") => {
//     setDir(type);

//     setIndex((i) =>
//       type === "next"
//         ? (i + 1) % data.length
//         : (i - 1 + data.length) % data.length,
//     );
//   };

//   const current = data[index] || {};

//   // 🔥 REAL SLIDE MOTION (NO setTimeout)
//   const getTransform = () => {
//     if (dir === "next") {
//       return "translateX(0%)";
//     }
//     return "translateX(0%)";
//   };

//   return (
//     <>
//       {/* 🔥 LOCK HEIGHT (WIX SAFE) */}
//       <style>{`
//         :host {
//           display: block;
//           height: 450px !important;
//           max-height: 450px !important;
//           overflow: hidden !important;
//         }
//       `}</style>

//       <div
//         style={{
//           width: "100%",
//           height: "450px",
//           overflow: "hidden",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: bgColor,
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "380px",
//             height: "450px",
//             position: "relative",
//             overflow: "hidden",
//             borderRadius: "18px",
//             background: "#fff",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//           }}
//         >
//           {/* 🔥 SLIDE WRAPPER */}
//           <div
//             key={index}
//             style={{
//               position: "absolute",
//               inset: 0,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center",
//               padding: "20px",
//               gap: "10px",

//               /* REAL SMOOTH ANIMATION */
//               transition: "transform 450ms ease-in-out, opacity 450ms ease",
//               transform:
//                 dir === "next" ? "translateX(100%)" : "translateX(-100%)",

//               animation: "slideIn 450ms forwards",
//             }}
//           >
//             {/* TITLE (ABOVE IMAGE) */}
//             {current.title && (
//               <h2 style={{ color: accentColor, margin: 0 }}>{current.title}</h2>
//             )}

//             {/* IMAGE */}
//             {current.image && (
//               <img
//                 src={current.image}
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               />
//             )}

//             {/* DESCRIPTION */}
//             {current.description && (
//               <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
//                 {current.description}
//               </p>
//             )}

//             {/* PRICE (NO ICON) */}
//             {current.price && (
//               <div style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 {current.price}
//               </div>
//             )}

//             {/* BUTTON */}
//             {current.buttonText && (
//               <button
//                 onClick={() =>
//                   current.buttonUrl && window.open(current.buttonUrl, "_blank")
//                 }
//                 style={{
//                   padding: "10px 20px",
//                   borderRadius: "999px",
//                   border: "none",
//                   background: buttonColor,
//                   color: "#fff",
//                 }}
//               >
//                 {current.buttonText}
//               </button>
//             )}
//           </div>

//           {/* NAV */}
//           {data.length > 1 && (
//             <>
//               <button
//                 onClick={() => go("prev")}
//                 style={{
//                   position: "absolute",
//                   left: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   fontSize: "22px",
//                   border: "none",
//                   background: "transparent",
//                   cursor: "pointer",
//                 }}
//               >
//                 ‹
//               </button>

//               <button
//                 onClick={() => go("next")}
//                 style={{
//                   position: "absolute",
//                   right: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   fontSize: "22px",
//                   border: "none",
//                   background: "transparent",
//                   cursor: "pointer",
//                 }}
//               >
//                 ›
//               </button>

//               {/* DOTS */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "12px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   display: "flex",
//                   gap: "6px",
//                 }}
//               >
//                 {data.map((_, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setIndex(i)}
//                     style={{
//                       width: "8px",
//                       height: "8px",
//                       borderRadius: "50%",
//                       background: i === index ? accentColor : "#ccc",
//                       cursor: "pointer",
//                     }}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* OPTIONAL CLEAN ANIMATION KEYFRAME */}
//       <style>{`
//         @keyframes slideIn {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default reactToWebComponent(CustomElement, React, ReactDOM as any, {
//   props: {
//     slides: "string",
//     accentColor: "string",
//     bgColor: "string",
//     buttonColor: "string",
//   },
// });
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
  const [data, setData] = useState<Slide[]>([]);

  useEffect(() => {
    try {
      const parsed = JSON.parse(slides || "[]");
      setData(Array.isArray(parsed) ? parsed : []);
      setIndex(0);
    } catch {
      setData([]);
    }
  }, [slides]);

  const go = (dir: "next" | "prev") => {
    setIndex((i) =>
      dir === "next"
        ? (i + 1) % data.length
        : (i - 1 + data.length) % data.length,
    );
  };

  return (
    <>
      {/* 🔥 FIX WIX HEIGHT */}
      <style>{`
        :host {
          display: block;
          height: 450px !important;
          max-height: 450px !important;
          overflow: hidden !important;
        }

        .track {
          display: flex;
          height: 100%;
          transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        /* 🔥 GAP FIX HERE */
        .slide {
          min-width: calc(100% - 20px);
          margin: 0 10px; /* GAP BETWEEN CARDS */
          height: 420px;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 18px !important;
          }
        }
      `}</style>

      {/* OUTER */}
      <div
        style={{
          width: "100%",
          height: "450px",
          background: bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* VIEWPORT */}
        <div
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "450px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* TRACK */}
          <div
            className="track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {data.map((s, i) => (
              <div className="slide" key={i}>
                {/* TITLE */}
                {s.title && (
                  <h2
                    className="title"
                    style={{
                      color: accentColor,
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    {s.title}
                  </h2>
                )}

                {/* IMAGE */}
                {s.image && (
                  <img
                    src={s.image}
                    style={{
                      width: "110px",
                      height: "110px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: "10px",
                    }}
                  />
                )}

                {/* DESCRIPTION */}
                {s.description && (
                  <p style={{ fontSize: "13px", color: "#666" }}>
                    {s.description}
                  </p>
                )}

                {/* PRICE */}
                {s.price && (
                  <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                    {s.price}
                  </div>
                )}

                {/* BUTTON */}
                {s.buttonText && (
                  <button
                    onClick={() =>
                      s.buttonUrl && window.open(s.buttonUrl, "_blank")
                    }
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      borderRadius: "999px",
                      border: "none",
                      background: buttonColor,
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {s.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* NAV */}
          {data.length > 1 && (
            <>
              <button
                onClick={() => go("prev")}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "22px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ‹
              </button>

              <button
                onClick={() => go("next")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "22px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default reactToWebComponent(CustomElement, React, ReactDOM as any, {
  props: {
    slides: "string",
    accentColor: "string",
    bgColor: "string",
    buttonColor: "string",
  },
});
