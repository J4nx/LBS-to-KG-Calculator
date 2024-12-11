function lbsToKg(lbs) {
    return lbs * 0.453592;
}

function calculate(num1, num2, operator) {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
        return "Please enter valid numbers.";
    }
    
    switch (operator) {
        case "Add":
            return n1 + n2;
        case "Subtract":
            return n1 - n2;
        case "Multiply":
            return n1 * n2;
        case "Divide":
            return n2 === 0 ? "Cannot divide by zero." : n1 / n2;
        default:
            return "No valid operator selected.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const lbsInput = document.getElementById("lbsInput");
    const kgResult = document.getElementById("kgResult");
    const convertBtn = document.getElementById("convertBtn");
    
    const calculatorForm = document.getElementById("calculatorForm");
    const calcResult = document.getElementById("calcResult");

    // Lbs to Kg Conversion
    convertBtn.addEventListener("click", () => {
        const lbsValue = lbsInput.value;
        if (lbsValue === "") {
            kgResult.textContent = "Please enter a value.";
        } else {
            kgResult.textContent = lbsToKg(lbsValue).toFixed(2);
        }
    });

    // Calculator Form
    calculatorForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;
        const operator = document.getElementById("operator").value;
        calcResult.textContent = calculate(num1, num2, operator);
    });
});
