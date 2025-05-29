window.addEventListener("DOMContentLoaded", () => {
	const resultDisplay = document.querySelector(".calculator-result__number");
	const numberButtons = document.querySelectorAll(".calculator-values__numbers");
	const acButton = document.querySelector(".calculator-values__item p"); // ищем кнопку с <p> AC

	let currentInput = "0";

	numberButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const textElement = button.querySelector(".calculator-values__text");

			if (textElement && textElement.tagName === "P") {
				const value = textElement.innerText.trim();

				if (/^\d$/.test(value)) {
					if (currentInput === "0") {
						currentInput = value;
					} else {
						currentInput += value;
					}
					resultDisplay.textContent = currentInput;
				}
			}
		});
	});

	// Обработчик для кнопки AC
	// Т.к. у AC кнопка с <p> внутри и текст "AC"
	const acButtonElement = Array.from(document.querySelectorAll(".calculator-values__item p")).find((p) => p.innerText.trim() === "AC");

	if (acButtonElement) {
		acButtonElement.parentElement.addEventListener("click", () => {
			currentInput = "0";
			resultDisplay.textContent = currentInput;
		});
	}
});
