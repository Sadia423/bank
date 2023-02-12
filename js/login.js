document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email=emailField.value;
   const passField=document.getElementById('user-pass');
   const pass= passField.value;
   console.log(email,pass);
   if(email === 'sadiakhanam99415@gmail.com' && pass === '1234'){
    window.location.href='bank.html'

   }
   else{
    alert("invalid user");
   }
})
