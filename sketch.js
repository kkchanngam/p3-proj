//click mouse and press any key to start

let xp = 0;
let xxp = 0;
let yp = -150;   
let yyp = 450; 


//audio
function preload(){
  song = loadSound("soulphrase.mp3");
}
function setup() {
  frameRate(10);
 
}
function setup(){
  createCanvas(1000, 500);
  set1();
  set2();
   var button = createButton("start");
  button.mousePressed(set1, set2);
}

function set1() {
  song.play();
  xp = 0;
 xxp = 0;
 yp = -150;   
 yyp = 450;
   background(200);
  ellipseMode(CENTER);
  noStroke();
  fill(255,10,10);
  ellipse(500, 250, 55);
}
function set2(){
 
     fill(255);
    //top stairs
    rect(110,(yp-60), 40, 20);
    rect(140,(yp-40), 40, 20);
    rect(170,(yp-20), 40, 20);
    rect(200,yp,40,20);
  rect(230,(yp+20), 40, 20);
    rect(260,(yp+40),40,20);
  rect(290,(yp+60), 40, 20);
     rect(320,(yp+80), 40, 20);
     rect(350,(yp+100), 40, 20);
     rect(380,(yp+120), 40, 20);
     rect(410,(yp+140), 40, 20);
     rect(440,(yp+160), 40, 20);
     rect(470,(yp+180), 40, 20);
    //bottom stairs
    rect(500, yyp, 40, 20);
    rect(530, (yyp+20), 40, 20);
        rect(560, (yyp+40), 40, 20);
        rect(590, (yyp+60), 40, 20);
        rect(620, (yyp+80), 40, 20);
        rect(650, (yyp+100), 40, 20);
        rect(680, (yyp+120), 40, 20);
        rect(710, (yyp+140), 40, 20);
        rect(740, (yyp+160), 40, 20);
        rect(770, (yyp+180), 40, 20);
        rect(800, (yyp+200), 40, 20);
        rect(830, (yyp+220), 40, 20);
    
  //wild cards
  //shiomi
  fill(255, 82, 82)
 beginShape();
  //hair
vertex((xp+5), 260);
vertex((xp+17), 220);
vertex((xp+30), 205);
vertex((xp+45), 210);
vertex((xp+60), 203);
vertex((xp+75), 215);
vertex((xp+105), 207);
vertex((xp+125), 210);
  vertex((xp+150), 200);
  vertex((xp+160), 203);
  vertex((xp+175), 207);
  vertex((xp+195), 240);
  vertex((xp+190), 260);
  vertex((xp+185), 250);
  //face
  vertex((xp+183), 260);
  vertex((xp+185), 265);
  vertex((xp+195), 275);
  vertex((xp+200), 277);
  vertex((xp+192), 290);
  vertex((xp+190), 320);
  vertex((xp+185), 325);
  vertex((xp+130), 320);
  vertex((xp+125), 340);
  //arm
  vertex((xp+430), 330);
    vertex((xp+430), 335);
    vertex((xp+440), 335);
    vertex((xp+460), 325);
      vertex((xp+455), 325);
      vertex((xp+455), 300);
      vertex((xp+555), 300);
      vertex((xp+555), 315);
      vertex((xp+520), 325);
      vertex((xp+510), 360);
      vertex((xp+495), 365);
  vertex((xp+495), 370);
  vertex((xp+480), 370);
  vertex((xp+480), 360);
      vertex((xp+430), 362);
      vertex((xp+430), 367);
    vertex((xp+180), 390);
  
  //body
      vertex((xp+195), 410);
      vertex((xp+188), 450);
      vertex((xp+185), 470);
      vertex((xp+195), 500);
      vertex((xp+70), 500);
      vertex((xp+73), 490);
  vertex((xp+60), 470);
  vertex((xp+70), 420);
      vertex((xp+60), 380);
      vertex((xp+75), 340);
  //closing(hair)
   vertex((xp+75), 330);
      vertex((xp+57), 322);
      vertex((xp+65), 340);
   vertex((xp+40), 320);
   vertex((xp+40), 335);
   vertex((xp+20), 300);
   vertex((xp+20), 320);
   vertex((xp+15), 300);
   vertex((xp+10), 310);
   vertex((xp+17), 290);
     vertex((xp+10), 295);
     vertex((xp+15), 280);
     vertex((xp+10), 270);
  vertex((xp+5), 280);
  vertex((xp+5), 260);

endShape();
  
  //yuki
  fill(56, 165, 255);
   beginShape();
  //body
  vertex((xxp+925), 0);
  vertex((xxp+918), 30);
  vertex((xxp+930), 60);
  vertex((xxp+925), 100);
  vertex((xxp+930), 120);
  vertex((xxp+915), 150);
  vertex((xxp+918), 160);
  //head
  vertex((xxp+915), 160);
  vertex((xxp+920), 170);
  vertex((xxp+925), 160);
  vertex((xxp+928), 180);
  vertex((xxp+930), 170);
  vertex((xxp+935), 195);
  vertex((xxp+938), 185);
  vertex((xxp+945), 220);
  vertex((xxp+940), 240);
  vertex((xxp+935), 250);
  vertex((xxp+930), 260);
  vertex((xxp+900), 265);
  vertex((xxp+880), 260);
  vertex((xxp+850), 265);
  vertex((xxp+840), 260);
  vertex((xxp+830), 255);
  vertex((xxp+815), 235);
   vertex((xxp+820), 210);
vertex((xxp+810), 200);
  vertex((xxp+817), 195);
  vertex((xxp+825), 160);
  vertex((xxp+830), 155);
  vertex((xxp+850), 160);
  vertex((xxp+818), 150);
vertex((xxp+570), 160);
  vertex((xxp+570), 155);
  vertex((xxp+560), 155);
  vertex((xxp+540), 170);
  vertex((xxp+550), 170);
  vertex((xxp+550), 190);
  vertex((xxp+450), 190);
  vertex((xxp+450), 180);
  vertex((xxp+480), 170);
  vertex((xxp+490), 150);
  vertex((xxp+510), 125);
  vertex((xxp+520), 120);
  vertex((xxp+520), 110);
  vertex((xxp+535), 110);
  vertex((xxp+535), 120);
  vertex((xxp+570), 120);
vertex((xxp+570), 115);
 vertex((xxp+830), 105);
  vertex((xxp+830), 0);
  vertex((xxp+925), 0);

endShape();
}

function draw() {
  background(200);
  ellipseMode(CENTER);
  noStroke();
  fill(255,10,10);
  ellipse(500, 250, 55);
  
  if (keyIsPressed == true){

      if (xp > 200){
        fill(0);
      rect(random(0,1000),random(0,500), 40, 20);
    }
    //top stairs
    yp = yp + 1;  
     if (yp > 50) {
     yp = 50;
    }
    //bottom stairs
    yyp = yyp - 1;
    if (yyp < 250) {
     yyp = 250;
    }
    //the twins
    xxp = xxp - 1;
     xp = xp + 1;
      if (xp > 400){
        song.stop();
      xp = 2000;
      xxp = -2000;
      yp = -200;
      yyp = 800;
    //the end
      background(57, 194, 228);
        ellipseMode(CENTER);
  noStroke();
  fill(242,233,78);
  ellipse(500, 250, 50);
       fill(57, 194, 228);
  ellipse(510, 245, 50);
      textSize(18);
      fill(0);
      text('memento mori', 450, 300);
        
    }
    set2();
    }


}