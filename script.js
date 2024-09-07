let input = document.getElementById("2");
let output = document.getElementById("1");

input.addEventListener("input", function (e) {
  output.textContent = e.target.value;
});
