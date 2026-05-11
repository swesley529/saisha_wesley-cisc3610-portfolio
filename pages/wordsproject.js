function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate = 1.0;
  window.speechSynthesis.speak(message);
}

function speakWord() {
  const words = document.getElementById("wordDisplay").textContent;
  speak(words);
}

function speakSentence() {
  const words = document.getElementById("sentenceDisplay").textContent;
  speak(words);
}

function syncSentence() {
  const menu = document.getElementById("wordSelect");
  const wordDisplay = document.getElementById("wordDisplay");
  const sentenceDisplay = document.getElementById("sentenceDisplay");
  const imgDiv = document.getElementById("wordImages");

  if (menu.selectedIndex > 0) {
    const selectedOption = menu.options[menu.selectedIndex];
    const word = selectedOption.value;

    wordDisplay.textContent = word;
    sentenceDisplay.textContent = selectedOption.dataset.sentence;

    for (let i = 1; i <= 5; i++) {
      const img = document.getElementById("wordImage" + i);
      img.src = word + i + ".png"; 
      img.alt = word + " " + i;
    }
    imgDiv.style.display = "block";

    speakWord();
  } else {
    wordDisplay.textContent = "You didn't select a word. Please select a word.";
    sentenceDisplay.textContent = "You didn't select a word so there is no sentence provided.";
    imgDiv.style.display = "none";
  }
}
