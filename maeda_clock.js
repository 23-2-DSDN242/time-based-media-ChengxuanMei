// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  angleMode(DEGREES);//
  background(255,102,178); 

  textSize(400);
  textAlign(CENTER, CENTER);
  translate( width/2, height/2)
  rotate((360/23)*obj.hours)
  fill(255,255,0)
  text(obj.hours, 0,0);
  pop()
   //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
 
  strokeWeight(5)
  textSize(250)
  fill(250)
  textAlign(CENTER,CENTER)
  rotate((360/59)* obj.minutes )
  text(obj.minutes,0,0)
  

 strokeWeight(5)
 textSize(200)
 fill(0,102,204)
 textAlign(CENTER,CENTER)
 rotate((360/59)*obj.seconds)
 text(obj.seconds, 0,0)
 

 strokeWeight(5)
 textSize(100)
 fill(255,204,229)
 textAlign(CENTER,CENTER)
 rotate((360/999)*obj.millis)
 text(obj.millis, 0,0)
 
 
}
  
  //let blockSize = 50
  //noStroke()
  //push()
  //rotate((360/12)* obj.minutes)
  //fill(255,255,204)
  //rect(0,0, blockSize, blockSize )
  //rect(0,50, blockSize, blockSize)
  //rect(0,-50, blockSize, blockSize)
  //rect(-80,-100, blockSize, blockSize)
  //rect(-50,-100, blockSize, blockSize)
  //rect(0,-100, blockSize, blockSize)
  //pop()
  
  