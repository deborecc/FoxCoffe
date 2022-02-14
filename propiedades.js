const navBar=document.querySelector(".boton_nav")
const menu=document.querySelector(".nav");
const links=document.querySelectorAll("nav ul li a")


  


navBar.addEventListener("click",()=>{
  menu.classList.toggle('active'); //Llamo a mi clase "active" para que el menu aparezca, la misma esta en el mediaQ responsive, solo aplica a ese tamaño//
  
  



})

links.forEach((item)=>{
  item.addEventListener('click',()=>{

    menu.classList.toggle('active');
    
    
    
    
    
 });
 });








    ///$("#boton_nav").Click(function(){
        //$("#nav").fadeOut();
   /// })  ///////