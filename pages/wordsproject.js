function syncSentence() {
const menu = document.getElementById("wordSelect");
const display = document.getElementById("sentenceDisplay");
if (menu.selectedIndex > 0) {
const selectedOption = menu.options[menu.selectedIndex];
// Extract and Display
display.value = selectedOption.dataset.temp;
} else {
display.value = "";
}
}
