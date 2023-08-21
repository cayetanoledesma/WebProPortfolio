
    
    
    document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
});

const imagenContainer = document.getElementById("imagenContainer");
const imagenes = [
    { src: "imagen/map1Android.png", width: "400px", height: "300px" },
    { src: "imagen/mapaandroid.png", width: "400px", height: "300px" },
    { src: "imagen/mapaandroid1.png", width: "400px", height: "300px" }
];
let imagenActual = 0;

const card = document.querySelector(".cardport img");
card.src = imagenes[imagenActual].src;
card.style.width = imagenes[imagenActual].width;
card.style.height = imagenes[imagenActual].height;

imagenContainer.addEventListener("click", () => {
    imagenActual = (imagenActual + 1) % imagenes.length;
    card.src = imagenes[imagenActual].src;
    card.style.width = imagenes[imagenActual].width;
    card.style.height = imagenes[imagenActual].height;
});

