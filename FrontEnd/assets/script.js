//appel de l'API/Get
async function works(){
    const response=await fetch("http://localhost:5678/api/works")
    const resultat=await response.json()
    console.log(resultat);
};
works();

//création d'une constante rattachée à la class 'gallery'
const gallery=document.querySelector("gallery");
//création des balises dans le HTML
const projetDiv=document.createElement("figure");
const imgProjet=document.createElement("img");
const titleProjet=document.createElement("figcaption");
//rattachement des enfants aux parents
gallery.appendChild(projetDiv);
projetDiv.appendChild(imgProjet);
projetDiv.appendChild(titleProjet);

