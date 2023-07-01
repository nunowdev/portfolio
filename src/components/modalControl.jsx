import { gsap } from "gsap";

export function modalOpen() {
  gsap.to(".modal_opened", { opacity: 0 });
  gsap.to(".modal", { opacity: 1, display: "block", delay: 0.3 });
}

export function modalClose() {
  gsap.to(".modal_opened", { opacity: 1, delay: 0.3 });
  gsap.to(".modal", { opacity: 0, display: "none" });
}
