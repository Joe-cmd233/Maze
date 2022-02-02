var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fa179cbb-0ead-4a79-8168-9751d2939f60","1898a515-f753-4eea-857e-a2879bb45e12","9b2cc8dd-06ad-4c63-8c4d-aab0bcfb9828","e24f690f-0871-4008-92e4-fb209f7307ca","2076258a-fd5b-4cd9-8b91-f0efdc6700d8","f8f9e5c5-e827-4d65-b62e-1d7647b06bfc","1c93a7e8-9155-447e-ab4a-8ac194b54439","49d47f0e-932a-45f8-ab5b-e6b8a347411a","2f8a83c7-cb96-49de-bfab-45c14447d288","3e37a161-3208-433e-86ec-7416cf0d8bd1","34bfff20-a783-48c7-9a27-b313e13ad361","176dcf8f-e525-4d80-b429-d6f071c21d17"],"propsByKey":{"fa179cbb-0ead-4a79-8168-9751d2939f60":{"name":"congrat","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"2gt6zgDoQ3.RgtSILXw6JO7Rmrp04xq8","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/fa179cbb-0ead-4a79-8168-9751d2939f60.png"},"1898a515-f753-4eea-857e-a2879bb45e12":{"name":"moeda","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"L0f_wRNaxwAMx4El4ab22.FsHg2oBSIw","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/1898a515-f753-4eea-857e-a2879bb45e12.png"},"9b2cc8dd-06ad-4c63-8c4d-aab0bcfb9828":{"name":"copa","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":1,"looping":true,"frameDelay":12,"version":"2s8au0YCpoWwITqmS.AugETHXcd0LBpD","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":32},"rootRelativePath":"assets/9b2cc8dd-06ad-4c63-8c4d-aab0bcfb9828.png"},"e24f690f-0871-4008-92e4-fb209f7307ca":{"name":"color test","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"FTMZ5M_NSrsIZz77IpfJwKJIUrhOz1YM","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/e24f690f-0871-4008-92e4-fb209f7307ca.png"},"2076258a-fd5b-4cd9-8b91-f0efdc6700d8":{"name":"door","sourceUrl":null,"frameSize":{"x":50,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"fXyvNFPFHc1uj_fbSod7UOmbGO9ZbC0r","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":30},"rootRelativePath":"assets/2076258a-fd5b-4cd9-8b91-f0efdc6700d8.png"},"f8f9e5c5-e827-4d65-b62e-1d7647b06bfc":{"name":"door.o","sourceUrl":null,"frameSize":{"x":30,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"kKxh65hgdjxacujm71bAqq3lTJXzdVJv","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":50},"rootRelativePath":"assets/f8f9e5c5-e827-4d65-b62e-1d7647b06bfc.png"},"1c93a7e8-9155-447e-ab4a-8ac194b54439":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":22,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"INVGUbZBQazxeN7m2v2RXxE5VClc2yrb","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":10},"rootRelativePath":"assets/1c93a7e8-9155-447e-ab4a-8ac194b54439.png"},"49d47f0e-932a-45f8-ab5b-e6b8a347411a":{"name":"key","sourceUrl":null,"frameSize":{"x":15,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"OBgC5UvjmrED9J3P9v3KCfIVEYIrY_Tr","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":18},"rootRelativePath":"assets/49d47f0e-932a-45f8-ab5b-e6b8a347411a.png"},"2f8a83c7-cb96-49de-bfab-45c14447d288":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":18,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"XB5z3fMfH9sYXxXyRT9JCY7hOWEpCxU3","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":15},"rootRelativePath":"assets/2f8a83c7-cb96-49de-bfab-45c14447d288.png"},"3e37a161-3208-433e-86ec-7416cf0d8bd1":{"name":"invencible","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":7,"looping":true,"frameDelay":1,"version":"0sYJOH7VpnG2V41htPV43Ixs10qvbNCc","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/3e37a161-3208-433e-86ec-7416cf0d8bd1.png"},"34bfff20-a783-48c7-9a27-b313e13ad361":{"name":"cograts","sourceUrl":null,"frameSize":{"x":110,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"YktrxLHeojREk4aI5KtRWudWYKos5K0W","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":23},"rootRelativePath":"assets/34bfff20-a783-48c7-9a27-b313e13ad361.png"},"176dcf8f-e525-4d80-b429-d6f071c21d17":{"name":"retry","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jz61cXhi5b7.eCgfXUhnStTFbmADb.HE","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/176dcf8f-e525-4d80-b429-d6f071c21d17.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var papelao1 = createSprite(10,70,100,20);
  papelao1.shapeColor = "brown";
  var papelao2 = createSprite(100,50,20,100);
  papelao2.shapeColor = "brown";
  var papelao3 = createSprite(80,130,100,20);
  papelao3.shapeColor = "brown";
  var papelao4 = createSprite(50,250,20,100);
  papelao4.shapeColor = "brown";
  var papelao5 = createSprite(130,210,100,20);
  papelao5.shapeColor = "brown";
  var papelao6 = createSprite(10,250,100,20);
  papelao6.shapeColor = "brown";
  var papelao7 = createSprite(160,120,20,100);
  papelao7.shapeColor = "brown";
  var papelao8 = createSprite(150,20,100,20);
  papelao8.shapeColor = "brown";
  var papelao9 = createSprite(250,70,20,100);
  papelao9.shapeColor = "brown";
  var papelao10 = createSprite(270,150,100,20);
  papelao10.shapeColor = "brown";
  var papelao11 = createSprite(330,50,100,20);
  papelao11.shapeColor = "brown";
  var papelao12 = createSprite(340,125,20,100);
  papelao12.shapeColor = "brown";
  var papelao13 = createSprite(220,250,20,100);
  papelao13.shapeColor = "brown";
  var papelao14 = createSprite(330,210,150,20);
  papelao14.shapeColor = "brown";
  var papelao15 = createSprite(100,300,20,100);
  papelao15.shapeColor = "brown";
  var papelao16 = createSprite(180,310,100,20);
  papelao16.shapeColor = "brown";
  var papelao17 = createSprite(30,352,20,100);
  papelao17.shapeColor = "brown";
  var papelao18 = createSprite(175,352,20,100);
  papelao18.shapeColor = "brown";
  var papelao19 = createSprite(280,290,20,100);
  papelao19.shapeColor = "brown";
  var papelao20 = createSprite(350,270,120,20);
  papelao20.shapeColor = "brown";
  var papelao21 = createSprite(250,390,100,20);
  papelao21.shapeColor = "brown";
  var papelao22 = createSprite(330,370,20,100);
  papelao22.shapeColor = "brown";
  var alvo = createSprite(370,355,10,50);
  alvo.setAnimation("copa");
  var state = "porta fechada";
   var sofia = createSprite(20,20,10,10);
  sofia.setAnimation("congrat");
  sofia.scale = 2;
  var porta = createSprite(291,334);
  sofia.bounce(porta);
  porta.setAnimation("door");
  var contagemMoedas = "0";
  var moeda = createSprite(73,370,5,5);
  moeda.setAnimation("key");
  var sofia1 = createSprite(20,20,10,10);
  sofia1.setAnimation("congrat");
  sofia1.scale = 2;
  var sofia2 = createSprite(20,20,10,10);
  sofia2.setAnimation("congrat");
  sofia2.scale = 2;
  var sofia3 = createSprite(20,20,10,10);
  sofia3.setAnimation("congrat");
  var sofia11 = createSprite(20,20,10,10);
  sofia1.setAnimation("congrat");
  sofia1.scale = 2;
  var sofia12 = createSprite(20,20,10,10);
  sofia2.setAnimation("congrat");
  sofia2.scale = 2;
  var sofia13 = createSprite(20,20,10,10);
  sofia3.setAnimation("congrat");
  sofia1.x = 500;
  sofia2.x = 500;
  sofia3.x = 500;
  sofia11.x = 500;
  sofia12.x = 500;
  sofia13.x = 500;
  var txt = createSprite(500,200,5,5);
  txt.setAnimation("cograts");
  var re = createSprite(500,220,5,5);
  re.setAnimation("retry");
  re.scale = 2;
  playSound("assets/OST2.2.mp3",true);
  var a = 0;
  
  
  porta.shapeColor = rgb(91,50,0);

function draw() {
  background(rgb(115,0,48));
  createEdgeSprites();
  sofia.bounceOff(edges);
  
  sofia.velocityX = 0;
  sofia.velocityY = 0;
  text(contagemMoedas,206,343);
  
  if(moeda.isTouching(porta) && contagemMoedas === 1) {
    state = "portaaberta";
  }

  if ( sofia.isTouching(alvo)) {  
    state = "vitoria";
  }
  if (state === "portaaberta") {
    porta.setAnimation("door.o");
    moeda.x = 500;
    
  }
  if(state === "vitoria") {
    stopSound("assets/OST2.2.mp3");
    stopSound("assets/OST2.mp3");
    alvo.x = sofia.x;
    alvo.y = sofia.y;
    alvo.scale = 0.1;
    sofia.scale = randomNumber(1,10);
    sofia1.scale = randomNumber(1,10);
    sofia2.scale = randomNumber(1,10);
    sofia3.scale = randomNumber(1,10);
    sofia11.scale = randomNumber(1,10);
    sofia12.scale = randomNumber(1,10);
    sofia13.scale = randomNumber(1,10);
  text("You Win!",400,400);
  papelao1.x = 500;
  papelao2.x = 500;
  papelao3.x = 500;
  papelao4.x = 500;
  papelao5.x = 500;
  papelao6.x = 500;
  papelao7.x = 500;
  papelao8.x = 500;
  papelao9.x = 500;
  papelao10.x = 500;
  papelao11.x = 500;
  papelao12.x = 500;
  papelao13.x = 500;
  papelao14.x = 500;
  papelao15.x = 500;
  papelao16.x = 500;
  papelao17.x = 500;
  papelao18.x = 500;
  papelao19.x = 500;
  papelao20.x = 500;
  papelao21.x = 500;
  papelao22.x = 500;
  moeda.x = 500;
  porta.x = 500;
  background(rgb(randomNumber(1,255), randomNumber(1,255), randomNumber(1,255)));
  sofia.x = randomNumber(20,355);
  sofia.y = randomNumber(20,355);
  sofia1.x = randomNumber(20,355);
  sofia1.y = randomNumber(20,355);
  sofia2.x = randomNumber(20,355);
  sofia2.y = randomNumber(20,355);
  sofia3.x = randomNumber(20,355);
  sofia3.y = randomNumber(20,355);
  sofia11.x = randomNumber(20,355);
  sofia11.y = randomNumber(20,355);
  sofia12.x = randomNumber(20,355);
  sofia12.y = randomNumber(20,355);
  sofia13.x = randomNumber(20,355);
  sofia13.y = randomNumber(20,355);
  alvo.x = sofia.x;
  alvo.y = sofia.y;
  sofia.setAnimation("invencible");
  sofia1.setAnimation("invencible");
  sofia2.setAnimation("invencible");
  sofia3.setAnimation("invencible");
  sofia11.setAnimation("invencible");
  sofia12.setAnimation("invencible");
  sofia13.setAnimation("invencible");
  txt.x=200;
  re.x=200;
  a++;
  }
  if (mousePressedOver(re)) {
    sofia.x = 20;
    sofia.y = 20;
    sofia1.x = 500;
    sofia1.y = 500;
    sofia2.x = 500;
    sofia2.y = 500;
    sofia3.x = 500;
    sofia3.y = 500;
    sofia11.x = 500;
    sofia11.y = 500;
    sofia12.x = 500;
    sofia12.y = 500;
    sofia13.x = 500;
    sofia13.y = 500;
    a = 0;
    stopSound("assets/OST2.mp3");
    playSound("assets/OST2.2.mp3");
    re.x=500;
    txt.x=500;
    sofia.setAnimation("congrat");
    alvo.x=370;
    alvo.y=355;
    background(rgb(255, 0, 0));
    moeda.x=73;
    moeda.y=365;
    porta.x=291;
    porta.x=334;
  papelao1.x = 10;
  papelao2.x = 100;
  papelao3.x = 80;
  papelao4.x = 50;
  papelao5.x = 130;
  papelao6.x = 10;
  papelao7.x = 160;
  papelao8.x = 150;
  papelao9.x = 250;
  papelao10.x = 270;
  papelao11.x = 330;
  papelao12.x = 340;
  papelao13.x = 220;
  papelao14.x = 330;
  papelao15.x = 100;
  papelao16.x = 180;
  papelao17.x = 30;
  papelao18.x = 175;
  papelao19.x = 280;
  papelao20.x = 350;
  papelao21.x = 250;
  papelao22.x = 330;
  alvo.scale = 1;
  sofia.scale = 2;
  state = "game";
  }
  
  if (a == 5) {
    playSound("assets/OST2.mp3");
  }
stroke(rgb(128, 128, 128));
  
  
  if(keyDown(UP_ARROW)) {
    sofia.velocityX = 0;
    sofia.velocityY = -3;
  }
  if (keyDown("down")) {
    sofia.velocityX = 0;
    sofia.velocityY = 3;
  }
  if (keyDown("right")) {
    sofia.velocityX = 3;
    sofia.velocityY = 0;
  }
  if (keyDown("left")) {
    sofia.velocityX = -3;
    sofia.velocityY = 0;
  }
   if(keyDown(UP_ARROW) && keyDown("left")) {
    sofia.velocityX = -3;
    sofia.velocityY = -3;
  }
  if (keyDown("down") && keyDown("left")) {
    sofia.velocityX = -3;
    sofia.velocityY = 3;
  }
  if(keyDown(UP_ARROW) && keyDown("right")) {
    sofia.velocityX = 3;
    sofia.velocityY = -3;
  }
  if (keyDown("down") && keyDown("right")) {
    sofia.velocityX = 3;
    sofia.velocityY = 3;
  }
  if (keyDown("i")) {
    playSound("assets/OST2.mp3");
    stopSound("assets/OST2.2.mp3");
    sofia.setAnimation("invencible");
    state = "invencivel";
  }
  if (sofia.isTouching(papelao1) && state === "invencivel") {
    papelao1.destroy();
    }
  if (sofia.isTouching(papelao2) && state === "invencivel") {
    papelao2.destroy();
  }
  if (sofia.isTouching(papelao3) && state === "invencivel") {
    papelao3.destroy();
  }
  if (sofia.isTouching(papelao4) && state === "invencivel") {
    papelao4.destroy();
  }
  if (sofia.isTouching(papelao5) && state === "invencivel") {
    papelao5.destroy();
  }
  if (sofia.isTouching(papelao6) && state === "invencivel") {
    papelao6.destroy();
  }
  if (sofia.isTouching(papelao7) && state === "invencivel") {
    papelao7.destroy();
  }
  if (sofia.isTouching(papelao8) && state === "invencivel") {
    papelao8.destroy();
  }
  if (sofia.isTouching(papelao9) && state === "invencivel") {
    papelao9.destroy();
  }
  if (sofia.isTouching(papelao10) && state === "invencivel") {
    papelao10.destroy();
  }
  if (sofia.isTouching(papelao11) && state === "invencivel") {
    papelao11.destroy();
  }
  if (sofia.isTouching(papelao12) && state === "invencivel") {
    papelao12.destroy();
  }
  if (sofia.isTouching(papelao13) && state === "invencivel") {
    papelao13.destroy();
  }
  if (sofia.isTouching(papelao14) && state === "invencivel") {
    papelao14.destroy();
  }
  if (sofia.isTouching(papelao15) && state === "invencivel") {
    papelao15.destroy();
  }
  if (sofia.isTouching(papelao16) && state === "invencivel") {
    papelao16.destroy();
  }
  if (sofia.isTouching(papelao17) && state === "invencivel") {
    papelao17.destroy();
  }
  if (sofia.isTouching(papelao18) && state === "invencivel") {
    papelao18.destroy();
  }
  if (sofia.isTouching(papelao19) && state === "invencivel") {
    papelao19.destroy();
  }
  if (sofia.isTouching(papelao20) && state === "invencivel") {
    papelao20.destroy();
  }
  if (sofia.isTouching(papelao21) && state === "invencivel") {
    papelao21.destroy();
  }
  if (sofia.isTouching(papelao22) && state === "invencivel") {
    papelao22.destroy();
  }
  if (sofia.isTouching(moeda)  && state === "invencivel") {
    state = 'holdingkeyi';
    contagemMoedas = 1;
    moeda.setAnimation("animation_2");
    
  }
  if(state === 'holdingkeyi') {
    moeda.x = sofia.x + 5;
    moeda.y = sofia.y;
  }
  if (sofia.isTouching(papelao1)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
  }
  if (sofia.isTouching(papelao2)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
  }
  if (sofia.isTouching(papelao3)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao4)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao5)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao6)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao7)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao8)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao9)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao10)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao11)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao12)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao13)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao14)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao15)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao16)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao17)) {
  sofia.x = 20;
  sofia.y = 20;
  playSound("assets/dano.mp3");
  state ='portafechada';
  }
  if (sofia.isTouching(papelao18)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
  }
  if (sofia.isTouching(papelao19)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
  }
  if (sofia.isTouching(papelao20)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
  }
  if (sofia.isTouching(papelao21)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
  }
  if (sofia.isTouching(papelao22)) {
    sofia.x = 20;
    sofia.y = 20;
    playSound("assets/dano.mp3");
    state ='portafechada';
    
  }
  if (sofia.isTouching(moeda)) {
    state = 'holdingkey';
    contagemMoedas = 1;
    moeda.setAnimation("animation_2");
    
  }
  if(state === 'holdingkey') {
    moeda.x = sofia.x + 5;
    moeda.y = sofia.y;
  }
  if (state === 'portafechada') {
    moeda.x = 200;
    moeda.y = 200;
    moeda.setAnimation("key");
      porta.setAnimation("door");
  }
  showMobileControls(true, true, true, true);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
