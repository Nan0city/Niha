const slides = [
  { type: "image", src: "media/1.jpeg", caption: "28th of March, 2026" },
  { type: "image", src: "media/2.jpeg", caption: "4th of April, 2026" },
  { type: "image", src: "media/3.jpeg", caption: "22nd of May, 2026" },
  { type: "image", src: "media/4.jpeg", caption: "2nd of April, 2026" },
  { type: "image", src: "media/5.jpeg", caption: "31st of March, 2026" },
  { type: "image", src: "media/6.jpeg", caption: "23rd of March, 2026" },
  { type: "image", src: "media/7.jpeg", caption: "5th of April, 2026" },
  { type: "image", src: "media/8.jpeg", caption: "18th of May, 2026" },
  { type: "image", src: "media/9.jpeg", caption: "Absolutely gorgeous" },
  { type: "image", src: "media/10.jpeg", caption: "And absolutely mine." }
];

let current = 0;
const frame = document.getElementById("media-frame");
const caption = document.getElementById("caption");
const dotsContainer = document.getElementById("dots");

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.addEventListener("click", () => { current = i; render(); });
  dotsContainer.appendChild(dot);
});

function render() {
  frame.style.opacity = "0";
  caption.style.opacity = "0";

  setTimeout(() => {
    const slide = slides[current];
    frame.innerHTML = "";

    if (slide.type === "image") {
      const img = document.createElement("img");
      img.src = slide.src;
      frame.appendChild(img);
    } else {
      const video = document.createElement("video");
      video.src = slide.src;
      video.controls = true;
      video.autoplay = true;
      frame.appendChild(video);
    }

    caption.textContent = slide.caption;
    frame.style.opacity = "1";
    caption.style.opacity = "1";

    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  }, 200);
}

document.getElementById("next-btn").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  render();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  render();
});

render();