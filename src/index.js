const header = document.getElementById("header");

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 200) {
    header.classList.add("newClass");
  } else {
    header.classList.remove("newClass");
  }
});

const btnUp = {
  el: document.getElementById("btn"),
  show() {
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 500 ? this.show() : this.hide();
    });
    document.getElementById("btn").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();
