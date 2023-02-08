const placeholderHtml = `<div class = "single-color-holder">
<div class="color-img" style="background-color: #d5d4d8">TEST</div>
<div class="color-hex"></div>
</div>`;
let colorsArray = new Array(5).fill(placeholderHtml);

const render = () => {
  if (document.getElementById("scheme-selector").value == "") {
    document.getElementById("color-holder").innerHTML = colorsArray.join("");
  } else {
    const colorsHtml = colorsArray
      .map((color) => {
        return `<div class = "single-color-holder" id ="">
            <div class="color-img" style="background-color: ${color.hex.value};"></div>
            <div class="color-hex"><p>${color.hex.value}</p></div>
        </div>
        `;
      })
      .join("");
    document.getElementById("color-holder").innerHTML = colorsHtml;
  }
};

function submitRequest() {
  const color = document.getElementById("color-picker").value.slice(1);
  const schemeChoice = document.getElementById("scheme-selector").value;
  const fetchString = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemeChoice}&count=5`;
  if (!document.getElementById("scheme-selector").value == "") {
    fetch(fetchString)
      .then((res) => res.json())
      .then((data) => {
        colorsArray = data.colors;
        console.log(colorsArray);
        render();
      });
  }
}
render();

document.getElementById("submit-btn").addEventListener("click", submitRequest);
