// src/fluid-bg.js
// Requires: npm i glslCanvas
import GlslCanvas from "glslCanvas";

export function initFluidBG() {
  const canvas = document.getElementById("fluid-bg");
  if (!canvas) return;

  // resize for devicePixelRatio
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
  }
  resize();
  window.addEventListener("resize", resize);

  const sandbox = new GlslCanvas(canvas);

  const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float circle(vec2 uv, vec2 p, float r){
  return smoothstep(r, r - 0.01, length(uv - p));
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t = u_time * 0.6;

  // moving bands
  float v1 = 0.5 + 0.5 * sin((uv.x + sin(t*0.7)) * 6.0 + t);
  float v2 = 0.5 + 0.5 * cos((uv.y + cos(t*0.9)) * 6.0 - t*0.6);
  float v3 = 0.5 + 0.5 * sin((uv.x + uv.y) * 4.0 + t*0.9);

  vec3 col = mix(vec3(0.95,0.78,0.95), vec3(0.68,0.96,0.87), v1);
  col = mix(col, vec3(0.80,0.86,0.99), v2 * 0.6);
  col += 0.08 * v3;

  // subtle vignette centered top-left like sample
  float dist = distance(uv, vec2(0.35,0.25));
  col *= smoothstep(0.95, 0.18, dist);

  // mouse highlight
  vec2 m = u_mouse / u_resolution;
  float c1 = 1.0 - circle(uv, vec2(m.x, 1.0 - m.y), 0.12 + 0.06 * sin(t*0.7));
  col *= c1;

  // final color
  gl_FragColor = vec4(col, 1.0);
}
`;

  sandbox.load(frag);

  window.addEventListener("pointermove", (e) => {
    // GlslCanvas expects mouse coords in px measured from bottom-left (we pass screen coords; shader transforms)
    sandbox.setUniform("u_mouse", [e.clientX, window.innerHeight - e.clientY]);
  });

  // keep u_resolution and u_time updated
  let start = performance.now();
  function frame() {
    const now = performance.now();
    sandbox.setUniform("u_time", (now - start) / 1000);
    sandbox.setUniform("u_resolution", [canvas.width, canvas.height]);
    requestAnimationFrame(frame);
  }
  frame();
}
