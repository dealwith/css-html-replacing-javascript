const BLACK_COLOR = "#333";
const WHITE_COLOR = "#f0f0f0";

document.addEventListener("DOMContentLoaded", () => {
	const themeSwitch = document.getElementById("theme-switch-checkbox");

	themeSwitch.addEventListener("change", () => {
		if (themeSwitch.checked) {
			switchToDarkMode();
		} else {
			switchToLightMode();
		}
	});
});

function toggleTheme() {
	const root = document.documentElement;

	if (root.classList.contains("manual-dark")) {
		root.classList.remove("manual-dark");
		root.style.setProperty("--background-color", "#f0f0f0");
		root.style.setProperty("--text-color", "#333");
	}
}

function toggleTheme() {
	const root = document.documentElement;

	if (root.classList.contains("manual-dark")) {
		root.classList.remove("manual-dark");
		root.style.setProperty("--background-color", WHITE_COLOR);
		root.style.setProperty("--text-color", BLACK_COLOR);
	} else {
		root.classList.add("manual-dark");
		root.style.setProperty("--background-color", BLACK_COLOR);
		root.style.setProperty("--text-color", WHITE_COLOR);
	}
}
