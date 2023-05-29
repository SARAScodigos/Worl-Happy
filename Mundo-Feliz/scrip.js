document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("icon-buscador").addEventListener("click", mostrar_lista);



function mostrar_menu(){
    document.getElementById("move-content").classList.toggle("move-container-all");
    document.getElementById("content-icon").classList.toggle("show-content-icon");
}

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);

function mostrar_buscador(){
    document.getElementById("icon-buscador").classList.toggle("buscador-show");
    document.getElementById("box-search").classList.toggle("box-search-done")
    
}

function mostrar_lista(){
    document.getElementById("box-search").classList.toggle("box-search-done");
}


