/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function select2(){
    var p='<select id="plazo">';
   
        p+="<option>36</option>";
         p+="<option>48</option>";
          p+="<option>60</option>";
             p+="<option>72</option>";
             p+="<option>84</option>";

    p+="</select>";
    document.getElementById("plazodiv").innerHTML=p;
}

function select3(){
      var p='<select id="plazo">';
      
        p+="<option>60</option>";
         p+="<option>72</option>";
          p+="<option>84</option>";
             p+="<option>96</option>";
             p+="<option>108</option>";
                     p+="<option>120</option>";
                  
    p+="</select>";
    document.getElementById("plazodiv").innerHTML=p;



}