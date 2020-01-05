function Cero(i){
	if( i < 10){
	i= "0" + i;
	}
	return i;
				
}
function hora(){	
	var hoy = new Date();
	var h = Cero(hoy.getHours());
	var m = Cero(hoy.getMinutes());
	var s = Cero(hoy.getSeconds());
	document.getElementById('contenedor_hora').innerHTML = h+":"+m+":"+s;
	setInterval ( hora , 1000);
}
function fecha(){
	var mes = new Date();
	document.getElementById('fechames').innerHTML = mes;
	setInterval ( fecha, 1000);
}

var horaC = new Date();
var w=horaC.getHours();
var f=horaC.getMinutes();
var restah= (14-w);
var restam= (20-f);
function diferencia(){
	document.getElementById('diferenciahora').innerHTML= restah+":"+restam;
		}
		
		
	