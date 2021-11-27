const request = new XMLHttpRequest();

request.onreadystatechange = function(){  
    if(this.readyState==4 && this.status==200) {  
        
        var caracteristicas =   request.response;
        dibujarJson(caracteristicas);
    }  
}

request.responseType="json";
request.open("GET", "proyecto-final.json", true);
request.send();



const request2 = new XMLHttpRequest();
request2.onreadystatechange = function(){  
    if(this.readyState==4 && this.status==200) {
          
        var caracteristicas =   request2.responseText;
        
        dibujarTextoPlano(caracteristicas);     
    }  
}

request2.responseType="text";
request2.open("GET", "proyecto-final.json", true);
request2.send();





 
function dibujarJson(caracteristicas){
    
    contenedor =  document.getElementById("contenedor_caracteristicas");
    
    filas = "";
    for(i=0; i<caracteristicas.length;i++){
        
        filas +=`
        <tr style="boder:3px solid white; border-radius:20px; height:400px;">
            <td >
                
                <img src=`+caracteristicas[i].imageUrl+`>
            </td>
            <td >
                <p>Nombre: `+caracteristicas[i].fullName+`</p>
                 <p>Titulo: `+caracteristicas[i].title+`</p>
                 <p>Familia: `+caracteristicas[i].family+`</p>
            </td>
                
        </tr>
        `;        
    }
    
    contenedor.innerHTML=filas;
}
