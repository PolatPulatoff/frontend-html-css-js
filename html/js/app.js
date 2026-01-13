// DOM interaction example

const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
  heading.style.color = "blue";
  alert("JavaScript is working!");
});
