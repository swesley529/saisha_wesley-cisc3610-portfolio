function syncWeather() {
const menu = document.getElementById("citySelect");
const display = document.getElementById("weatherDisplay");
if (menu.selectedIndex > 0) {
const selectedOption = menu.options[menu.selectedIndex];
// Extract and Display
display.value = selectedOption.dataset.temp;
} else {
display.value = "";
}
}
