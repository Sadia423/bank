document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmountElement=document.getElementById('user-deposit');
    const newdepositAmountString=depositAmountElement.value;
    const depositAmount =parseFloat(newdepositAmountString);
    
    
    const depositTotalElement=document.getElementById('total-deposit');
    const previousdepositTotalString=depositTotalElement.innerText;
    const depositTotal=parseFloat(previousdepositTotalString);
    const totalDeposit= depositAmount+depositTotal;
    depositTotalElement.innerText=totalDeposit;

   

    // total balance side
    const totalBalanceElement=document.getElementById('total-balance');
    const totalBalanceString=totalBalanceElement.innerText;
    const totalBalance=parseFloat(totalBalanceString);
    const currentTotalBalance=totalBalance+depositAmount;
    totalBalanceElement.innerText=currentTotalBalance;

    depositAmountElement.value=''
})