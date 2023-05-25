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
    //appel de l'API Get/Categories
    const retour=await fetch('http://localhost:5678/api/categories')
    const categorie=await retour.json()
    console.log(categorie);
    //création du bouton "tous" dans une balise
    const tous=document.createElement('button');
    //appélation du button dans le HTML
    tous.innerHTML='Tous';
    console.log(resultat);
    //création d'une constante rattachée à la class '.contenerbutton'
    const contenerButton=document.querySelector('.contenerbutton');
    contenerButton.appendChild(tous);
    //boucle pour créer autant de button que de catégories
    for(let i=0; i<categorie.length; i++){
        const button=document.createElement('button');
        button.innerHTML=categorie[i].name;
        contenerButton.appendChild(button);
        //affichage au click sur les button
        button.addEventListener("click", function(){
            const filteredCategorie=resultat.filter(object=>object.categoryId===categorie[i].id);
            //vider la gallery afin de la remplir seulement avec les travaux filtres
            gallery.innerHTML="";
            //boucle pour affichage des images filtrees dans le html
            for(let i=0; i<filteredCategorie.length; i++){
                //création des balises dans le HTML
                const projetDiv=document.createElement('figure');
                const imgProjet=document.createElement('img');
                const titleProjet=document.createElement("figcaption");
                //indication des éléments à récupérer dans le tableau et à afficher
                imgProjet.src=filteredCategorie[i].imageUrl;
                titleProjet.innerHTML=filteredCategorie[i].title;
                //rattachement des enfants aux parents
                gallery.appendChild(projetDiv);
                projetDiv.appendChild(imgProjet);
                projetDiv.appendChild(titleProjet);
            }
            console.log(filteredCategorie);
        })
        //affichage au click sur le bouton tous
        tous.addEventListener("click", function(){
            //vider la gallery afin de la remplir de nouveau par tous les travaux
            gallery.innerHTML="";
            //boucle pour reaffichage de toutes les images
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
        })
    }
};
works();

let modal=null;
//création de la constante openModal avec sa fonction qui prendra en paramètre l'événement
const openModal=function(e){
    //preventDefault car il ne faut pas que le click sur le lien fonctionne convenablement
    e.preventDefault()
    //récupération de l'élément cible sur le lien
    const target=document.querySelector(e.target.getAttribute('href'))
    //affichage de la boîte modal
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal=target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
};
const closeModal=function(e){
    if(modal===null)return
    e.preventDefault()
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal=target
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal=null
};
//fonction pour empécher la propagation du click reservé à la fermeture de la modal
const stopPropagation=function(e){
    e.stopPropagation()
};
//selection de tous les éléments ayant la class js-modal
//forEach(a=>... = selection de chaque lien
document.querySelectorAll('.js-modal').forEach(a=>{
    //pour chaque lien ajoute un addEventListener pour lorsqu'au click sur ce lien un appelle à la fonction openModal soit fait
    a.addEventListener('click', openModal)
});



