const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("lilypad" , "png");
  pScope.load_image_sequence("fish" , "png",16 )
}

function setup_layers(pScope){

  new PLayer(null,104, 204, 232);  //lets us draw the whole circle background, ignoring the boundaries

  
  var layer1 = new PLayer(lilypad);
  layer1.mode(RING);
  layer1.set_boundary(0,300);

  var fishsequence = new PLayer(fish);
  fishsequence.mode(RING);
  fishsequence.set_boundary(0,1000);

}

function lilypad (x,y,animation,pScope){
  push()
  if(animation.frame == 0){
  pScope.draw_image("lilypad",x,y);
 
  }
   pop()
}
function fish(x,y,animation,pScope){
  scale(0.5)
  pScope.draw_image_from_sequence("fish", x, 1000,animation.frame);
}

