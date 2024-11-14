console.log('Script is loaded.');
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const validate = (value) => {
    const regex = /^(?:1[-\s]?)?(?:\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/gi;
    if(value === "") {
        alert('Please provide a phone number');
        return;
    } else {
        const createP = document.createElement('p');
        createP.className = 'result';
        createP.appendChild(
            document.createTextNode(`${regex.test(value) ? 'Valid' : 'Invalid'} US number: ${value}`)
        );
        results.appendChild(createP);
    }
}

const clear = () => results.textContent = "";

clearBtn.addEventListener('click', clear);
checkBtn.addEventListener('click', () => {
    const value = userInput.value;
    validate(value);
});