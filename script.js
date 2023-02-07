const placeholderHtml = `<div class = "single-color-holder">
<div class="color-img">TEST</div>
<div class="color-hex">TEST</div>
</div>`;
let colorsArray = new Array(5).fill(placeholderHtml);

const render = () => {
  const colorsHtml = colorsArray
    .map((color) => {
      return `<div class = "single-color-holder" id ="">
            <div class="color-img" style="background-color: ${color.hex.value};"></div>
            <div class="color-hex">${color.hex.value}</div>
        </div>
        `;
    })
    .join("");
  document.getElementById("color-holder").innerHTML = colorsHtml;
};

const submitRequest = () => {
  const color = document.getElementById("color-picker").value.slice(1);
  const schemeChoice = document.getElementById("scheme-selector").value;
  const fetchString = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemeChoice}&count=5`;

  fetch(fetchString)
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      console.log(colorsArray);
      render();
    });
};

document.getElementById("submit-btn").addEventListener("click", submitRequest);
