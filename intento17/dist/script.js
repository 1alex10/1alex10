let parent = $(".label");
let $el = $(".label span");

let flickedChar = $el.filter((_, item) => {
  return (
    parent.data("flicker").toLowerCase() === item.textContent.toLowerCase()
  );
});
flickedChar.css({
  animation: "flicker 2s linear infinite"
});

let descr = $(".descr");
let descrChar = descr.text().split("");
descr.html("");
descrChar.forEach((element) => {
  let isFlickering = Math.floor(Math.random() * 2);
  descr.html(
    descr.html() +
      `<span class='${
        isFlickering === 1 ? "" : "tiny-flicker"
      }'>${element}</span>`
  );
});