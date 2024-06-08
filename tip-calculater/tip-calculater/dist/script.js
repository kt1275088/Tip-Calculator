document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || billAmount <= 0 || tipPercentage < 0 || numberOfPeople <= 0) {
        alert('Please enter valid numbers.');
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100));
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    document.getElementById('totalTip').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById('amountPerPerson').textContent = `$${amountPerPerson.toFixed(2)}`;
});