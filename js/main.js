window.addEventListener("DOMContentLoaded", () => {
	const resultDisplay = document.querySelector(".calculator-result__number");
	const numberButtons = document.querySelectorAll(".calculator-values__numbers");

	let currentInput = "0";

	numberButtons.forEach((button) => {
		button.addEventListener("click", () => {
			// Найдём текст цифры (если это не картинка)
			const textElement = button.querySelector(".calculator-values__text");

			// Если это <p> с числом
			if (textElement && textElement.tagName === "P") {
				const value = textElement.innerText.trim();

				// Только цифры (0–9)
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
});
