function setup() {
createCanvas(400, 400);
}

function draw() {
//cielo
  background("darkblue");

//luna
  fill("yellow");
  stroke("white");
  strokeWeight (5);
  circle(350,10,100);

//prato
  fill("darkgreen")
  stroke("green")
  rect(0,100,400,800);

//stelle con variabili for
  stroke("yellow");
  let x_stella= 10;
  let y_stella= 5; 
  point(x_stella,y_stella);
  //for(init;text;update;) {corpo}
  for(let i=0; i<10; i = i+1) {
    point(x_stella*i,y_stella+i)
  
  if(i%2==0)
    {
      //numeri pari
      //corpo di ramo vero
      stroke("yellow");
    }
    else
    {
      //numeri dispari
      //altrimenti questo
      stroke("orange");
    }
  }

//casetta
fill("black")
strokeWeight (0)
rect(50,150,100,100)
triangle(50,150,100,100,150,150)

  //porta
  stroke("yellow")
  strokeWeight (1)
  rect(85,200,20,50)

  //finestra bassa
  fill("yellow")
  strokeWeight (0)
  rect(125,200,10,25)

  //finestra alta
  fill("yellow")
  strokeWeight (0)
  rect(70,165,10,25)

//testo
  fill("white");
  strokeWeight(0);
  text("C'era una volta...",200,150);

//mostra la posizione del mouse

}
