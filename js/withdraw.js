document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawElement=document.getElementById('user-withdraw');
    const withdrawElementString=withdrawElement.value;
    const withdrawTotal=parseFloat(withdrawElementString);
    withdrawElement.value=''
    if(isNaN(withdrawTotal)){
        alert("please provide a valid number");
        return;
    }
    // get the previous withdrawvalue
    const previousWithdrawElement=document.getElementById('total-withdraw');
    const previousWithdrawElementString=previousWithdrawElement.innerText;
    const previouswithdrawElement=parseFloat(previousWithdrawElementString);
     
    
    // new total withdraw
    const totalWithdraw=withdrawTotal+previouswithdrawElement;
    previousWithdrawElement.innerText=totalWithdraw;
    // if(withdrawTotal > previouswithdrawElement){
    //     alert("Insuficient Value");
    //     return;
    // }
//   previous balance
    const previousWithdrawBalance=document.getElementById('total-balance');
    const previousWithdrawBalanceString=previousWithdrawBalance.innerText;
    const newWithdrawBalance = parseFloat(previousWithdrawBalanceString);
    
    
    // total balance after withdraw
    const newWithdraw=newWithdrawBalance - withdrawTotal;
    previousWithdrawBalance.innerText=newWithdraw;
    
})