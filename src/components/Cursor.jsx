// import React, { useEffect, useRef } from "react";
// import SplashCursor from './SplashCursor'

// <SplashCursor />
// /**
//  * Cursor with JS-driven splash ripples.
//  * - Dot follows mouse.
//  * - On click, ripples are created and animated via JS (no CSS animation dependency).
//  */
// export default function Cursor() {
//   const dotRef = useRef(null);
//   const ripplesRef = useRef([]);
//   const hoverSelector = "a, button, .btn, .btn-ghost, .project";

//   useEffect(() => {
//     // Create dot
//     const dot = document.createElement("div");
//     dot.id = "custom-cursor";
//     Object.assign(dot.style, {
//       position: "fixed",
//       left: "0px",
//       top: "0px",
//       pointerEvents: "none",
//       zIndex: "9999",
//       width: "14px",
//       height: "14px",
//       borderRadius: "50%",
//       background: "rgba(255,255,255,0.08)",
//       border: "1px solid rgba(255,255,255,0.14)",
//       transform: "translate(-50%,-50%)",
//       transition: "width 150ms ease, height 150ms ease, background 150ms ease, transform 120ms ease, border-color 150ms ease",
//       mixBlendMode: "difference"
//     });
//     document.body.appendChild(dot);
//     dotRef.current = dot;

//     // Hide native cursor
//     const prevBodyCursor = document.body.style.cursor;
//     document.body.style.cursor = "none";

//     // pointer move
//     const onMove = (e) => {
//       dot.style.left = `${e.clientX}px`;
//       dot.style.top = `${e.clientY}px`;
//     };

//     // JS ripple animation function
//     function createRipple(x, y) {
//       const r = document.createElement("span");
//       r.className = "cursor-ripple-js";
//       // Inline start styles so order/CSS won't interfere
//       Object.assign(r.style, {
//         position: "fixed",
//         left: `${x}px`,
//         top: `${y}px`,
//         pointerEvents: "none",
//         zIndex: "9998",
//         width: "12px",
//         height: "12px",
//         borderRadius: "50%",
//         transform: "translate(-50%,-50%) scale(0.6)",
//         opacity: "0.95",
//         border: "2px solid rgba(99,102,241,0.9)",
//         background: "rgba(99,102,241,0.06)"
//       });
//       document.body.appendChild(r);

//       // Animation values
//       const start = performance.now();
//       const life = 700; // ms
//       const maxScale = 3.6;

//       const frame = (time) => {
//         const t = Math.min(1, (time - start) / life);
//         const eased = t < 0.5 ? (2 * t * t) : (-1 + (4 - 2 * t) * t); // quick ease
//         const scale = 0.6 + (maxScale - 0.6) * eased;
//         const alpha = 0.95 * (1 - t);
//         r.style.transform = `translate(-50%,-50%) scale(${scale})`;
//         r.style.opacity = `${alpha}`;
//         if (t < 1) {
//           const id = requestAnimationFrame(frame);
//           ripplesRef.current.push(id);
//         } else {
//           // done
//           if (r.parentNode) r.parentNode.removeChild(r);
//         }
//       };
//       requestAnimationFrame(frame);
//     }

//     // click handler
//     const onClick = (e) => {
//       createRipple(e.clientX, e.clientY);
//       // small pop on dot
//       dot.style.transform = "translate(-50%,-50%) scale(1.18)";
//       setTimeout(() => (dot.style.transform = "translate(-50%,-50%)"), 140);
//     };

//     // hover detection via delegation
//     let hoverCount = 0;
//     const onPointerOver = (e) => {
//       const el = e.target;
//       if (el && el.matches && el.matches(hoverSelector)) {
//         hoverCount++;
//         dot.style.width = "30px";
//         dot.style.height = "30px";
//         dot.style.background = "rgba(99,102,241,0.12)";
//         dot.style.borderColor = "rgba(99,102,241,0.9)";
//       }
//     };
//     const onPointerOut = (e) => {
//       const el = e.target;
//       if (el && el.matches && el.matches(hoverSelector)) {
//         hoverCount = Math.max(0, hoverCount - 1);
//         if (hoverCount === 0) {
//           dot.style.width = "14px";
//           dot.style.height = "14px";
//           dot.style.background = "rgba(255,255,255,0.08)";
//           dot.style.borderColor = "rgba(255,255,255,0.14)";
//         }
//       }
//     };

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("click", onClick);
//     window.addEventListener("pointerover", onPointerOver);
//     window.addEventListener("pointerout", onPointerOut);

//     // cleanup
//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("click", onClick);
//       window.removeEventListener("pointerover", onPointerOver);
//       window.removeEventListener("pointerout", onPointerOut);
//       document.body.style.cursor = prevBodyCursor;
//       // cancel any running rAFs (though they remove themselves)
//       ripplesRef.current.forEach(id => cancelAnimationFrame(id));
//       ripplesRef.current = [];
//       if (dot && dot.parentNode) dot.parentNode.removeChild(dot);
//       // remove any leftover ripple nodes
//       document.querySelectorAll(".cursor-ripple-js").forEach(n => n.remove());
//     };
//   }, []);

//   return null;
// }
