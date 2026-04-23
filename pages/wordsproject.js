function syncSentence() {
const menu = document.getElementById("wordDisplay").textContent = selectedWord;
const display = document.getElementById("sentenceDisplay").textContent = selectedSentence;
if (menu.selectedIndex > 0) {
const selectedOption = menu.options[menu.selectedIndex];
// Extract and Display
display.value = selectedOption.dataset.temp;
} else {
display.value = "";
}
}
