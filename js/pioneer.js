// login button event handler

const loginButton = document.getElementById('loginId');
loginButton.addEventListener('click', function(){
   const loginArea = document.getElementById('login-area');
   loginArea.style.display = 'none';
   const transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display = 'block';
})

// deposit btn event handler
const depositBtn = document.getElementById('addDeposit');
    depositBtn.addEventListener('click', function(){
        const depositAmount = document.getElementById('depositAmount').value
        const depositNum = parseFloat(depositAmount);

            updateSpanText("currentDeposit", depositNum);
            updateSpanText("currentBalance", depositNum);

        document.getElementById('depositAmount').value = "";
       
    })

    function updateSpanText(id, depositNum) {
        const current = document.getElementById(id).innerText;
        const currentNum = parseFloat(current);
        const total = depositNum + currentNum;
        document.getElementById(id).innerText = total;
    }