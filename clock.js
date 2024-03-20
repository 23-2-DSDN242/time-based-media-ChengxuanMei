/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  createCanvas(960,500)
  ellipseMode(CENTER)
  
  //fill(200); // dark grey
 
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  //background setup
  //let myStrokeWeight = 80
  //strokeWeight(myStrokeWeight)
  let pink = color(255,153,204)
  let deepblue = color(0,0,102)
  let rose = color(204,0,102)
  if (obj.hours >= 7 && obj.hours<18){
    background(pink)
    
  }else{
    background(0,0,100)
  }
  
  
  //for(let i = 0; i< width; i=i + myStrokeWeight){
    //let lerpMap = map(i, 0,width, 0,1)
    //let gradientColor = lerpColor(purple,pink, lerpMap)
   //stroke(gradientColor )
    //line(i,0, i,height)
   //}
  
  // sunset
  noStroke()
  let OpacityAm = 60
  let deepyellow = color(255,255,102,OpacityAm)
  let yellow = color(255,255,204,OpacityAm )
  let grassgreen= color(102,204,0,OpacityAm )
  let orange = color(255,204,153,OpacityAm )


  let minForlerp = map(obj.seconds,0,59, 0,1)
  let lightcolor = lerpColor(yellow, orange,minForlerp)
  let nightcolor = lerpColor(grassgreen, deepyellow,minForlerp)

  let sizeStep = 15
  let howManyCircles = obj.seconds;
  if (obj.hours >= 7 && obj.hours<18){
    fill(lightcolor)
  }else{
    fill(nightcolor )
  }
 
  for(let i = 0; i< howManyCircles; i++){
    ellipse(width/2,300, sizeStep*i); //location of the sun
  }




  //city first layer
  if (obj.hours >= 7 && obj.hours<18){
    fill(198,30,119)
  }else{
    fill(185,123,246)
  }
  rect(50, 200,80, 250) // 1
  rect(150, 100, 100, 250)//2
  rect(160, 90, 50, 60)
  rect(160, 70, 2, 90)
  rect(250, 150, 50, 250)//3
  rect(350, 300, 300, 600)//4
  //quad(x1, y1, x2, y2, x3, y3, x4, y4)
  quad(650,150,750,120,750,250,650,250)//5
  rect(650,200, 100, 200)
  rect(750,200, 100, 250)//6
  rect(900, 100, 100, 250)//7
  rect(850, 70, 50, 250)
  rect(920, 50, 2, 90)

  //city second layer 
  if (obj.hours >= 7 && obj.hours<18){
    fill(122,39,103)
  }else{
    fill(100,255,255)
  }
  rect(0,350,960,100)//base
  rect(70, 250,130,300)//1
  rect(70, 260,140,40)
  rect(70, 310,140,40)
  rect(290,200, 60, 450)//2
  rect(295,180, 20, 300)
  rect(297,170, 10, 300)
  rect(350,300,80,190)//3
  rect(370,280,20,190)
  rect(375,260,8,190)
  rect(390,280,40,10)
  rect(420, 280, 10, 30, 20);
  rect(550, 250, 100, 250)//4
  rect(570, 230, 8, 250)
  rect(620, 200, 5, 250)
  rect(700, 150, 100, 250)//5
  rect(830, 240, 150, 300)//6
  rect(830,220, 150, 8)
  rect(840,220, 5,100)
  rect(900,220, 5,100)

  //city third layer 
  if (obj.hours >= 7 && obj.hours<18){
    fill(87,76,183)
  }else{
    fill(100,125,255)
  }
  rect(0,380,960,100)//base 
  rect(0, 280,80, 250)//1
  rect(95, 190,80, 250)//2
  rect(105, 200, 80, 20, 20);
  rect(105, 230, 80, 20, 20)
  rect(105, 260, 80, 20, 20)
  rect(105, 290, 80, 20, 20)
  rect(105, 320, 80, 20, 20)
  rect(105, 350, 80, 20, 20)
  rect(250, 250,80, 250)//3
  rect(900, 200,80, 250)//4
  rect(895, 210,80, 25)
  rect(895, 260,80, 25)
  rect(895, 320,80, 25)
  rect(680, 200,40, 250)//5
  
  //city 4 layer 
  if (obj.hours >= 7 && obj.hours<18){
    fill(35,49,92)
  }else{
    fill(0,25,51)
  }
  rect(0, 160,50, 250)//1
  triangle(30, 180, 30, 160, 70, 170)
  rect(0, 280,100, 250)//2
  rect(100, 380,100, 250)//3
  rect(200, 350,60, 250)//4
  rect(200, 335,60, 8)
  rect(210, 335,4,30)
  rect(240, 335,4,30)
  rect(250, 450,150, 250)//5
  rect(400, 350,100, 250)//6
  rect(370, 340,6, 240)
  rect(370, 340,90)
  rect(450, 325,40, 25)
  rect(500, 400,100, 200)//7
  rect(600, 300,160, 200)//8 
  rect(600, 280,160, 8)
  rect(610, 280,5,50)
  rect(630, 280,5,50)
  rect(650, 280,5,50)
  rect(670, 280,5,50)
  rect(690, 280,5,50)
  rect(710, 280,5,50)
  rect(730, 280,5,50)
  rect(750, 280,5,50)
  rect(750, 470,160, 200)//9
  rect(800, 350,100, 200)//10
  rect(900, 450,100, 200)//11
  rect(820, 330,60, 200)
  rect(930, 300,80, 200)//12

  
//clock
if (obj.hours >= 7 && obj.hours<18){
  fill(38,69,121)
  stroke(38,69,121)
}else{
  fill(255)
  stroke(255)
}

//noStroke(98,77,84)
//hours
  strokeWeight(5)
  textSize(100)
  textAlign(CENTER,CENTER)
  text(obj.hours, 250, 200)

//minutes
  strokeWeight(5)
  textSize(100)
  textAlign(CENTER,CENTER)
  text(obj.minutes, width/2, 200)
//seconds
strokeWeight(5)
  textSize(100)
  textAlign(CENTER,CENTER)
  text(obj.seconds, 750, 200)

  }
  

