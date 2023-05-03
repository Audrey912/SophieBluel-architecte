fetch("http://localhost:5678/api/works").then((response)=>response.json()).then(response=>console.log(response));

const gallery=document.querySelector("gallery");
const projetsDiv=document.createElement("figure");
const imgProjets=document.createElement("img");
const titleProjets=document.createElement("figcaption");
imgProjets.src=element.imageurl;
titleProjets.innerHTML=element.title;
gallery.appendChild(projetsDiv);
projetsDiv.appendChild(imgProjets);
projetsDiv.appendChild(titleProjets);


