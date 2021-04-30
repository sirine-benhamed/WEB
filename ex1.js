document.addEventListener("DOMContentLoaded", () => {
    function hexToRgbA(hex) {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.5)"
        );
      }
      throw new Error("Bad Hex");
    }
    let contents = document.querySelector(".noscript");
    let fonts = ["Zen Dots", "Dancing Script", "lato", "Open Sans"];
    let content = `<div class="container">
        <h1 class="title">Test project web dev</h1>
        <div class="form__contaier">
          <form action="#" id="form">
            <input type="color" name="color" value="#98AFC7"  id="color" />
            <input type="number" type="number" value="40"  id="size" />
            <select name="font" id="font">
             ${fonts.map((el) => {
               return `<option value=${el}>${el}</option>`;
             })}
            </select>
          </form>
        </div>
      </div> `;
    contents.innerHTML = content;
    let color = document.querySelector("#color");
    let h1 = document.querySelector("h1");
    let container = document.querySelector(".container");
    color.addEventListener("change", (e) => {
      h1.style.color = e.target.value;
      contents.style.background = hexToRgbA(e.target.value);
    });
   
    let size = document.querySelector("#size");
    size.addEventListener("keyup", (e) => {
      const timer = setTimeout(function () {
        h1.style.fontSize = e.target.value + "px";
        clearTimeout(timer);
      }, 1000);
    });
    let font = document.querySelector("#font");
    font.addEventListener("change", (e) => {
      h1.style.fontFamily = `${e.target.value}`;
    });
  });