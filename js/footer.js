const codingLanguages = ["HTML", "CSS", "JavaScript", "C++"];

let footerMessage = "This website has been created with: ";
let i;
for (i = 0; i < codingLanguages.length; i++) {
  footerMessage = footerMessage + codingLanguages[i];
  if (i == codingLanguages.length - 2) {
    footerMessage = footerMessage + " and ";
  }
  else if (i == codingLanguages.length - 1) {
    footerMessage = footerMessage + "."
  }
  else {
    footerMessage = footerMessage + ", ";
  }
}


const footerElement = document.getElementById("footer-message")
footerElement.textContent = footerMessage
