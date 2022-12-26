//===================== login button Even Handler=============================
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});
// *******************************************************************
//==================== Deposit Button Even Handler ================================
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount');
    
    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBlanc', depositNumber);
    
    document.getElementById('depositAmount').value = "";

    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);
// ============================================================================
    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = currentDepositNumber + depositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;
// ==================================================================================
    // const addBlanc = document.getElementById('addBlanc').innerText;
    // const addTotalDeposit = parseFloat(addBlanc);
    // const totalBlanc = addTotalDeposit + depositNumber;
    // document.getElementById('addBlanc').innerText = totalBlanc;

});
    // *********************************************************************************
    // ==================== Withdraw Button Event =========================================

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBlanc', -1* withdrawNumber);
    
    document.getElementById('withdrawAmount').value = "";
    // const withdrawAmount = document.getElementById('withdrawAmount').value;
    // const withdrawNumber = parseFloat(withdrawAmount);

    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;

    // const addBlanc = document.getElementById('currentBlanc').innerText;
    // const addTotalDeposit = parseFloat(addBlanc);
    // const totalBlanc = addTotalDeposit - withdrawNumber;
    // document.getElementById('currentBlanc').innerText = totalBlanc;

});

    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const withdrawNumber = parseFloat(Amount);
        return withdrawNumber;
    }
    function updateSpanText(id, depositNumber){
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = depositNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }













