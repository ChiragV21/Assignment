document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupData = document.getElementById("popup-data");

    submitButton.addEventListener("click", function () {
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const country = document.getElementById("country").value;
        const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
        const profession = document.getElementById("profession").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobileNumber = document.getElementById("mobile-number").value.trim();

        if (!firstName) {
            alert("Please enter your First Name.");
        } else if (!lastName) {
            alert("Please enter your Last Name.");
        } else if (!dateOfBirth) {
            alert("Please enter your Date of Birth.");
        } else if (!country) {
            alert("Please select your Country.");
        } else if (genderInputs.length === 0) {
            alert("Please select your Gender.");
        } else if (!profession) {
            alert("Please enter your Profession.");
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid Email.");
        } else if (!isValidMobileNumber(mobileNumber)) {
            alert("Please enter a valid Mobile Number.");
        } else {
            let gender = [];
            genderInputs.forEach((input) => {
                gender.push(input.value);
            });
            const popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
            `;
            popupData.innerHTML = popupContent;
            popup.style.display = "block";
        }
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
            form.reset();
        }
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Mobile number validation function
    function isValidMobileNumber(mobileNumber) {
        const mobileNumberRegex = /^[0-9]{10}$/;
        return mobileNumberRegex.test(mobileNumber);
    }
});
