var tasa_ea_cf = 0;
var tasa_na_cf = 0;
var tasa_ip_cf = 0;
var tasa_ea_cf1 = 0;
var tasa_na_cf1 = 0;
var tasa_ip_cf1 = 0;


//-------------------------------------------------------------------------------------------------------------
//calcular tasa en crédito de cuota fija

function calcular_tasa(id) {
  //Obtener el valor de la Amortizacion
  var lista = document.getElementById("amortizacion");
  var amort_cf = lista.options[lista.selectedIndex].text;
  //Si el usuario ingresa el valor Efectivo anual
  if (id == "EA") {
    //Si es mensual
    if (amort_cf == "Mensual") {
      tasa_ip_cf = (Math.pow((1 + (parseFloat(document.getElementById("tasa_EA_cf").value) / 100)), (30 / 360)) - 1) * 100;
      tasa_na_cf = tasa_ip_cf * 12;
      tasa_ea_cf = (Math.pow((1 + (tasa_ip_cf / 100)), (360 / 30)) - 1) * 100;
      document.getElementById("tasa_Ip_cf").value = tasa_ip_cf.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf").value = tasa_na_cf.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf").value = tasa_ea_cf.toFixed(2) + " %";
    } else {
    	//alert("oli");
      //Si es bimestral
      tasa_ip_cf = (Math.pow((1 + (parseFloat(document.getElementById("tasa_EA_cf").value) / 100)), (60 / 360)) - 1) * 100;
      tasa_na_cf = tasa_ip_cf * 6;
      tasa_ea_cf = (Math.pow((1 + (tasa_ip_cf / 100)), (360 / 60)) - 1) * 100;
      document.getElementById("tasa_Ip_cf").value = tasa_ip_cf.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf").value = tasa_na_cf.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf").value = tasa_ea_cf.toFixed(2) + " %";
    }
  }

  if (id == "NA") {
    //Si es mensual
    if (amort_cf == "Mensual") {
      tasa_ip_cf = (parseFloat(document.getElementById("tasa_NA_cf").value) / 12);
      tasa_ea_cf = (Math.pow((1 + (tasa_ip_cf / 100)), (360 / 30)) - 1) * 100;
      tasa_na_cf = tasa_ip_cf * 12;
      document.getElementById("tasa_Ip_cf").value = tasa_ip_cf.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf").value = tasa_na_cf.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf").value = tasa_ea_cf.toFixed(2) + " %";
    } else {
      //Si es bimestral
      tasa_ip_cf = (parseFloat(document.getElementById("tasa_NA_cf").value) / 6);
      tasa_ea_cf = (Math.pow((1 + (tasa_ip_cf / 100)), (360 / 60)) - 1) * 100;
      tasa_na_cf = tasa_ip_cf * 6;
      document.getElementById("tasa_Ip_cf").value = tasa_ip_cf.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf").value = tasa_na_cf.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf").value = tasa_ea_cf.toFixed(2) + " %";
    }
  }

  if (id == "Ip") {
    //Si es mensual
    if (amort_cf == "Mensual") {
      tasa_ea_cf = (Math.pow((1 + (parseFloat(document.getElementById("tasa_Ip_cf").value) / 100)), (360 / 30)) - 1) * 100;
      tasa_ip_cf = (Math.pow((1 + (tasa_ea_cf / 100)), (30 / 360)) - 1) * 100;
      tasa_na_cf = tasa_ip_cf * 12;
      document.getElementById("tasa_Ip_cf").value = tasa_ip_cf.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf").value = tasa_na_cf.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf").value = tasa_ea_cf.toFixed(2) + " %";
    } else {
      //Si es bimestral
      tasa_ea_cf = (Math.pow((1 + (parseFloat(document.getElementById("tasa_Ip_cf").value) / 100)), (360 / 60)) - 1) * 100;
      tasa_ip_cf = (Math.pow((1 + (tasa_ea_cf / 100)), (60 / 360)) - 1) * 100;
      tasa_na_cf = tasa_ip_cf * 6;
      document.getElementById("tasa_Ip_cf").value = tasa_ip_cf.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf").value = tasa_na_cf.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf").value = tasa_ea_cf.toFixed(2) + " %";
    }
  }
}

//-------------------------------------------------------------------------------------------
//----Calcular tasa periodo de gracia

function calcularTasaMuerta(id) {
  //Obtener el valor de la Amortizacion
  var lista1 = document.getElementById("amortizacion1");
  var amort_cf1 = lista1.options[lista1.selectedIndex].text;
  //Si el usuario ingresa el valor Efectivo anual
  if (id == "EA1") {
  	
    //Si es mensual
    if (amort_cf1 == "Mensual") {
		
      tasa_ip_cf1 = (Math.pow((1 + (parseFloat(document.getElementById("tasa_EA_cf1").value) / 100)), (30 / 360)) - 1) * 100;
      tasa_na_cf1 = tasa_ip_cf1 * 12;
      tasa_ea_cf1 = (Math.pow((1 + (tasa_ip_cf1 / 100)), (360 / 30)) - 1) * 100;
      document.getElementById("tasa_Ip_cf1").value = tasa_ip_cf1.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf1").value = tasa_na_cf1.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf1").value = tasa_ea_cf1.toFixed(2) + " %";
      //alert(document.getElementById("tasa_EA_cf1").value);
      

    } else {
      //Si es trimestral
      tasa_ip_cf1 = (Math.pow((1 + (parseFloat(document.getElementById("tasa_EA_cf1").value) / 100)), (90 / 360)) - 1) * 100;
      tasa_na_cf1 = tasa_ip_cf1 * 4;
      tasa_ea_cf1 = (Math.pow((1 + (tasa_ip_cf1 / 100)), (360 / 90)) - 1) * 100;
      document.getElementById("tasa_Ip_cf1").value = tasa_ip_cf1.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf1").value = tasa_na_cf1.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf1").value = tasa_ea_cf1.toFixed(2) + " %";
    }
  }

  if (id == "NA1") {
    //Si es mensual
    if (amort_cf1 == "Mensual") {
      tasa_ip_cf1 = (parseFloat(document.getElementById("tasa_NA_cf1").value) / 12);
      tasa_ea_cf1 = (Math.pow((1 + (tasa_ip_cf1 / 100)), (360 / 30)) - 1) * 100;
      tasa_na_cf1 = tasa_ip_cf1 * 12;
      document.getElementById("tasa_Ip_cf1").value = tasa_ip_cf1.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf1").value = tasa_na_cf1.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf1").value = tasa_ea_cf1.toFixed(2) + " %";
    } else {
      //Si es trimestral
      tasa_ip_cf1 = (parseFloat(document.getElementById("tasa_NA_cf1").value) / 4);
      tasa_ea_cf1 = (Math.pow((1 + (tasa_ip_cf1 / 100)), (360 / 90)) - 1) * 100;
      tasa_na_cf1 = tasa_ip_cf1 * 4;
      document.getElementById("tasa_Ip_cf1").value = tasa_ip_cf1.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf1").value = tasa_na_cf1.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf1").value = tasa_ea_cf1.toFixed(2) + " %";
    }
  }

  if (id == "Ip1") {
    //Si es mensual
    if (amort_cf1 == "Mensual") {
      tasa_ea_cf1 = (Math.pow((1 + (parseFloat(document.getElementById("tasa_Ip_cf1").value) / 100)), (360 / 30)) - 1) * 100;
      tasa_ip_cf1 = (Math.pow((1 + (tasa_ea_cf1 / 100)), (30 / 360)) - 1) * 100;
      tasa_na_cf1 = tasa_ip_cf1 * 12;
      document.getElementById("tasa_Ip_cf1").value = tasa_ip_cf1.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf1").value = tasa_na_cf1.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf1").value = tasa_ea_cf1.toFixed(2) + " %";
    } else {
      //Si es trimestral
      tasa_ea_cf1 = (Math.pow((1 + (parseFloat(document.getElementById("tasa_Ip_cf1").value) / 100)), (360 / 90)) - 1) * 100;
      tasa_ip_cf1 = (Math.pow((1 + (tasa_ea_cf1 / 100)), (90 / 360)) - 1) * 100;
      tasa_na_cf1 = tasa_ip_cf1 * 4;
      document.getElementById("tasa_Ip_cf1").value = tasa_ip_cf1.toFixed(2) + " %";
      document.getElementById("tasa_NA_cf1").value = tasa_na_cf1.toFixed(2) + " %";
      document.getElementById("tasa_EA_cf1").value = tasa_ea_cf1.toFixed(2) + " %";
    }
  }
}