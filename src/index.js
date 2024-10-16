const header = document.getElementById("header");

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 200) {
    console.log(scrollPosition);
    header.classList.add("newClass");
  } else {
    header.classList.remove("newClass");
  }
});
