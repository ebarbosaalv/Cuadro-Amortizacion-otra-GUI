/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function table(){
  document.head.innerHTML='<style>'+
'table, td {'+
    'border: 1px solid black;'+
'}'+
'</style>';

//document.getElementById("resultado2").innerHTML
        return '<table id="myTable">'+
     '<tr>'+
    '<td><strong>Periodo</strong></td>'+
    '<td><strong>Fecha</strong></td>'+
    '<td><strong>Saldo</strong></td>'+
    '<td><strong>Amortización</strong></td>'+
    '<td><strong>Interes</strong></td>'+
    '<td><strong>Cuota Fija</strong></td>'+
    '<td><strong>Seguro de vida</strong></td>'+
    '<td><strong>Flujo</strong></td>'+
  '</tr>'+'</table>';

}





function inserttable() {

var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
    
    
    
}
