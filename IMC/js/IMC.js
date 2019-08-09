function calcular()
	{
		var pes=document.getElementsByName("peso")[0].value;
		var est=document.getElementsByName("altura")[0].value;
		var calculo1;

		/*  
			est = parseFloat(v);
			Sirve para establecer que es una variable REAL
		*/
		est=parseFloat(est);

		calculo1 = est*est;
		result = parseInt(pes)/(calculo1);

		/*  
			var final = result.toFixes(x); 
			sirve para redondear con un x de decimales
		*/
		var final = result.toFixed(2);

		if (pes==0 || est==0)
		{
			document.getElementById("result").innerHTML = " Ingrese algun valor no sea bobo ";
		}
		else
		{

			if (result<18)
			{
				document.getElementById("result").innerHTML = final+" Necesita comer mas carne!! ";
			}
			else
			{
				if (result>18 && result<24.9)
				{
					document.getElementById("result").innerHTML = final+" Esta bien de barriga prr ";
				}
				else
				{
					document.getElementById("result").innerHTML = final+" Ocupa demasiado Espacio ";	
				}
			}

		}
	}