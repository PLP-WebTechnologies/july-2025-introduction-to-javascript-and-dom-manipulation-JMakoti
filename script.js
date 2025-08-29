// 🎯 Part 1: Mastering JavaScript Basics
document.getElementById("greetBtn").addEventListener("click", () => {
  let name = document.getElementById("username").value;

  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}`;
  } else {
    document.getElementById("greeting").textContent = `Please Enter Your name`;
  }
});

// ❤️ Part 2: JavaScript Functions — The Heart of Reusability
//calucating the total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = `Total is: ${total}`;
  return total;
}

//toggle content
function toggleContent(elementId) {
  let element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

//   🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!
//using for list
const languages = ["C", "PYTHON", "JAVASCRIPT", "C++", "RUBY", "DART"];
let list = document.getElementById("programming");
languages.forEach((lang) => {
  let li = document.createElement("li");
  li.innerText = lang;
  list.appendChild(li);
});

//using for loop
let list2 = document.getElementById("programminglangs");
for (i = 0; i < languages.length; ++i) {
  let li = document.createElement("li");
  li.innerText = languages[i];
  list2.appendChild(li);
}

//   🌐 Part 4: Mastering the DOM with JavaScript
// chaging the text
document.getElementById("change").addEventListener("click", () => {
  document.getElementById("changingText").textContent = `I am Changed`;
});
// changing the style
document.getElementById("btn").addEventListener("click", () => {
  const color = document.getElementById("color");
  color.style.backgroundColor = "blue";
});
// adding an element
document.getElementById("add").addEventListener("click", () => {
  let list = document.getElementById("list");
  const newItem = document.createElement("li");
  newItem.textContent = "NewItem";
  list.appendChild(newItem);
});
