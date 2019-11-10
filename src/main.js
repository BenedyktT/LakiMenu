import Glide from "@glidejs/glide";
import style from "./styles/main.css";
import "./styles/about.scss";
import "./styles/appStyles.scss";

window.addEventListener("load", e => {
	const loader = document.querySelector(".loader");
	const loaderImg = document.querySelector(".loader-box");
	loader.classList.add("loader__fade");
});
const testimonials = new Glide(".glide-testimonials", {
	type: "carousel",
	hoverpause: false,
	gap: 20,
	startAt: 0,
	perView: 2,
	autoplay: false,
	animationDuration: 950,
	peek: {
		before: 50,
		after: 100
	},
	breakpoints: {
		1630: {
			peek: {
				before: 0,
				after: 0
			}
		},
		1024: {
			perView: 1,
			peek: {
				before: 0,
				after: 0
			}
		}
	}
});
testimonials.mount();

const slide = document.querySelectorAll("glide__slide img");
slide.forEach(e => (e.style.opacity = 0));

const aboutSection = document.querySelector("main");
const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", () => {
	aboutSection.scrollIntoView({ behavior: "smooth" });
});

const lightBox = document.querySelector(".img__overlay");
const imgItem = document.querySelector(".img__overlay .gallery__item--img");
const closeLightbox = document.querySelector(".close");
const imageElement = document.querySelectorAll(".gallery__item--img");

closeLightbox.addEventListener("click", () => {
	lightBox.style.opacity = "0";
	lightBox.style.display = "none";
});

for (let i = 0; i < imageElement.length; i++) {
	imageElement[i].addEventListener("click", () => {
		imgItem.src = imageElement[i].src;
		lightBox.style.display = "block";
		lightBox.style.opacity = "1";
		let current = i;
		const lightboxControls = document.querySelectorAll(".lightbox__controls");
		lightboxControls.forEach(event => {
			event.addEventListener("click", () => {
				if (event.classList.contains("left")) {
					if (current > 0) {
						imgItem.src = imageElement[current--].src;
					}
				}
				if (event.classList.contains("right")) {
					if (current < 14) {
						imgItem.src = imageElement[current++].src;
					}
				}
			});
		});
	});
}
