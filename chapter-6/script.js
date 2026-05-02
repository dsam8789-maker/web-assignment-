const priceField = document.getElementById("unitPrice");
const volumeField = document.getElementById("volume");
const outputText = document.getElementById("displayOutput");
const triggerBtn = document.getElementById("runCalculation");

function performMath() {
    const rate = parseFloat(priceField.value);
    const quantity = parseFloat(volumeField.value);

    const finalSum = rate * quantity;

    outputText.textContent = `Amount Due: £${finalSum.toFixed(2)}`;
}

triggerBtn.addEventListener("click", performMath);
