var sound;
var amp;
var button;
var a = 0;
var scene = 0;


function toggleSong() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.play();
    }
}


function preload() {
    sound = loadSound('assets/시차 (We Are) (Feat. 로꼬 & GRAY).mp3');
    myFont = loadFont("assets/Roboto-Light.ttf");
}


function setup() {
    createCanvas(600, 600);

    amplitude = new p5.Amplitude();
    button = createButton('stop');
    button.mousePressed(toggleSong);

    sound.play();
    amp = new p5.Amplitude();
    loop();

    fft = new p5.FFT(0.9, 64);
    w = width / 64;

}


function draw() {
    background(230, 230, 230);


    //music movement
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 200);
    //value for album 6, scene 5
    var x = 100;
    var y = 100;
    var w = 50;
    //color value for album 6, scene 5
    var c1 = color(236, 225, 222);
    var c2 = color(221, 247, 194);
    var c3 = color(244, 219, 237);
    var c4 = color(179, 245, 221);
    var c5 = color(171, 198, 253);
    var c6 = color(205, 253, 253);
    var c7 = color(249, 220, 220);
    var c8 = color(242, 250, 251);
    var c9 = color(247, 218, 224);
    var c10 = color(182, 222, 213);
    var c11 = color(241, 234, 198);
    var c12 = color(199, 237, 199);
    var c13 = color(249, 222, 238);
    var c14 = color(207, 229, 224);
    var c15 = color(197, 238, 226);
    var c16 = color(249, 212, 244);
    


    if (scene == 0) {

        noStroke();
        fill(245, 237, 234);
        rect(0, 0, 600, 600);


        for (var i = 0; i < size; i += 0.5) {
            push();
            translate(300, 300);
            rotate(i + frameCount / 100.0);
            scale(0.8, 0.8);
            noFill();
            strokeWeight(0.4);
            stroke(0);
            ellipse(size + i, size - i, 400 - i * size, 400 - i / size);
            pop();
        }
            
            noStroke();
            fill(255);
            textFont(myFont);
            textSize(40);
            text("01", 510, 75);

    } else if (scene == 1) {

        noStroke();
        fill(195, 230, 232);
        rect(0, 0, 600, 600);

        for (var i = 0; i <= width; i += 0.45) {

            push();
            translate(300, 300);
            rotate(i / 2);
            scale(0.2, 0.2);
            noFill();
            strokeWeight(2);
            stroke(244, 115, 128);
            ellipse(size + i, size + i, 60 + size, 60 + size);
            pop();
            
        }
            
            fill(255);
            textFont(myFont);
            textSize(40);
            text("02", 510, 75);    

        
    } else if (scene == 2) {
        fill(38, 36, 39);
        noStroke();
        rect(0, 0, 600, 600);

        for (var i = 0; i < size; i += 0.4) {
            //left, red
            push();
            translate(10, 300);
            rotate(i + frameCount / 70.0);
            scale(0.7, 0.7);
            noFill();
            strokeWeight(1);
            stroke(224, 111, 115);
            ellipse(size + i, size - i, 400 - i * size, 400 - i / size);
            pop();
            
            //center bottom, yellow
            push();
            translate(300, 590);
            rotate(i + frameCount / 70.0);
            scale(0.7, 0.7);
            noFill();
            strokeWeight(1);
            stroke(152, 120, 66);
            ellipse(size + i, size - i, 400 - i * size, 400 - i / size);
            pop();
            
            //right, blue
            push();
            translate(590, 300);
            rotate(i + frameCount / 70.0);
            scale(0.7, 0.7);
            noFill();
            strokeWeight(1);
            stroke(63, 86, 116);
            ellipse(size + i, size - i, 400 - i * size, 400 - i / size);
            pop();
        }

            fill(255);
            textFont(myFont);
            textSize(40);
            text("03", 510, 75);

    } else if (scene == 3) {
        fill(254, 203, 232);
        noStroke();
        rect(0, 0, 600, 600);

        //left flower 
        for (var i = 0; i < size; i += 0.5) {
            push();
            translate(130, 300);
            rotate(i + frameCount / 70.0);
            scale(0.2, 0.2);
            noFill();
            strokeWeight(3);
            stroke(52, 181, 117);
            rect(size - i, size - i, 500 - i * 20 + size, 500 - i / 20 + size);
            pop();
        }
        
        //right flower
        for (var i = 0; i < size; i += 0.5) {
            push();
            translate(470, 300);
            rotate(i + frameCount / 70.0);
            scale(0.2, 0.2);
            noFill();
            strokeWeight(3);
            stroke(52, 181, 117);
            rect(size - i, size - i, 500 - i * 20 + size, 500 - i / 20 + size);
            pop();
        }
        
        
            fill(255);
            textFont(myFont);
            textSize(40);
            text("04", 510, 75);

    } else if (scene == 4) {

        fill(37, 53, 52);
        noStroke();
        rect(0, 0, 600, 600);


        for (var i = 0; i < size; i += 0.5) {

            //triangle
            push();
            translate(70, 570);
            rotate(frameCount / 170.0);
            fill(214, 101, 105);
            polygon(0, 0, 160, 3);
            pop();
            
            //hexagon
            push();
            translate(480, 50);
            rotate(frameCount / -100.0);
            fill(231, 222, 152)
            polygon(0, 0, 150, 6);
            pop();
            
            //rectangle
            push();
            fill(65, 108, 103);
            rect(120, 160, 260, 260);
            //circles
            fill(217, 216, 221)
            //top circle
            ellipse(300, 120, 50 + size - 10, 50 + size - 10);
            //left circle
            ellipse(50, 380, 50 + size, 50 + size);
            //right circle
            ellipse(270, 550, 50 + size + 5, 50 + size + 5);
            pop();


            noStroke();
            fill(255);
            textFont(myFont);
            textSize(40);
            text("05", 510, 75);
        }
        
        
        

//gradation
    } else if (scene == 5) {
        noStroke();
        fill(173, 224, 209);
    //    fill(217, 243, 198);
        rect(0,0,600,600);
        
        for (var i = y; i <= y + w + size*3; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c11, c12, inter);
            push();
//            noFill();
            fill(c);
            stroke(c);
            rect(x+130, size+i+90, 40, 40,60,60);
            pop(); 
        }
        
        for (var i = y; i <= y + w + size; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c5, c6, inter);
            
            push();
            fill(c);
//           fill(211,251,219);
//           strokeWeight(1);
            stroke(c);
//            rect(x+190+i, size-i*2+580, 40, 40, 60, 60);
            rect(x+190, size-i*2+580, 40, 40, 60, 60);
            pop();
        }        
        
        
        for (var i = y; i <= y + w + size *2; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c1, c2, inter);
            
            push();
         //   fill(c);
            fill(234,244,217);
           strokeWeight(1.7);
            stroke(c);
            rect(x+170, size-i*3+700, 40, 40, 60, 60);
            pop();
        }
        
        for (var i = y; i <= y + w + size *2; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c3, c4, inter);
            push();
            fill(c);
            stroke(c);
            rect(x+190, size-i+450, 30, 30, 60, 60);
            pop();   
        
        
            push();
            fill(c);
            stroke(c);
            rect(x+145, size-i+500, 35, 40, 60, 60);
            pop();   
        }
        
        for (var i = y; i <= y + w - size /2; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c7, c8, inter);
            push();
            fill(c);
            stroke(c);
            rect(x+172-size/2, size-i+555, 25, 25, 60, 60);
            pop();  
            
            push();
            fill(c);
            stroke(c);
            rect(x+203, size-i+300, 25, 25, 60, 60);
            pop();                
        }
        
        for (var i = y; i <= y + w + size*2; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c9, c10, inter);
            push();
//            noFill();
            fill(c);
            stroke(c);
            rect(x+160, size-i+360, 20, 20,60,60);
            pop(); 
            
            push();
//            noFill();
            fill(c);
            stroke(c);
            rect(x+175, size-i+550, 35, 35,60,60);
            pop(); 
        }
        
        for (var i = y; i <= y + w + size+2; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c13, c14, inter);
            push();
            fill(c);
            stroke(c);
            rect(x-size+130, size+i+330, 25, 25, 60, 60);
            pop();  
            
            push();
            fill(c);
            stroke(c);
            rect(x+size+230, size-i+450, 25, 25, 60, 60);
            pop();                
        }
        
        for (var i = y; i <= y + w + size; i++) {
            var inter = map(i, y, y + w, 0, 1);
            var c = lerpColor(c15, c16, inter);
            push();
            fill(c);
            stroke(c);
            rect(x+size+130, size+i+200, 25, 25, 60, 60);
            pop();  
            
            push();
            fill(c);
            stroke(c);
            rect(x-size+210, size-i+400, 25, 25, 60, 60);
            pop();                
        }    
         
        
        noStroke();
        fill(255);
        textFont(myFont);
        textSize(40);
        text("06", 510, 75);
    }

    fill(255);
    strokeWeight(1);
    stroke(255);
    line(30, 15, 570, 15);

    fill(255);
    noStroke();
    textFont(myFont)
    textSize(10);
    text("01. Anna Morse", 30, 55);
    text("02. Calvin Hutcheon", 150, 55);
    text("03. Claire Choi", 30, 75);
    text("04. Dae In Chung", 150, 75);
    text("05. Jaeyoung Cheong", 30, 95);
    text("06. Reyna Clarissa", 150, 95);
    text("07. Yeoeun Cho", 30, 115);

    textSize(12);
    text("Publisher: Yeoeun Cho", 250, 562);
    text("2017.12.14", 275, 580);
   
}

//function for scene 4, track 05 moving triangle and hexagon
function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

//mousePressed to change scene
function mousePressed() {
    scene += 1;
    if (scene >= 6) {
        scene = 0;
    }
}
