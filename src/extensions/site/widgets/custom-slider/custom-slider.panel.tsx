// // import React, { type FC, useState, useEffect, useCallback } from 'react';
// // import { widget } from '@wix/editor';
// // import {
// //   SidePanel,
// //   WixDesignSystemProvider,
// //   Input,
// //   FormField,
// //   SectionHelper,
// // } from '@wix/design-system';
// // import '@wix/design-system/styles.global.css';

// // const SITE_WIDGETS_DOCS = 'https://dev.wix.com/docs/wix-cli/guides/extensions/site-extensions/site-widgets/site-widget-extension-files-and-code';

// // const Panel: FC = () => {
// //   const [displayName, setDisplayName] = useState<string>('');

// //   useEffect(() => {
// //     widget.getProp('display-name')
// //       .then(displayName => setDisplayName(displayName || `Your Widget's Title`))
// //       .catch(error => console.error('Failed to fetch display-name:', error));
// //   }, [setDisplayName]);

// //   const handleDisplayNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
// //     const newDisplayName = event.target.value;
// //     setDisplayName(newDisplayName);
// //     widget.setProp('display-name', newDisplayName);
// //   }, [setDisplayName]);

// //   return (
// //     <WixDesignSystemProvider>
// //       <SidePanel width="300" height="100vh">
// //         <SidePanel.Content noPadding stretchVertically>
// //           <SidePanel.Field>
// //             <FormField label="Display Name">
// //               <Input
// //                 type="text"
// //                 value={displayName}
// //                 onChange={handleDisplayNameChange}
// //                 aria-label="Display Name"
// //               />
// //             </FormField>
// //           </SidePanel.Field>
// //         </SidePanel.Content>
// //         <SidePanel.Footer noPadding>
// //           <SectionHelper fullWidth appearance="success" border="topBottom">
// //             Learn more about <a href={SITE_WIDGETS_DOCS} target="_blank" rel="noopener noreferrer" title="Site Widget docs">Site Widgets</a>
// //           </SectionHelper>
// //         </SidePanel.Footer>
// //       </SidePanel>
// //     </WixDesignSystemProvider>
// //   );
// // };

// // export default Panel;

// // import React, { useState } from "react";
// // import { widget } from "@wix/editor";

// // interface Slide {
// //   image: string;
// //   title: string;
// //   description: string;
// //   buttonText: string;
// //   buttonUrl: string;
// // }

// // const emptySlide = (): Slide => ({
// //   image: "",
// //   title: "",
// //   description: "",
// //   buttonText: "Book Now",
// //   buttonUrl: "#",
// // });

// // const inputStyle: React.CSSProperties = {
// //   width: "100%",
// //   padding: "6px 8px",
// //   borderRadius: "6px",
// //   border: "1px solid #ddd",
// //   fontSize: "12px",
// //   marginBottom: "6px",
// //   boxSizing: "border-box",
// // };

// // const labelStyle: React.CSSProperties = {
// //   fontSize: "11px",
// //   color: "#888",
// //   marginBottom: "2px",
// //   display: "block",
// // };

// // const btnStyle: React.CSSProperties = {
// //   padding: "7px 14px",
// //   borderRadius: "6px",
// //   border: "none",
// //   cursor: "pointer",
// //   fontSize: "12px",
// //   fontWeight: 600,
// // };

// // export default function Panel() {
// //   const [slides, setSlides] = useState<Slide[]>([emptySlide()]);
// //   const [accentColor, setAccentColor] = useState("#7B3F2A");
// //   const [bgColor, setBgColor] = useState("#F5EBE4");
// //   const [buttonColor, setButtonColor] = useState("#C4973E");

// //   const addSlide = () => setSlides([...slides, emptySlide()]);

// //   const removeSlide = (i: number) => {
// //     if (slides.length === 1) return;
// //     setSlides(slides.filter((_, idx) => idx !== i));
// //   };

// //   const update = (i: number, key: keyof Slide, value: string) => {
// //     const copy = [...slides];
// //     copy[i][key] = value;
// //     setSlides(copy);
// //   };

// //   const apply = () => {
// //     widget.setProp("slides", JSON.stringify(slides));
// //     widget.setProp("accentColor", accentColor);
// //     widget.setProp("bgColor", bgColor);
// //     widget.setProp("buttonColor", buttonColor);
// //   };

// //   return (
// //     <div style={{ padding: "12px", fontFamily: "Arial, sans-serif" }}>
// //       <h3 style={{ margin: "0 0 12px", fontSize: "14px", color: "#333" }}>
// //         🎨 Colors
// //       </h3>

// //       <label style={labelStyle}>Accent Color (text)</label>
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "8px",
// //           marginBottom: "8px",
// //           alignItems: "center",
// //         }}
// //       >
// //         <input
// //           type="color"
// //           value={accentColor}
// //           onChange={(e) => setAccentColor(e.target.value)}
// //           style={{
// //             width: "36px",
// //             height: "30px",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         />
// //         <input
// //           value={accentColor}
// //           onChange={(e) => setAccentColor(e.target.value)}
// //           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
// //         />
// //       </div>

// //       <label style={labelStyle}>Background Color</label>
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "8px",
// //           marginBottom: "8px",
// //           alignItems: "center",
// //         }}
// //       >
// //         <input
// //           type="color"
// //           value={bgColor}
// //           onChange={(e) => setBgColor(e.target.value)}
// //           style={{
// //             width: "36px",
// //             height: "30px",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         />
// //         <input
// //           value={bgColor}
// //           onChange={(e) => setBgColor(e.target.value)}
// //           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
// //         />
// //       </div>

// //       <label style={labelStyle}>Button Color</label>
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "8px",
// //           marginBottom: "16px",
// //           alignItems: "center",
// //         }}
// //       >
// //         <input
// //           type="color"
// //           value={buttonColor}
// //           onChange={(e) => setButtonColor(e.target.value)}
// //           style={{
// //             width: "36px",
// //             height: "30px",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         />
// //         <input
// //           value={buttonColor}
// //           onChange={(e) => setButtonColor(e.target.value)}
// //           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
// //         />
// //       </div>

// //       <h3 style={{ margin: "0 0 10px", fontSize: "14px", color: "#333" }}>
// //         📋 Slides
// //       </h3>

// //       {slides.map((s, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             border: "1px solid #eee",
// //             borderRadius: "8px",
// //             padding: "10px",
// //             marginBottom: "10px",
// //             background: "#fafafa",
// //           }}
// //         >
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               marginBottom: "8px",
// //             }}
// //           >
// //             <span style={{ fontSize: "12px", fontWeight: 700, color: "#555" }}>
// //               Slide {i + 1}
// //             </span>
// //             {slides.length > 1 && (
// //               <button
// //                 onClick={() => removeSlide(i)}
// //                 style={{
// //                   ...btnStyle,
// //                   background: "#fee",
// //                   color: "#c00",
// //                   padding: "3px 8px",
// //                 }}
// //               >
// //                 ✕
// //               </button>
// //             )}
// //           </div>

// //           <label style={labelStyle}>Title</label>
// //           <input
// //             placeholder="Mini Transformation Program"
// //             value={s.title}
// //             onChange={(e) => update(i, "title", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Image URL</label>
// //           <input
// //             placeholder="https://..."
// //             value={s.image}
// //             onChange={(e) => update(i, "image", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Description</label>
// //           <input
// //             placeholder="Short description..."
// //             value={s.description}
// //             onChange={(e) => update(i, "description", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Button Text</label>
// //           <input
// //             placeholder="Book Now"
// //             value={s.buttonText}
// //             onChange={(e) => update(i, "buttonText", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Button URL</label>
// //           <input
// //             placeholder="https://..."
// //             value={s.buttonUrl}
// //             onChange={(e) => update(i, "buttonUrl", e.target.value)}
// //             style={inputStyle}
// //           />
// //         </div>
// //       ))}

// //       <button
// //         onClick={addSlide}
// //         style={{
// //           ...btnStyle,
// //           background: "#f0f0f0",
// //           color: "#333",
// //           width: "100%",
// //           marginBottom: "8px",
// //         }}
// //       >
// //         + Add Slide
// //       </button>

// //       <button
// //         onClick={apply}
// //         style={{
// //           ...btnStyle,
// //           background: "#7B3F2A",
// //           color: "#fff",
// //           width: "100%",
// //           fontSize: "13px",
// //         }}
// //       >
// //         ✓ Apply Changes
// //       </button>
// //     </div>
// //   );
// // }

// // import React, { useState } from "react";
// // import { widget } from "@wix/editor";

// // interface Slide {
// //   image: string;
// //   title: string;
// //   description: string;
// //   buttonText: string;
// //   buttonUrl: string;
// // }

// // const emptySlide = (): Slide => ({
// //   image: "",
// //   title: "",
// //   description: "",
// //   buttonText: "Book Now",
// //   buttonUrl: "#",
// // });

// // export default function Panel() {
// //   const [slides, setSlides] = useState<Slide[]>([emptySlide()]);

// //   const addSlide = () => setSlides([...slides, emptySlide()]);

// //   const update = (i: number, key: keyof Slide, value: string) => {
// //     const copy = [...slides];
// //     copy[i][key] = value;
// //     setSlides(copy);
// //   };

// //   const apply = () => {
// //     widget.setProp("slides", JSON.stringify(slides));
// //   };

// //   return (
// //     <div>
// //       <h3>Panel</h3>

// //       {slides.map((s, i) => (
// //         <div key={i}>
// //           <input
// //             placeholder="Image"
// //             onChange={(e) => update(i, "image", e.target.value)}
// //           />
// //           <input
// //             placeholder="Title"
// //             onChange={(e) => update(i, "title", e.target.value)}
// //           />
// //           <input
// //             placeholder="Description"
// //             onChange={(e) => update(i, "description", e.target.value)}
// //           />
// //         </div>
// //       ))}

// //       <button onClick={addSlide}>Add</button>
// //       <button onClick={apply}>Send to Slider</button>
// //     </div>
// //   );
// // }

// // import React, { useState } from "react";
// // import { widget } from "@wix/editor";

// // interface Slide {
// //   image: string;
// //   title: string;
// //   description: string;
// //   buttonText: string;
// //   buttonUrl: string;
// // }

// // const emptySlide = (): Slide => ({
// //   image: "",
// //   title: "",
// //   description: "",
// //   buttonText: "Book Now",
// //   buttonUrl: "#",
// // });

// // const inputStyle: React.CSSProperties = {
// //   width: "100%",
// //   padding: "6px 8px",
// //   borderRadius: "6px",
// //   border: "1px solid #ddd",
// //   fontSize: "12px",
// //   marginBottom: "6px",
// //   boxSizing: "border-box",
// // };

// // const labelStyle: React.CSSProperties = {
// //   fontSize: "11px",
// //   color: "#888",
// //   marginBottom: "2px",
// //   display: "block",
// // };

// // const btnStyle: React.CSSProperties = {
// //   padding: "7px 14px",
// //   borderRadius: "6px",
// //   border: "none",
// //   cursor: "pointer",
// //   fontSize: "12px",
// //   fontWeight: 600,
// // };

// // export default function Panel() {
// //   const [slides, setSlides] = useState<Slide[]>([emptySlide()]);
// //   const [accentColor, setAccentColor] = useState("#7B3F2A");
// //   const [bgColor, setBgColor] = useState("#F5EBE4");
// //   const [buttonColor, setButtonColor] = useState("#C4973E");

// //   const addSlide = () => setSlides([...slides, emptySlide()]);

// //   const removeSlide = (i: number) => {
// //     if (slides.length === 1) return;
// //     setSlides(slides.filter((_, idx) => idx !== i));
// //   };

// //   const update = (i: number, key: keyof Slide, value: string) => {
// //     const copy = [...slides];
// //     copy[i][key] = value;
// //     setSlides(copy);
// //   };

// //   const apply = () => {
// //     widget.setProp("slides", JSON.stringify(slides));
// //     widget.setProp("accentColor", accentColor);
// //     widget.setProp("bgColor", bgColor);
// //     widget.setProp("buttonColor", buttonColor);
// //   };

// //   return (
// //     <div style={{ padding: "12px", fontFamily: "Arial, sans-serif" }}>
// //       <h3 style={{ margin: "0 0 12px", fontSize: "14px", color: "#333" }}>
// //         🎨 Colors
// //       </h3>

// //       <label style={labelStyle}>Accent Color (text)</label>
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "8px",
// //           marginBottom: "8px",
// //           alignItems: "center",
// //         }}
// //       >
// //         <input
// //           type="color"
// //           value={accentColor}
// //           onChange={(e) => setAccentColor(e.target.value)}
// //           style={{
// //             width: "36px",
// //             height: "30px",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         />
// //         <input
// //           value={accentColor}
// //           onChange={(e) => setAccentColor(e.target.value)}
// //           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
// //         />
// //       </div>

// //       <label style={labelStyle}>Background Color</label>
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "8px",
// //           marginBottom: "8px",
// //           alignItems: "center",
// //         }}
// //       >
// //         <input
// //           type="color"
// //           value={bgColor}
// //           onChange={(e) => setBgColor(e.target.value)}
// //           style={{
// //             width: "36px",
// //             height: "30px",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         />
// //         <input
// //           value={bgColor}
// //           onChange={(e) => setBgColor(e.target.value)}
// //           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
// //         />
// //       </div>

// //       <label style={labelStyle}>Button Color</label>
// //       <div
// //         style={{
// //           display: "flex",
// //           gap: "8px",
// //           marginBottom: "16px",
// //           alignItems: "center",
// //         }}
// //       >
// //         <input
// //           type="color"
// //           value={buttonColor}
// //           onChange={(e) => setButtonColor(e.target.value)}
// //           style={{
// //             width: "36px",
// //             height: "30px",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         />
// //         <input
// //           value={buttonColor}
// //           onChange={(e) => setButtonColor(e.target.value)}
// //           style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
// //         />
// //       </div>

// //       <h3 style={{ margin: "0 0 10px", fontSize: "14px", color: "#333" }}>
// //         📋 Slides
// //       </h3>

// //       {slides.map((s, i) => (
// //         <div
// //           key={i}
// //           style={{
// //             border: "1px solid #eee",
// //             borderRadius: "8px",
// //             padding: "10px",
// //             marginBottom: "10px",
// //             background: "#fafafa",
// //           }}
// //         >
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               marginBottom: "8px",
// //             }}
// //           >
// //             <span style={{ fontSize: "12px", fontWeight: 700, color: "#555" }}>
// //               Slide {i + 1}
// //             </span>
// //             {slides.length > 1 && (
// //               <button
// //                 onClick={() => removeSlide(i)}
// //                 style={{
// //                   ...btnStyle,
// //                   background: "#fee",
// //                   color: "#c00",
// //                   padding: "3px 8px",
// //                 }}
// //               >
// //                 ✕
// //               </button>
// //             )}
// //           </div>

// //           <label style={labelStyle}>Title</label>
// //           <input
// //             placeholder="Mini Transformation Program"
// //             value={s.title}
// //             onChange={(e) => update(i, "title", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Image URL</label>
// //           <input
// //             placeholder="https://..."
// //             value={s.image}
// //             onChange={(e) => update(i, "image", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Description</label>
// //           <input
// //             placeholder="Short description..."
// //             value={s.description}
// //             onChange={(e) => update(i, "description", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Button Text</label>
// //           <input
// //             placeholder="Book Now"
// //             value={s.buttonText}
// //             onChange={(e) => update(i, "buttonText", e.target.value)}
// //             style={inputStyle}
// //           />

// //           <label style={labelStyle}>Button URL</label>
// //           <input
// //             placeholder="https://..."
// //             value={s.buttonUrl}
// //             onChange={(e) => update(i, "buttonUrl", e.target.value)}
// //             style={inputStyle}
// //           />
// //         </div>
// //       ))}

// //       <button
// //         onClick={addSlide}
// //         style={{
// //           ...btnStyle,
// //           background: "#f0f0f0",
// //           color: "#333",
// //           width: "100%",
// //           marginBottom: "8px",
// //         }}
// //       >
// //         + Add Slide
// //       </button>

// //       <button
// //         onClick={apply}
// //         style={{
// //           ...btnStyle,
// //           background: "#7B3F2A",
// //           color: "#fff",
// //           width: "100%",
// //           fontSize: "13px",
// //         }}
// //       >
// //         ✓ Apply Changes
// //       </button>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { widget } from "@wix/editor";

// interface Slide {
//   image: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   buttonUrl: string;
//   price: string; // ✅ ADDED
// }

// const emptySlide = (): Slide => ({
//   image: "",
//   title: "",
//   description: "",
//   buttonText: "Book Now",
//   buttonUrl: "#",
//   price: "", // ✅ ADDED
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

//       {/* Accent */}
//       <label style={labelStyle}>Accent Color (text)</label>
//       <input
//         type="color"
//         value={accentColor}
//         onChange={(e) => setAccentColor(e.target.value)}
//       />
//       <input
//         value={accentColor}
//         onChange={(e) => setAccentColor(e.target.value)}
//         style={inputStyle}
//       />

//       {/* Background */}
//       <label style={labelStyle}>Background Color</label>
//       <input
//         type="color"
//         value={bgColor}
//         onChange={(e) => setBgColor(e.target.value)}
//       />
//       <input
//         value={bgColor}
//         onChange={(e) => setBgColor(e.target.value)}
//         style={inputStyle}
//       />

//       {/* Button */}
//       <label style={labelStyle}>Button Color</label>
//       <input
//         type="color"
//         value={buttonColor}
//         onChange={(e) => setButtonColor(e.target.value)}
//       />
//       <input
//         value={buttonColor}
//         onChange={(e) => setButtonColor(e.target.value)}
//         style={inputStyle}
//       />

//       <h3 style={{ margin: "10px 0", fontSize: "14px", color: "#333" }}>
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
//           <span style={{ fontSize: "12px", fontWeight: 700 }}>
//             Slide {i + 1}
//           </span>

//           <input
//             placeholder="Title"
//             value={s.title}
//             onChange={(e) => update(i, "title", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Image URL"
//             value={s.image}
//             onChange={(e) => update(i, "image", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Description"
//             value={s.description}
//             onChange={(e) => update(i, "description", e.target.value)}
//             style={inputStyle}
//           />

//           {/* ✅ PRICE INPUT ADDED */}
//           <input
//             placeholder="Price (e.g. $99)"
//             value={s.price}
//             onChange={(e) => update(i, "price", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Button Text"
//             value={s.buttonText}
//             onChange={(e) => update(i, "buttonText", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Button URL"
//             value={s.buttonUrl}
//             onChange={(e) => update(i, "buttonUrl", e.target.value)}
//             style={inputStyle}
//           />

//           <button
//             onClick={() => removeSlide(i)}
//             style={{ ...btnStyle, background: "#fee", color: "#c00" }}
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <button
//         onClick={addSlide}
//         style={{ ...btnStyle, background: "#f0f0f0", width: "100%" }}
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
//           marginTop: "8px",
//         }}
//       >
//         ✓ Apply Changes
//       </button>
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

// import React, { useState } from "react";
// import { widget } from "@wix/editor";

// interface Slide {
//   image: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   buttonUrl: string;
//   price?: string;
// }

// const emptySlide = (): Slide => ({
//   image: "",
//   title: "",
//   description: "",
//   buttonText: "Book Now",
//   buttonUrl: "#",
//   price: "",
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

// export default function Panel() {
//   const [slides, setSlides] = useState<Slide[]>([emptySlide()]);
//   const [accentColor, setAccentColor] = useState("#7B3F2A");
//   const [bgColor, setBgColor] = useState("#F5EBE4");
//   const [buttonColor, setButtonColor] = useState("#C4973E");

//   const addSlide = () => setSlides([...slides, emptySlide()]);

//   const update = (i: number, key: keyof Slide, value: string) => {
//     const copy = [...slides];
//     copy[i] = { ...copy[i], [key]: value };
//     setSlides(copy);
//   };

//   const apply = () => {
//     widget.setProp("slides", JSON.stringify(slides));
//     widget.setProp("accentColor", accentColor);
//     widget.setProp("bgColor", bgColor);
//     widget.setProp("buttonColor", buttonColor);
//   };

//   return (
//     <div style={{ padding: "12px", fontFamily: "Arial" }}>
//       <h3>Slides</h3>

//       {slides.map((s, i) => (
//         <div
//           key={i}
//           style={{
//             border: "1px solid #eee",
//             padding: "10px",
//             marginBottom: "10px",
//             borderRadius: "8px",
//           }}
//         >
//           <input
//             placeholder="Image"
//             value={s.image}
//             onChange={(e) => update(i, "image", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Title"
//             value={s.title}
//             onChange={(e) => update(i, "title", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Description"
//             value={s.description}
//             onChange={(e) => update(i, "description", e.target.value)}
//             style={inputStyle}
//           />

//           {/* 🔥 PRICE FIX */}
//           <input
//             placeholder="Price (e.g. $99)"
//             value={s.price || ""}
//             onChange={(e) => update(i, "price", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Button Text"
//             value={s.buttonText}
//             onChange={(e) => update(i, "buttonText", e.target.value)}
//             style={inputStyle}
//           />

//           <input
//             placeholder="Button URL"
//             value={s.buttonUrl}
//             onChange={(e) => update(i, "buttonUrl", e.target.value)}
//             style={inputStyle}
//           />
//         </div>
//       ))}

//       <button onClick={addSlide}>+ Add Slide</button>

//       <button onClick={apply} style={{ marginTop: "10px" }}>
//         Apply
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";
import { widget } from "@wix/editor";

interface Slide {
  title: string;
  image: string;

  description: string;
  buttonText: string;
  buttonUrl: string;
  price?: string;
}

const emptySlide = (): Slide => ({
  title: "",
  image: "",

  description: "",
  buttonText: "Book Now",
  buttonUrl: "#",
  price: "",
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

export default function Panel() {
  const [slides, setSlides] = useState<Slide[]>([emptySlide()]);
  const [accentColor, setAccentColor] = useState("#7B3F2A");
  const [bgColor, setBgColor] = useState("#F5EBE4");
  const [buttonColor, setButtonColor] = useState("#C4973E");

  const addSlide = () => setSlides([...slides, emptySlide()]);

  const update = (i: number, key: keyof Slide, value: string) => {
    const copy = [...slides];
    copy[i] = { ...copy[i], [key]: value };
    setSlides(copy);
  };

  const apply = () => {
    widget.setProp("slides", JSON.stringify(slides));
    widget.setProp("accentColor", accentColor);
    widget.setProp("bgColor", bgColor);
    widget.setProp("buttonColor", buttonColor);
  };

  return (
    <div style={{ padding: "12px", fontFamily: "Arial" }}>
      <h3>Slides</h3>

      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #eee",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <input
            placeholder="Image"
            value={s.image}
            onChange={(e) => update(i, "image", e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Title"
            value={s.title}
            onChange={(e) => update(i, "title", e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Description"
            value={s.description}
            onChange={(e) => update(i, "description", e.target.value)}
            style={inputStyle}
          />

          {/* 🔥 PRICE FIX */}
          <input
            placeholder="Price (e.g. $99)"
            value={s.price || ""}
            onChange={(e) => update(i, "price", e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Button Text"
            value={s.buttonText}
            onChange={(e) => update(i, "buttonText", e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Button URL"
            value={s.buttonUrl}
            onChange={(e) => update(i, "buttonUrl", e.target.value)}
            style={inputStyle}
          />
        </div>
      ))}

      <button onClick={addSlide}>+ Add Slide</button>

      <button onClick={apply} style={{ marginTop: "10px" }}>
        Apply
      </button>
    </div>
  );
}
