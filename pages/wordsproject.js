function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate = 1.0;
  window.speechSynthesis.speak(message);
}
function speakWord() {
  const words = document.getElementById("wordDisplay");
  speak(words);
}
function speakSentence() {
  const words = document.getElementById("sentenceDisplay");
  speak(words);
}
function syncSentence() {
  const menu = document.getElementById("wordSelect");
  const wordDisplay = document.getElementById("wordDisplay");
  const sentenceDisplay = document.getElementById("sentenceDisplay");
  
if (menu.selectedIndex > 0) {
  const selectedOption = menu.options[menu.selectedIndex];
  wordDisplay.textContent = selectedOption.value;
  sentenceDisplay.textContent = selectedOption.dataset.sentence;
  speakWord();
} else {
  wordDisplay.textContent = "You didn't select a word. Please select a word.";
  sentenceDisplay.textContent = "You didn't select a sentence. Please select a sentence."
  }
}
