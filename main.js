const slder=document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const firstCardwidth = slder.querySelector(".slider_content").offsetWidth;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
      slder.scrollLeft += btn.id === "left" ? -firstCardwidth : firstCardwidth;
    });
});
