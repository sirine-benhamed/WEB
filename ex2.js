let state = {};
let arr = [];
let content = document.querySelector(".content");
let form = document.querySelector("form");
document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("change", (e) => {
    state = { ...state, [e.target.name]: e.target.value };
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    state.name == "" ||
    state.content == "" ||
    state.name == undefined ||
    state.content == undefined
  ) {
    alert(" inputs are required ");
  } else {
    arr.push(state.name + ":" + state.content);
    let string = "";
    arr.forEach((el) => {
      string = string + `<div class='text'> ${el}</div>   `;
    });
    console.log(string);
    content.innerHTML = string;
    string = "";
    state = {};
    document.querySelectorAll("input").forEach((el) => {
      el.value = "";
    });
  }
});