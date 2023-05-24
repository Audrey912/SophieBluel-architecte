//création de constante rattachées à leur id ou balise respective
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const button=document.querySelector('button');
//requête faite à l'API lors du click sur le button
button.addEventListener('click', async function(){
    //appel à l'API
    const resultat= await fetch('http://localhost:5678/api/users/login',{
        method:'POST',
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify({"email": email.value,
            "password": password.value})
    })
    const response= await resultat.json();
    console.log("retour",response);
    //condition si le login est correct rediriger vers la page d'accueil du site sinon mettre un message d'erreur
    if(response.token){
        //stockage de la réponse de l'APi par la chaine de caractère 'token' sur le localStorage
        window.localStorage.setItem("response", response.token);
        //redirection sur la page d'accueil
        document.location.href="/FrontEnd/index.html";
    }
    else{
        //affichage du message d'erreur
        document.getElementById('errorlogin').innerHTML="Identifiant ou mot de passe incorecte";
    }
});

