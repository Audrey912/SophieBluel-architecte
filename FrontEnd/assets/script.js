async function works(){
    const response=await fetch("http://localhost:5678/api/works")
    const resultat=await response.json()
    console.log(resultat);
};
works();

const tablProjets=Object.keys(works);
console.log(tablProjets);

const gallery=document.querySelector("gallery");
const projetsDiv=document.createElement("figure");
const imgProjets=document.createElement("img");
const titleProjets=document.createElement("figcaption");
gallery.appendChild(projetsDiv);
projetsDiv.appendChild(imgProjets);
projetsDiv.appendChild(titleProjets);

