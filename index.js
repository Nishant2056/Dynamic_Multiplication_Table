const tableRow = document.querySelector("#table-row");
const submitButton = document.querySelector("#calculate-btn");
console.log(submitButton);
const inputField = document.querySelector("#number");

//Add eventListener
submitButton.addEventListener("click", (e) => {
  const value = inputField.value;
  console.log(value);
  render(value);
});
// Declaring constant variables
const Multipliaction_upto = 150;
const Multiplication_in_row = 10;

// rendering multiplication table
const render = (number) => {
  console.log("🚀 ~ render ~ number:", number);
  const numberOfColumns = Multipliaction_upto / Multiplication_in_row;
  let innerHtml = "";
  for (let i = 0; i <= numberOfColumns; i++) {
    innerHtml += "<td>";
    for (j = 0; j < Multiplication_in_row; j++) {
      const Multiplier = i * Multiplication_in_row + (j + 1);
      innerHtml += `<p>${number}*${Multiplier} = ${number * Multiplier}</p>`;
    }
    innerHtml += "</td>";
  }
  console.log("🚀 ~ render ~ innerHtml:", innerHtml);
  tableRow.innerHTML = innerHtml;
};
