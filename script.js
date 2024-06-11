// Characters used in the password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!-$^+";
const spaceChar = " ";

// Function to get a random character from a string
function getRandomChar(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

// Function to generate the password
function generatePassword() {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
    const spacesCheckbox = document.getElementById("spaces");

    let characters = "";

    // Add selected character sets to the pool
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;
    if (spacesCheckbox.checked) characters += spaceChar;

    // If no character set is selected, clear the password input and return
    if (characters === "") {
        passwordInput.value = "";
        return;
    }

    let password = "";
    const length = 12; // Default password length

    // Generate password ensuring no duplicates if the option is checked
    while (password.length < length) {
        let char = getRandomChar(characters);
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    // Set the generated password to the input box
    passwordInput.value = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    passwordInput.disabled = false; // Enable the input temporarily
    passwordInput.select(); // Select the text
    document.execCommand('copy'); // Copy the selected text
    passwordInput.disabled = true; // Disable the input again

    copyButton.textContent = "Copied"; // Change button text to "Copied"
    setTimeout(() => {
        copyButton.textContent = 'Copy'; // Revert button text back to "Copy" after 2 seconds
    }, 2000);
}
