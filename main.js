var canvas = new fabric.Canvas('myCanvas'); 

player_x = 10; 
player_y = 10;

block_image_width = 30; 
block_image_height = 30; 

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y, left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

// Primero añadir un detector de ventos, segundo llamar el evento cuando se presiona una tecla, 
// tecero llamar la función mi_TeclaPulsada
window.addEventListener("keydown", my_keydown);

// Define la función mi_TeclaPulsada(e)
function my_keydown(e)
{
//Obtener el valor de la tecla precionada
	keyPressed = e.keyCode;
//Imprime el valor de la tecla presionada en la pantalla de la consola.
	console.log(keyPressed);

// Si SHIFT presionada es verdadero y P presionada es '80' ...
if(e.shiftKey == true && keyPressed == "80")
{
	console.log("Presiona p y Shift juntos");
//... Aumentar 10
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}

// Verifica si las teclas SHIFT y M son presionadas juntas disminuir 10
if(e.shiftKey && keyPressed == '77')
{console.log("Presiona m y Shift juntos");

	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
	

}

// Si la tecla presionada es 38 llamar la función arriba e imprimirla. 
if(keyPressed == '38')
	{
		up();
		console.log("up");
	}

// Si la tecla presionada es 40 llamar la función abajo e imprimirla. 
	
if(keyPressed == '40')
	{
		down();
		console.log("down");
	}	

	

// Si la tecla presionada es 37 llamar la función izquierda e imprimirla. 
if(keyPressed == '37')
{
	left();
	console.log("left");
}

// Si la tecla presionada es 39 llamar la función derecha e imprimirla. 
if(keyPressed == '39')
{
	right();
	console.log("right");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'W' 87
if(keyPressed == '87')
{
	new_image('wall.jpg'); 
	console.log("w");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'G' 71
if(keyPressed == '71')
{
	new_image('grond.png'); 
	console.log("g");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'L' 76
if(keyPressed == '76')
{
	new_image('light_green.png'); 
	console.log("l");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'T' 84
if(keyPressed == '84')
{
	new_image('trunk.jpg'); 
	console.log("t");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'R' 82
if(keyPressed == '82')
{
	new_image('roof.jpg'); 
	console.log("r");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'Y' 89
if(keyPressed == '89')
{
	new_image('yellow_wall.png'); 
	console.log("y");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'D' 68
if(keyPressed == '68')
{
	new_image('dark_green.png'); 
	console.log("d");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'U' 85
if(keyPressed == '85')
{
	new_image('unique.png'); 
	console.log("uw");
}

// Verifica si el valor de la tecla es igual al valor de la tecla 'C' 67
if(keyPressed == '67')
{
	new_image('cloud.jpg'); 
	console.log("c");
}
}