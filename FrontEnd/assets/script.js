//appel de l'API Get/works
async function works(){
    const response=await fetch("http://localhost:5678/api/works")
    const resultat=await response.json()
    console.log(resultat);
    //création d'une constante rattachée à la class '.gallery'
    const gallery=document.querySelector('.gallery');
    //boucle pour créer autant de balise que déléments du tableau
    for(let i=0; i<resultat.length; i++){
        console.log(resultat[i]);
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
    }
};
works();

//appel de l'API Get/categories
async function categories(){
    const response=await fetch('http://localhost:5678/api/categories')
    const resultat=await response.json()
    console.log(resultat);
    //création du bouton "tous" dans une balise
    const tous=document.createElement('button');
    //appélation du button dans le HTML
    tous.innerHTML='Tous';
    //création d'une constante rattachée à la class '.contenerbutton'
    const contenerButton=document.querySelector('.contenerbutton');
    contenerButton.appendChild(tous);
    //boucle pour créer autant de button que de catégories
    for(let i=0; i<resultat.length; i++){
        const button=document.createElement('button');
        button.innerHTML=resultat[i].name;
        contenerButton.appendChild(button);
    }
};
categories();


