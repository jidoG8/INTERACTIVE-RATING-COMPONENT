/**
 * @date: 2025/11/11
 * @description: Frontend Mentor | Interactive rating component
 */

/* --------DOM REFERENCES-------- */
const canvas = document.querySelector(".parent");
const ratingBtn = document.querySelector(".parent__rating-btn");
const feedback = document.querySelector(".feedback");
const feedbackDisplay = document.querySelector(".feedback__display");
const submitFeedback = document.querySelector(".parent__submit");
let selectedValue = null;

// hide feeback page on page reload
feedback.classList.add("hidden");

// store button values for manipulation
let selectRating = [
	document.querySelector(".parent__rating-btn--1"),
	document.querySelector(".parent__rating-btn--2"),
	document.querySelector(".parent__rating-btn--3"),
	document.querySelector(".parent__rating-btn--4"),
	document.querySelector(".parent__rating-btn--5"),
];

/* --------SUBMIT RATING - SHOW FEEDBACK PAGE-------- */
const userRating = (selectedRating) => {
	// clear previous btn highlight
	selectRating.forEach((btn) => {
		if (btn) btn.classList.remove("selectd");
		if (btn) btn.style.backgroundColor = "";
	});

	// highlight selected rating button:
	selectedRating.style.backgroundColor = "hsl(0, 100%, 100%)";
	selectedRating.classList.add("selectd");

	// display selectedButton rating value.
	feedbackDisplay.textContent = selectedRating.value;

	// store this value for further manipulation
	selectedValue = selectedRating.value;
};

/*______CHANGE BUTTON AND BUTTON TEXT COLOR______*/
selectRating.forEach((btn) => {
	btn.addEventListener("click", () => {
		userRating(btn);
		btn.style.color = "hsl(216, 12%, 8%)";
	});
});

/*______DISPLAY FEEDBACK______*/
submitFeedback.addEventListener("click", () => {
	if (selectedValue) {
		feedback.classList.remove("hidden");
		canvas.classList.add("hidden");
	} else {
		alert("Please select a rating first!");
	}
});
