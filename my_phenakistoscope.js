const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("lilypad" , "png");
  pScope.load_image_sequence("final" , "png",10 )
  pScope.load_image("Flower1","png");
  pScope.load_image("flower2","png");
  pScope.load_image("flower3","png");
  pScope.load_image("ripples","png");
}

function setup_layers(pScope){

  new PLayer(null,9, 74, 131);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(ripples); // Ripple swirl layer
  layer1.mode(SWIRL(3));
  layer1.set_boundary(300,1000)

  var layer2 = new PLayer(lilypad); //Lily pad layer
  layer2.mode(RING);
  layer2.set_boundary(0,300);

  var fishsequence = new PLayer(fish2); // Swimming fish image sequence function
  fishsequence.mode(RING);
  fishsequence.set_boundary(0,1000);

  var layer3 = new PLayer(flower) // #1 Flower layer
  layer3.mode(RING);
  layer3.set_boundary(0,1000);

  var layer4 = new PLayer(flower2) // #2 Flower layer
  layer4.mode(RING);
  layer4.set_boundary(0,100);
  
  var layer5 = new PLayer(flower3) // #3 Flower layer
  layer5.mode(RING);
  layer5.set_boundary(0,100);


}
function ripples(x,y,animation,pScope){ //Ripples function
  scale(0.1)
  pScope.draw_image("ripples",1100,y)
  }
function lilypad (x,y,animation,pScope){ //lily pad function, two arcs
  fill(89, 181, 90) // light green
  stroke(89, 181, 90)
  push()
  scale(3)
  if(animation.frame == 0){
arc(0,0,200, 200, 45, PI + QUARTER_PI);//outer lily pad
fill(0, 79, 45)//Drak green for inner lily pad
arc(0,0,180, 180, 45, PI + QUARTER_PI);// inner lily pad
}

pop()
}
function fish2(x,y,animation,pScope){ //fish image sequence that codes an animation of fish swimming 
  scale(0.4)
  pScope.draw_image_from_sequence("final", x, 1500,animation.frame);
}

function flower(x,y,animation,pScope){ // Flower #1 function that makes the flower bounce
let flowersize = 100 + (animation.wave(1)* 20)
let bounce = 100* animation.wave()
    scale(0.5)
  pScope.draw_image("Flower1",1900+bounce ,flowersize);
}

function flower2(x,y,animation,pScope){ // Flower #2 function that makes the flower bounce
  let flowersize2 = 800 + (animation.wave(1)* 20)
  let bounce2 = 100* animation.wave()
      scale(0.5)
    pScope.draw_image("flower2",1800+bounce2 ,flowersize2);
  }

  function flower3(x,y,animation,pScope){ // Flower #3 function that makes the flower bounce
    let flowersize3 = 400 + (animation.wave(1)* 20)
    let bounce3 = 100* animation.wave()
        scale(0.5)
      pScope.draw_image("flower3",1800+bounce3 ,flowersize3);
    }