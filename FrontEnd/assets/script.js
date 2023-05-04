//appel de l'API Get/works
async function works(){
    const response=await fetch("http://localhost:5678/api/works")
    const resultat=await response.json()
    console.log(resultat);
    //création d'une constante rattachée à la class 'gallery'
    const gallery=document.querySelector('gallery');
    //déclarer la valeur de i
    let i=0;
    //boucle pour créer autant de balise que déléments du tableau
    for(let i=0; i<resultat.length; i++){
        console.log(resultat[i]);
    }
    //création des balises dans le HTML
    const projetDiv=document.createElement('figure');
    const imgProjet=document.createElement('img');
    const titleProjet=document.createElement("figcaption");
    //indication des éléments à récupérer dans le tableau et à afficher
    imgProjet.src=resultat[i].imageUrl;
    titleProjet.innerHTML=resultat[i].title;
    //rattachement des enfants aux parents
    gallery.appendChild(projetDiv);
    projetDiv.appendChild(imgProjet);
    projetDiv.appendChild(titleProjet);
};
works();


