const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cheese.jpg") {
    myImage.setAttribute("src", "images/cheese2.jpg");
  } else {
    myImage.setAttribute("src", "images/cheese.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
