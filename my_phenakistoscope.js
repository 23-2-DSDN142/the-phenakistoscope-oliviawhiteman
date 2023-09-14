const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("lilypad" , "png");
  pScope.load_image_sequence("final" , "png",10 )
  pScope.load_image("Flower1","png");
  pScope.load_image("flower2","png");
  pScope.load_image("flower3","png");
}

function setup_layers(pScope){

  new PLayer(null,9, 74, 131);  //lets us draw the whole circle background, ignoring the boundaries

  
  var layer1 = new PLayer(lilypad);
  layer1.mode(RING);
  layer1.set_boundary(0,300);

  var fishsequence = new PLayer(fish2);
  fishsequence.mode(RING);
  fishsequence.set_boundary(0,1000);

  var layer2 = new PLayer(flower)
  layer2.mode(RING);
  layer2.set_boundary(0,1000);

}

function lilypad (x,y,animation,pScope){
  fill(0, 79, 45)
  stroke(0, 79, 45)
  push()
  scale(3)
  if(animation.frame == 0){
arc(0,0,200, 200, 45, PI + QUARTER_PI);
}

pop()
}
function fish2(x,y,animation,pScope){
  scale(0.4)
  pScope.draw_image_from_sequence("final", x, 1500,animation.frame);
}

function flower(x,y,animation,pScope){
let flowersize = 100 + (animation.wave(1)* 20)
let bounce = 100* animation.wave()
    scale(0.5)
  pScope.draw_image("Flower1",1900+bounce ,flowersize);
}