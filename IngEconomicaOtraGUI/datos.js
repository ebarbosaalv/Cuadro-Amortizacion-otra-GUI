
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();








var elementos = new Array();
var ident_pest = 1;
var cont = 0;

function pestana(id){

	if (id == "1") {
		ident_pest = 1;
		
	}else if (id == "2") {
		ident_pest = 2;
		
	}

}








function Probar(){

	var capital = parseFloat(document.getElementById("capital").value);
	var iP = parseFloat(document.getElementById("tasa_Ip_cf").value) / 100;
	var iPg = parseFloat(document.getElementById("tasa_Ip_cf1").value) /100;

	var select_gracia = document.getElementById('gracia').value;
	var gracia_cuotas = new Array(parseInt(select_gracia)); 

	var select = document.getElementById('plazo').value;
	var cuotas = new Array(parseInt(select));

	var select1 = document.getElementById('plazo1').value;
	var cuotas1 = new Array(parseInt(select1));

	var n;
	var lista = document.getElementById("amortizacion");
	var lista_M = document.getElementById("amortizacion1");
	var amort_cf = lista.options[lista.selectedIndex].text;
	var amort_pg = lista_M.options[lista_M.selectedIndex].text;

	if (amort_cf == "Mensual") {
		n = select;	
	}else if (amort_cf == "Bimestral"){
		n = select/2;
	}

	// --------------------------------------- Si pestaña 1 esta activada
	if (ident_pest==1) {





//fecha



	
		var A = capital * ( (Math.pow((1+iP),n)*iP) / (Math.pow((1+iP),n)-1) );
		TablaCuotas();

		function TablaCuotas(){

			if (amort_cf == "Mensual") {

		  		for (var i = 0; i < cuotas.length; i++) {
		  		  
			  		cuota = i;
			  		amort_int = capital * iP;
			  		amort_cap = A - amort_int;
			  		saldo_cap = capital - amort_cap;
			  		capital = capital - amort_cap; 


			  		F_amort_int = amort_int.toFixed(2);
			  		F_amort_cap = amort_cap.toFixed(2);
			  		F_saldo_cap = saldo_cap.toFixed(2);
			  		F_capital = capital.toFixed(2);
			  		F_A = A.toFixed(2);;


			  		elementos.push(new Array(cuota, formatNumber.new(F_saldo_cap), formatNumber.new(F_amort_cap), formatNumber.new(F_amort_int), formatNumber.new(F_A), formatNumber.new(F_A)));

		  		  	var name_table=document.getElementById("tablaFija");

				    var row = name_table.insertRow();
				   var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);

var cell6 = row.insertCell(6);
				  cell0.innerHTML = cuota;
 cell1.innerHTML = dd+ " / "+mm+ " / "+yyyy;
				    cell2.innerHTML = formatNumber.new(F_saldo_cap);
				    cell3.innerHTML = formatNumber.new(F_amort_cap);
				    cell4.innerHTML = formatNumber.new(F_amort_int);
				    cell5.innerHTML = formatNumber.new(F_A);
				    cell6.innerHTML = formatNumber.new(F_A);
				}
		  	
			}else{

				for (var i = 0; i < cuotas.length/2; i++) {
		  		  
			  		cuota = i;
			  		amort_int = capital * iP;
			  		amort_cap = A - amort_int;
			  		saldo_cap = capital - amort_cap;
			  		capital = capital - amort_cap; 

			  		F_amort_int = amort_int.toFixed(2);
			  		F_amort_cap = amort_cap.toFixed(2);
			  		F_saldo_cap = saldo_cap.toFixed(2);
			  		F_capital = capital.toFixed(2);
			  		F_A = A.toFixed(2);;

			  		elementos.push(new Array(cuota, formatNumber.new(F_saldo_cap), formatNumber.new(F_amort_cap), formatNumber.new(F_amort_int), formatNumber.new(F_A), formatNumber.new(F_A)));

		  		  	var name_table=document.getElementById("tablaFija");

				    var row = name_table.insertRow();
				  var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);

var cell6 = row.insertCell(6);
				 cell0.innerHTML = cuota;
 cell1.innerHTML = dd+ " / "+mm+ " / "+yyyy;
				    cell2.innerHTML = formatNumber.new(F_saldo_cap);
				    cell3.innerHTML = formatNumber.new(F_amort_cap);
				    cell4.innerHTML = formatNumber.new(F_amort_int);
				    cell5.innerHTML = formatNumber.new(F_A);
				    cell6.innerHTML = formatNumber.new(F_A);

				}
			}
		}


		}else if (ident_pest==2) {

			if (amort_pg == "Mensual") {

				for (var i = 0; i < gracia_cuotas.length; i++) {
					
					cuota_gracia = capital * iPg;
					cuota = cont;
					cont++;

					F_cuota_gracia = cuota_gracia.toFixed(2);

					elementos.push(new Array(cuota, formatNumber.new(capital), "XXXXX", formatNumber.new(F_cuota_gracia), "XXXXX", formatNumber.new(F_cuota_gracia)));

					var name_table=document.getElementById("tablaFija");

					var row = name_table.insertRow();
					var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);

var cell6 = row.insertCell(6);
					
					 cell0.innerHTML = cuota;
 cell1.innerHTML = dd+ " / "+mm+ " / "+yyyy;
					cell2.innerHTML = formatNumber.new(capital);
					cell3.innerHTML = "XXXXX";
					cell4.innerHTML = formatNumber.new(F_cuota_gracia);
					cell5.innerHTML = "XXXXX";
					cell6.innerHTML = formatNumber.new(F_cuota_gracia);

				}

				var restantes = cuotas1.length - gracia_cuotas.length;
				var N_mort_cap = capital / restantes;

				for (var i = gracia_cuotas.length; i < cuotas1.length; i++) {

					cuota = i;
					amort_int = capital * iPg;
					caja = N_mort_cap + amort_int;
					capital = capital - N_mort_cap;

					F_capital = capital.toFixed(2); 
					F_caja = caja.toFixed(2);
					F_amort_int = amort_int.toFixed(2);
					F_N_mort_cap = N_mort_cap.toFixed(2);


					elementos.push(new Array(cuota, formatNumber.new(F_capital), formatNumber.new(F_N_mort_cap), formatNumber.new(F_amort_int), "XXXXX", formatNumber.new(F_caja)));

					var name_table=document.getElementById("tablaFija");

					var row = name_table.insertRow();
				   var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);

var cell6 = row.insertCell(6);
					    
	 cell0.innerHTML = cuota;
 cell1.innerHTML = dd+ " / "+mm+ " / "+yyyy;
				    cell2.innerHTML = formatNumber.new(F_capital);
				    cell3.innerHTML = formatNumber.new(F_N_mort_cap);
				    cell4.innerHTML = formatNumber.new(F_amort_int);
				    cell5.innerHTML = "XXXXX";
				    cell6.innerHTML = formatNumber.new(F_caja);
				}
			
			}else if (amort_pg == "Trimestral") {
			
				for (var i = 0; i < gracia_cuotas.length/3; i++) {
					
					cuota_gracia = capital * iPg;
					cuota = cont;
					cont++;

					F_cuota_gracia = cuota_gracia.toFixed(2);

					elementos.push(new Array(cuota, formatNumber.new(capital), "XXXXX", formatNumber.new(F_cuota_gracia), "XXXXX", formatNumber.new(F_cuota_gracia)));

					var name_table=document.getElementById("tablaFija");

					var row = name_table.insertRow();
					var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);

var cell6 = row.insertCell(6);
					
			 cell0.innerHTML = cuota;
 cell1.innerHTML = dd+ " / "+mm+ " / "+yyyy;
					cell2.innerHTML = formatNumber.new(capital);
					cell3.innerHTML = "--------";
					cell4.innerHTML = formatNumber.new(F_cuota_gracia);
					cell5.innerHTML = "--------";
					cell6.innerHTML = formatNumber.new(F_cuota_gracia);

				}

				var restantes = (cuotas1.length - gracia_cuotas.length) / 3;
				//console.log(restantes);
				var N_mort_cap = capital / restantes;


				for (var i = gracia_cuotas.length/3; i < cuotas1.length/3; i++) {

					cuota = i;
					amort_int = capital * iPg;
					caja = N_mort_cap + amort_int;
					capital = capital - N_mort_cap;

					F_capital = capital.toFixed(2); 
					F_caja = caja.toFixed(2);
					F_amort_int = amort_int.toFixed(2);
					F_N_mort_cap = N_mort_cap.toFixed(2);


					elementos.push(new Array(cuota, formatNumber.new(F_capital), formatNumber.new(F_N_mort_cap), formatNumber.new(F_amort_int), "XXXXX", formatNumber.new(F_caja)));

					var name_table=document.getElementById("tablaFija");

				    var row = name_table.insertRow();
				   var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);

var cell6 = row.insertCell(6);
				    cell0.innerHTML = cuota;
 cell1.innerHTML = dd+ " / "+mm+ " / "+yyyy;
				    cell2.innerHTML = formatNumber.new(F_capital);
				    cell3.innerHTML = formatNumber.new(F_N_mort_cap);
				    cell4.innerHTML = formatNumber.new(F_amort_int);
				    cell5.innerHTML = "XXXXX";
				    cell6.innerHTML = formatNumber.new(F_caja);
				}		
			}
		}
	}

function PDF(){

	var nombre = document.getElementById("nombre").value;
	var identificacion = document.getElementById("identificacion").value;
	var capital = document.getElementById("capital").value;

		var pdf = new jsPDF();
  		
  		pdf.text(80,45, `Tabla de cuotas fijas`);
  		pdf.text(20,20,`A nombre de: `+nombre+ `\nNº de identificación: `+identificacion+`\nPrestamo: `+capital);

  		var columns = ["Cuota", "Saldo\na capital", "Amortización\na capital", "Amortización\na intereses", "Cuota fija", "Flujo caja"];
  		var data = elementos;

  	pdf.autoTable(columns,data,{ margin:{ top: 50  }});

  	pdf.save('tablaCuotas.pdf');
  
}


var formatNumber = {
	 separador: ".", 
	 sepDecimal: ',', 
	 formatear:function (num){
		 num +='';
		 var splitStr = num.split('.');
		 var splitLeft = splitStr[0];
		 var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
		 var regx = /(\d+)(\d{3})/;

		 while (regx.test(splitLeft)) {
		 	splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
		}
	 	return this.simbol + splitLeft +splitRight;
	},
		new:function(num, simbol){
		this.simbol = simbol ||'';
		return this.formatear(num);
 	}
}




 
