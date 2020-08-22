var clic = 1;

function mostrar(){ 

   if(clic==1){

   //document.getElementById("mostrarTabla").style.height = "100px";
   //document.getElementById("caja").show();
   document.getElementById('mostrarTabla').style.display = "block";
   Probar();

   clic = clic + 1;

   } else{

       //document.getElementById("mostrarTabla").style.height = "0px"; 
       //document.getElementById("caja").hide(); 
       document.getElementById('mostrarTabla').style.display = "none";    

    clic = 1;

   }   

}