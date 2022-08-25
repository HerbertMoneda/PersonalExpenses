document.getElementById("user-submit").addEventListener("click", function() {
    const startingValue = document.getElementById("starting-number").value

    const utilitiesValue = startingValue * 0.20
    const investmentValue = startingValue * 0.44
    const expenseValue = startingValue-utilitiesValue-investmentValue

    document.getElementById("utilities-amount").innerHTML = utilitiesValue.toFixed(2)
    document.getElementById("investment-amount").innerHTML = investmentValue.toFixed(2)
    document.getElementById("expense-amount").innerHTML = expenseValue.toFixed(2)

})