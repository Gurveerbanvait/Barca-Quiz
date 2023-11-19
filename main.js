// DBarcelona Quiz

// Menu Button
document.getElementById("btn").addEventListener("click", BtnClicked);

// Create Variables
let First = 0;
let Second = 0;
let Third = 0;
let Fourth = 0;

function BtnClicked() {
  // Html Element for Input
  let input = document.getElementById("input").value;
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  if (input1 === "Ronaldo" || input1 === "Suarez" || input1 === "Lewandowski") {
    document.getElementById("output1").innerHTML = `<p>Correct</p>`;
    Second++;
  } else {
    document.getElementById("output1").innerHTML = `<p>Incorrect</p>`;
  }

  if (input2 === "No") {
    document.getElementById("output2").innerHTML = `<p>Correct</p>`;
    Third++;
  } else {
    document.getElementById("output2").innerHTML = `<p>incorrect</p>`;
  }

  if (input === "1899") {
    document.getElementById("output").innerHTML = `<p>Correct</p>`;
    First++;
  } else {
    document.getElementById("output").innerHTML = `<p>Incorrect</p>`;
  }

  if (input3 === "2015") {
    document.getElementById("output3").innerHTML = `<p>Correct</p>`;
    Fourth++;
  } else {
    document.getElementById("output3").innerHTML = `<p>Incorrect</p>`;
  }

  let total = ((First + Second + Third + Fourth) / 4) * 100;

  document.getElementById("output4").innerHTML = total;
}
