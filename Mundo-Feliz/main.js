$ (function(){

    $("#icon-home").on("click", function(){

        $(".content1").fadeIn();
        $(".content2").fadeOut();
        $(".content3").fadeOut();
        $(".content4").fadeOut();
        $(".content5").fadeOut();
        $(".content6").fadeOut();
      
        

    })

    $("#icon-products").on("click", function(){

        $(".content1").fadeOut();
        $(".content2").fadeIn();
        $(".content3").fadeOut();
        $(".content4").fadeOut();
        $(".content5").fadeOut();
        $(".content6").fadeOut();
      
        

    })

    $("#icon-services").on("click", function(){

        $(".content1").fadeOut();
        $(".content2").fadeOut();
        $(".content3").fadeIn();
        $(".content4").fadeOut();
        $(".content5").fadeOut();
        $(".content6").fadeOut();
      
        

    })

    $("#icon-compras").on("click", function(){

        $(".content1").fadeOut();
        $(".content2").fadeOut();
        $(".content3").fadeOut();
        $(".content4").fadeIn();
        $(".content5").fadeOut();
        $(".content6").fadeOut();
      
        

    })

    $("#icon-contact").on("click", function(){

        $(".content1").fadeOut();
        $(".content2").fadeOut();
        $(".content3").fadeOut();
        $(".content4").fadeOut();
        $(".content5").fadeIn();
        $(".content6").fadeOut();
      
        

    })

    $("#icon-register").on("click", function(){

        $(".content1").fadeOut();
        $(".content2").fadeOut();
        $(".content3").fadeOut();
        $(".content4").fadeOut();
        $(".content5").fadeOut();
        $(".content6").fadeIn();
      
        

    })

    //-productos, diferentes tabs-//

    $("#vacas").on("click", function(){
        $(".container-vacas").fadeIn();
        $(".container-patos").fadeOut();
        $(".container-caballos").fadeOut();
        $(".container-ovejas").fadeOut();
        $(".container-gallinas").fadeOut();
        $(".container-cerdos").fadeOut();
       
    })
    
    $("#patos").on("click", function(){
        $(".container-vacas").fadeOut();
        $(".container-patos").fadeIn();
        $(".container-caballos").fadeOut();
        $(".container-ovejas").fadeOut();
        $(".container-gallinas").fadeOut();
        $(".container-cerdos").fadeOut();
        
    })

    $("#caballos").on("click", function(){
        $(".container-vacas").fadeOut();
        $(".container-patos").fadeOut();
        $(".container-caballos").fadeIn();
        $(".container-ovejas").fadeOut();
        $(".container-gallinas").fadeOut();
        $(".container-cerdos").fadeOut();
        
    })

    $("#ovejas").on("click", function(){
        $(".container-vacas").fadeOut();
        $(".container-patos").fadeOut();
        $(".container-caballos").fadeOut();
        $(".container-ovejas").fadeIn();
        $(".container-gallinas").fadeOut();
        $(".container-cerdos").fadeOut();
        
    })

    $("#gallinas").on("click", function(){
        $(".container-vacas").fadeOut();
        $(".container-patos").fadeOut();
        $(".container-caballos").fadeOut();
        $(".container-ovejas").fadeOut();
        $(".container-gallinas").fadeIn();
        $(".container-cerdos").fadeOut();
        
    })

    $("#cerdos").on("click", function(){
        $(".container-vacas").fadeOut();
        $(".container-patos").fadeOut();
        $(".container-caballos").fadeOut();
        $(".container-ovejas").fadeOut();
        $(".container-gallinas").fadeOut();
        $(".container-cerdos").fadeIn();
        
    })



    /*servicios por diferentes tabs*/

    $("#vaca").on("click", function(){
        $(".servicio1").fadeIn();
        $(".servicio2").fadeOut();
        $(".servicio3").fadeOut();
        $(".servicio4").fadeOut();
        $(".servicio5").fadeOut();
        $(".servicio6").fadeOut();
       
    })
    
    $("#pato").on("click", function(){
        $(".servicio1").fadeOut();
        $(".servicio2").fadeIn();
        $(".servicio3").fadeOut();
        $(".servicio4").fadeOut();
        $(".servicio5").fadeOut();
        $(".servicio6").fadeOut();
        
    })

    $("#caballo").on("click", function(){
        $(".servicio1").fadeOut();
        $(".servicio2").fadeOut();
        $(".servicio3").fadeIn();
        $(".servicio4").fadeOut();
        $(".servicio5").fadeOut();
        $(".servicio6").fadeOut();
        
    })

    $("#oveja").on("click", function(){
        $(".servicio1").fadeOut();
        $(".servicio2").fadeOut();
        $(".servicio3").fadeOut();
        $(".servicio4").fadeIn();
        $(".servicio5").fadeOut();
        $(".servicio6").fadeOut();
        
    })

    $("#gallina").on("click", function(){
        $(".servicio1").fadeOut();
        $(".servicio2").fadeOut();
        $(".servicio3").fadeOut();
        $(".servicio4").fadeOut();
        $(".servicio5").fadeIn();
        $(".servicio6").fadeOut();      
    })

    $("#cerdo").on("click", function(){
        $(".servicio1").fadeOut();
        $(".servicio2").fadeOut();
        $(".servicio3").fadeOut();
        $(".servicio4").fadeOut();
        $(".servicio5").fadeOut();
        $(".servicio6").fadeIn();     
    })
    
    $("#icon-search").on("click", function(){
        $(".buscador").fadeIn();   
    })
})
const iconos=document.querySelectorAll(".iconos")
const animal=document.querySelectorAll(".animal")
const animales=document.querySelectorAll(".animales")

iconos.forEach((cadaLi, i)=>{
    iconos[i].addEventListener("click", ()=>{

        iconos.forEach((cadaLi, i)=>{
            iconos[i].classList.remove("activados")

        })

        iconos[i].classList.add("activados")
    })
})

animal.forEach((cadaLi, i)=>{
    animal[i].addEventListener("click", ()=>{
        animal.forEach((cadaLi, i)=>{
            animal[i].classList.remove("activo")

        })

        animal[i].classList.add("activo")
    })
})

animales.forEach((cadaLi, i)=>{
    animales[i].addEventListener("click", ()=>{
        animales.forEach((cadaLi, i)=>{
            animales[i].classList.remove("activo")
        })

        animales[i].classList.add("activo")
    })
})

