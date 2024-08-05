

const emailForm=document.getElementById("emailForm");
const messageContainer=document.getElementById("messageContainer");
const mainContainer= document.getElementById("mainContainer");
const email=document.getElementById("email");
const dismiss= document.getElementById("dismiss");



emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var errorMessage= document.getElementById("errorMessage");

    const emailExpression=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailExpression.test(email.value)){
        mainContainer.style.display='none';
        messageContainer.style.display='flex';
       
    }
    else{
        email.style.border= '1px solid hsl(4, 100%, 67%)';
        email.style.color='hsl(4, 100%, 67%)'; 
        email.style.backgroundColor='hsl(4, 100%, 95%)'
        errorMessage.style.display='block';
    }
});

dismiss.addEventListener('click', ()=>{

    mainContainer.style.display='flex';
    messageContainer.style.display='none';
});

