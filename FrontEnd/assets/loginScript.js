//appel de l'API POST/login
async function login(){
    const response=await fetch("http://localhost:5678/api/users/login")
    const resultat=await response.json()
    console.log(resultat);
};
login();