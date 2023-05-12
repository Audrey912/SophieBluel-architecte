const email=document.querySelector('#email');
const password=document.querySelector('#password');
const button=document.querySelector('button');
button.addEventListener('click', async function(){
    const resultat= await fetch('http://localhost:5678/api/users/login',{
        method:'POST',
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify({"email": email.value,
            "password": password.value})
})
const response= await resultat.json();
    console.log("retour",response);
});

