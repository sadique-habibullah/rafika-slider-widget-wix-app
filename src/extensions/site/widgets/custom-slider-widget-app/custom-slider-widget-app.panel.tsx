// import React, { useState } from "react";
// import { widget } from "@wix/editor";

// interface Slide {
//   image: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   buttonUrl: string;
// }

// const emptySlide = (): Slide => ({
//   image: "",
//   title: "",
//   description: "",
//   buttonText: "Book Now",
//   buttonUrl: "#",
// });

// export default function Panel() {
//   const [slides, setSlides] = useState<Slide[]>([emptySlide()]);

//   const addSlide = () => setSlides([...slides, emptySlide()]);

//   const update = (i: number, key: keyof Slide, value: string) => {
//     const copy = [...slides];
//     copy[i][key] = value;
//     setSlides(copy);
//   };

//   const apply = () => {
//     widget.setProp("slides", JSON.stringify(slides));
//   };

//   return (
//     <div>
//       <h3>Panel</h3>

//       {slides.map((s, i) => (
//         <div key={i}>
//           <input
//             placeholder="Image"
//             onChange={(e) => update(i, "image", e.target.value)}
//           />
//           <input
//             placeholder="Title"
//             onChange={(e) => update(i, "title", e.target.value)}
//           />
//           <input
//             placeholder="Description"
//             onChange={(e) => update(i, "description", e.target.value)}
//           />
//         </div>
//       ))}

//       <button onClick={addSlide}>Add</button>
//       <button onClick={apply}>Send to Slider</button>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { widget } from "@wix/editor";

// interface Slide {
//   image: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   buttonUrl: string;
// }

// const emptySlide = (): Slide => ({
//   image: "",
//   title: "",
//   description: "",
//   buttonText: "Book Now",
//   buttonUrl: "#",
// });

// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "6px 8px",
//   borderRadius: "6px",
//   border: "1px solid #ddd",
//   fontSize: "12px",
//   marginBottom: "6px",
//   boxSizing: "border-box",
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: "11px",
//   color: "#888",
//   marginBottom: "2px",
//   display: "block",
// };

// const btnStyle: React.CSSProperties = {
//   padding: "7px 14px",
//   borderRadius: "6px",
//   border: "none",
//   cursor: "pointer",
//   fontSize: "12px",
//   fontWeight: 600,
// };

// export default function Panel() {
//   const [slides, setSlides] = useState<Slide[]>([emptySlide()]);
//   const [accentColor, setAccentColor] = useState("#7B3F2A");
//   const [bgColor, setBgColor] = useState("#F5EBE4");
//   const [buttonColor, setButtonColor] = useState("#C4973E");

//   const addSlide = () => setSlides([...slides, emptySlide()]);

//   const removeSlide = (i: number) => {
//     if (slides.length === 1) return;
//     setSlides(slides.filter((_, idx) => idx !== i));
//   };

//   const update = (i: number, key: keyof Slide, value: string) => {
//     const copy = [...slides];
//     copy[i][key] = value;
//     setSlides(copy);
//   };

//   const apply = () => {
//     widget.setProp("slides", JSON.stringify(slides));
//     widget.setProp("accentColor", accentColor);
//     widget.setProp("bgColor", bgColor);
//     widget.setProp("buttonColor", buttonColor);
//   };

//   return (
//     <div style={{ padding: "12px", fontFamily: "Arial, sans-serif" }}>
//       <h3 style={{ margin: "0 0 12px", fontSize: "14px", color: "#333" }}>
//         🎨 Colors
//       </h3>

//       <label style={labelStyle}>Accent Color (text)</label>
//       <div
//         style={{
//           display: "flex",
//           gap: "8px",
//           marginBottom: "8px",
//           alignItems: "center",
//         }}
//       >
//         <input
//           type="color"
//           value={accentColor}
//           onChange={(e) => setAccentColor(e.target.value)}
//           style={{
//             width: "36px",
//             height: "30px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         />
//         <input
//           value={accentColor}
//           onChange={(e) => setAccentColor(e.target.value)}
//           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
//         />
//       </div>

//       <label style={labelStyle}>Background Color</label>
//       <div
//         style={{
//           display: "flex",
//           gap: "8px",
//           marginBottom: "8px",
//           alignItems: "center",
//         }}
//       >
//         <input
//           type="color"
//           value={bgColor}
//           onChange={(e) => setBgColor(e.target.value)}
//           style={{
//             width: "36px",
//             height: "30px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         />
//         <input
//           value={bgColor}
//           onChange={(e) => setBgColor(e.target.value)}
//           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
//         />
//       </div>

//       <label style={labelStyle}>Button Color</label>
//       <div
//         style={{
//           display: "flex",
//           gap: "8px",
//           marginBottom: "16px",
//           alignItems: "center",
//         }}
//       >
//         <input
//           type="color"
//           value={buttonColor}
//           onChange={(e) => setButtonColor(e.target.value)}
//           style={{
//             width: "36px",
//             height: "30px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         />
//         <input
//           value={buttonColor}
//           onChange={(e) => setButtonColor(e.target.value)}
//           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
//         />
//       </div>

//       <h3 style={{ margin: "0 0 10px", fontSize: "14px", color: "#333" }}>
//         📋 Slides
//       </h3>

//       {slides.map((s, i) => (
//         <div
//           key={i}
//           style={{
//             border: "1px solid #eee",
//             borderRadius: "8px",
//             padding: "10px",
//             marginBottom: "10px",
//             background: "#fafafa",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "8px",
//             }}
//           >
//             <span style={{ fontSize: "12px", fontWeight: 700, color: "#555" }}>
//               Slide {i + 1}
//             </span>
//             {slides.length > 1 && (
//               <button
//                 onClick={() => removeSlide(i)}
//                 style={{
//                   ...btnStyle,
//                   background: "#fee",
//                   color: "#c00",
//                   padding: "3px 8px",
//                 }}
//               >
//                 ✕
//               </button>
//             )}
//           </div>

//           <label style={labelStyle}>Title</label>
//           <input
//             placeholder="Mini Transformation Program"
//             value={s.title}
//             onChange={(e) => update(i, "title", e.target.value)}
//             style={inputStyle}
//           />

//           <label style={labelStyle}>Image URL</label>
//           <input
//             placeholder="https://..."
//             value={s.image}
//             onChange={(e) => update(i, "image", e.target.value)}
//             style={inputStyle}
//           />

//           <label style={labelStyle}>Description</label>
//           <input
//             placeholder="Short description..."
//             value={s.description}
//             onChange={(e) => update(i, "description", e.target.value)}
//             style={inputStyle}
//           />

//           <label style={labelStyle}>Button Text</label>
//           <input
//             placeholder="Book Now"
//             value={s.buttonText}
//             onChange={(e) => update(i, "buttonText", e.target.value)}
//             style={inputStyle}
//           />

//           <label style={labelStyle}>Button URL</label>
//           <input
//             placeholder="https://..."
//             value={s.buttonUrl}
//             onChange={(e) => update(i, "buttonUrl", e.target.value)}
//             style={inputStyle}
//           />
//         </div>
//       ))}

//       <button
//         onClick={addSlide}
//         style={{
//           ...btnStyle,
//           background: "#f0f0f0",
//           color: "#333",
//           width: "100%",
//           marginBottom: "8px",
//         }}
//       >
//         + Add Slide
//       </button>

//       <button
//         onClick={apply}
//         style={{
//           ...btnStyle,
//           background: "#7B3F2A",
//           color: "#fff",
//           width: "100%",
//           fontSize: "13px",
//         }}
//       >
//         ✓ Apply Changes
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";
import { widget } from "@wix/editor";

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const emptySlide = (): Slide => ({
  image: "",
  title: "",
  description: "",
  buttonText: "Book Now",
  buttonUrl: "#",
});

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "6px 8px",
  borderRadius: "6px",
  border: "1px solid #ddd",
  fontSize: "12px",
  marginBottom: "6px",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  color: "#888",
  marginBottom: "2px",
  display: "block",
};

const btnStyle: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: 600,
};

export default function Panel() {
  const [slides, setSlides] = useState<Slide[]>([emptySlide()]);
  const [accentColor, setAccentColor] = useState("#7B3F2A");
  const [bgColor, setBgColor] = useState("#F5EBE4");
  const [buttonColor, setButtonColor] = useState("#C4973E");

  const addSlide = () => setSlides([...slides, emptySlide()]);

  const removeSlide = (i: number) => {
    if (slides.length === 1) return;
    setSlides(slides.filter((_, idx) => idx !== i));
  };

  const update = (i: number, key: keyof Slide, value: string) => {
    const copy = [...slides];
    copy[i][key] = value;
    setSlides(copy);
  };

  const apply = () => {
    widget.setProp("slides", JSON.stringify(slides));
    widget.setProp("accentColor", accentColor);
    widget.setProp("bgColor", bgColor);
    widget.setProp("buttonColor", buttonColor);
  };

  return (
    <div style={{ padding: "12px", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ margin: "0 0 12px", fontSize: "14px", color: "#333" }}>
        🎨 Colors
      </h3>

      <label style={labelStyle}>Accent Color (text)</label>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "8px",
          alignItems: "center",
        }}
      >
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          style={{
            width: "36px",
            height: "30px",
            border: "none",
            cursor: "pointer",
          }}
        />
        <input
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
        />
      </div>

      <label style={labelStyle}>Background Color</label>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "8px",
          alignItems: "center",
        }}
      >
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          style={{
            width: "36px",
            height: "30px",
            border: "none",
            cursor: "pointer",
          }}
        />
        <input
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
        />
      </div>

      <label style={labelStyle}>Button Color</label>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        <input
          type="color"
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
          style={{
            width: "36px",
            height: "30px",
            border: "none",
            cursor: "pointer",
          }}
        />
        <input
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
          style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
        />
      </div>

      <h3 style={{ margin: "0 0 10px", fontSize: "14px", color: "#333" }}>
        📋 Slides
      </h3>

      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #eee",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            background: "#fafafa",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#555" }}>
              Slide {i + 1}
            </span>
            {slides.length > 1 && (
              <button
                onClick={() => removeSlide(i)}
                style={{
                  ...btnStyle,
                  background: "#fee",
                  color: "#c00",
                  padding: "3px 8px",
                }}
              >
                ✕
              </button>
            )}
          </div>

          <label style={labelStyle}>Title</label>
          <input
            placeholder="Mini Transformation Program"
            value={s.title}
            onChange={(e) => update(i, "title", e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Image URL</label>
          <input
            placeholder="https://..."
            value={s.image}
            onChange={(e) => update(i, "image", e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Description</label>
          <input
            placeholder="Short description..."
            value={s.description}
            onChange={(e) => update(i, "description", e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Button Text</label>
          <input
            placeholder="Book Now"
            value={s.buttonText}
            onChange={(e) => update(i, "buttonText", e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Button URL</label>
          <input
            placeholder="https://..."
            value={s.buttonUrl}
            onChange={(e) => update(i, "buttonUrl", e.target.value)}
            style={inputStyle}
          />
        </div>
      ))}

      <button
        onClick={addSlide}
        style={{
          ...btnStyle,
          background: "#f0f0f0",
          color: "#333",
          width: "100%",
          marginBottom: "8px",
        }}
      >
        + Add Slide
      </button>

      <button
        onClick={apply}
        style={{
          ...btnStyle,
          background: "#7B3F2A",
          color: "#fff",
          width: "100%",
          fontSize: "13px",
        }}
      >
        ✓ Apply Changes
      </button>
    </div>
  );
}
// ei code o ki price er code kora lagbe shei jonno ki price dekhay na
