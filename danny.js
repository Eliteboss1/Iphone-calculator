let input_number_v = document.getElementById("input_number");
let input_AC_v = document.getElementById("input_AC");

function display(displayValue) {
  if (input_number_v.value.length < 9 || isNaN(Number(input_number_v.value))) {
    input_number_v.value += displayValue;
  } else {
    if (isNaN(displayValue)) {
      input_number_v.value += displayValue;
    }
  }
}
input_AC_v.addEventListener("click", () => {
  input_number_v.value = "";
});
function solve() {
  let x = document.getElementById("input_number").value;
  let y = eval(x);
  document.getElementById("input_number").value = y;
}
