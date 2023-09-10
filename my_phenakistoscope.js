const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("streak" , "png");
}

function setup_layers(pScope){

  new PLayer(null,11, 11, 38);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stars);
  layer1.mode(SWIRL(1));
  layer1.set_boundary( 0, 800 );
  
  var layer2 = new PLayer(edge);
  layer2.mode(RING);
  layer2.set_boundary( 800, 1000 );

}

function stars(x, y, animation, pScope){
  scale(0.2);
  pScope.draw_image("streak",x,y);
  
  

}

function edge(x, y, animation, pScope){
push()
  rotate(90 * animation.frame)
  let rectJump = 750 + (animation.wave(1) * 50)
  rect(150, rectJump, 100,100)
pop()
} 