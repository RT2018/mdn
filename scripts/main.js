const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/test.jpg") {
    myImage.setAttribute("src", "img/test2.jpg");
  } else {
    myImage.setAttribute("src", "img/test.jpg");
  }
});