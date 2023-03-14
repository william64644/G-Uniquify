// Get the input and output elements
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

// Get the process button and attach a click event listener
const processButton = document.getElementById("process-btn");
processButton.addEventListener("click", () => {
  // Get the input text and process it (replace all spaces with dashes)
  const inputText = inputElement.value;
  const processedText = processText(inputText);

  // Update the output element with the processed text
  outputElement.value = processedText;
  outputElement.classList.remove("empty");
});

// Get the copy button and attach a click event listener
const copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", () => {
  // Copy the output text to the clipboard
  outputElement.select();
  document.execCommand("copy");
});

// Function to process the input text
function processText(inputText) {
  const processedText = inputText.replace(/\s+/g, "-");
  return processedText;
}
