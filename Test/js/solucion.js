function mostrar()
{

	//variables acumuladoras para contar la cantidad de respuestas (a,b,c,d)
    var res1=0;
    var res2=0;
    var res3=0;
    var res4=0;
  
    //captura las respuestas y las guarda en un vector para cada pregunta
    var pre1=document.getElementsByName('p1');
    var pre2=document.getElementsByName('p2');
    var pre3=document.getElementsByName('p3');
    var pre4=document.getElementsByName('p4');
    var pre5=document.getElementsByName('p5');
    
    //recorre el vector de respuestas
    for(var i=0;i<pre1.length;i++)
    {
      if(pre1[i].checked){
        //res1=pre1[i].value;
        if(pre1[i].value=='a'){
          res1++;
        }else if (pre1[i].value=='b') {
          res2++;
        }else if (pre1[i].value=='c') {
          res3++;
        }else if (pre1[i].value=='d') {
          res4++;//i
        }
      }
    }
    
    //recorre el vector de respuestas
    for(var i=0;i<pre2.length;i++)
    { //identifica cual fue la que el usuario seleccionó y la guarda en la variable resultado
      if(pre2[i].checked){
        //res1=pre1[i].value;
        if(pre2[i].value=='a'){
          res1++;
        }else if (pre2[i].value=='b') {
          res2++;
        }else if (pre2[i].value=='c') {
          res3++;
        }else if (pre2[i].value=='d') {
          res4++;
        }
      }
    }
    //recorre el vector de respuestas
    for(var i=0;i<pre3.length;i++)
    { //identifica cual fue la que el usuario seleccionó y la guarda en la variable resultado
      if(pre3[i].checked){
        //res1=pre1[i].value;
        if(pre3[i].value=='a'){
          res1++;
        }else if (pre3[i].value=='b') {
          res2++;
        }else if (pre3[i].value=='c') {
          res3++;
        }else if (pre3[i].value=='d') {
          res4++;
        }
      }
    }
    //recorre el vector de respuestas
    for(var i=0;i<pre4.length;i++)
    { //identifica cual fue la que el usuario seleccionó y la guarda en la variable resultado
      if(pre4[i].checked){
        //res1=pre1[i].value;
        if(pre4[i].value=='a'){
          res1++;
        }else if (pre4[i].value=='b') {
          res2++;
        }else if (pre4[i].value=='c') {
          res3++;
        }else if (pre4[i].value=='d') {
          res4++;
        }
      }
    }
    //recorre el vector de respuestas
    for(var i=0;i<pre5.length;i++)
    { //identifica cual fue la que el usuario seleccionó y la guarda en la variable resultado
      if(pre5[i].checked){
        //res1=pre1[i].value;
        if(pre5[i].value=='a'){
          res1++;
        }else if (pre5[i].value=='b') {
          res2++;
        }else if (pre5[i].value=='c') {
          res3++;
        }else if (pre5[i].value=='d') {
          res4++;
        }
      }
    }

    /* res1 = a */
    /* res2 = b */
    /* res3 = c */
    /* res4 = d */

    

    /* fin copia */

    //imprime la variable resultado que contiene la respuesta que el usurio habia seleccionado
    
    var total = (res1+res2+res3+res4);

    /* CONDICION DE CAMPOS VACIOS */
    

    if (total<5)
     {
     	alert("Todos los campos son requeridos");
     }
     else
     {

     	if (res1>=3)
       {
          document.getElementById('res').innerHTML = "<img src=\"img/a.jpg\">"
       }
       else
        {

            if (res2>=3)
             {
                document.getElementById('res').innerHTML = "<img src=\"img/b.png\">"
             }
             else
             {

                  if (res3>=3)
                   {
                      document.getElementById('res').innerHTML = "<img src=\"img/c.jpg\">"
                   }
                   else
                   {

                      if (res4>=3)
                       {
                          document.getElementById('res').innerHTML = "<img src=\"img/d.jpeg\">"
                       }
                       else
                       {

                          document.getElementById('res').innerHTML = "<img src=\"img/normal.jpg\">"

                       }

                   }

             }

        }

     }

     document.getElementById('cant').innerHTML = "\
      Cantidad de Respuestas Afirmativas = "+res1+"\
      <br> Cantidad de Respuestas Casi Afirmativas = "+res2+"\
      <br> Cantidad de Respuestas Comunes = "+res3+"\
      <br> Cantidad de Respuestas Malas = "+res4;
    
}

/* FUNCION LIMPIAR */


function refrescar()
{

location.reload(true);

}