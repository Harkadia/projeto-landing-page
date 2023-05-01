let nome = document.getElementById("name");
// let number = document.getElementById("number");
let email = document.getElementById("email");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() { 
  alert(`Obrigado ${nome.value} por se cadastrar. Foi enviado um email para ${email.value}`)

  
  nome += nome.value
  number.value = "";
  email.value = "";

});