const Go = () => {
  addEventListener("mousemove", (event) => {
    document.querySelector(".cursor").style.top = event.pageY + "px";
    document.querySelector(".cursor").style.left = event.pageX + "px";
    console.log(`vertical = ${event.pageY}`);
    console.log(`horizontal = ${event.pageX}`);
    document.querySelector(".box").style.height = event.pageY + "px";
    document.querySelector(".box").style.width = event.pageX + "px";
  });
  addEventListener("drag", (event) => {
    document.querySelector(".cursor").style.top = event.pageY + "px";
    document.querySelector(".cursor").style.left = event.pageX + "px";
    console.log(`darg vertical = ${event.pageY}`);
    console.log(`darg horizontal = ${event.pageX}`);
  });

  document.querySelector("button").style.display = "none";

  document.querySelector("body").style.cursor = "none";
};
