
/*
* LIBRARY OF FUNCTIONS to be used for ASG 4, randomness and tiimers
*/

/*
 * Function to return an integer in a certain range that is speficied in range speficied by the two paramaters, upper and lower
 */
function GetRandomRange(lower, upper)
{
var length, aNumber;

length = (upper - lower) + 1;
aNumber = Math.floor(Math.random() * length) + lower;

//  alert("GetRandomRange" + lower + " " + upper + " " + aNumber);

return aNumber;

}


/*
 * Return random string from an array of strings
 */

/*
 * Return random string from an array of strings
 */
 function randomStringFromArray(anArray)
 {
   var aString, len, high_index;
   
   len = anArray.length;
   high_index = len - 1;
   random_index =  GetRandomRange(0, high_index);
   
   aString = anArray[random_index];
   /*
   alert("the random string from an array of stings that will be returned is " + aString);
   */
   return aString;
 }
 
 

 /*
  * Function returns random praise phrase. Teachers always need this! 
  * This function can be easily modified to return and type of random strings, such as random nouns
  * or random verbs.... or supportPhrases =  ["Not quite, but try again.","Almost. Do it again."];
  */
 function randomPraise()
 {
   var Phrases = ["Wow!","That's incredible.", "How extraordinary!", "You STINK!", "Far out!", "Outstanding performance!", "Superb!"];
   var str1 = " ";
   
   str1 = randomStringFromArray(Phrases);
   /*alert ("I need this because I have a low self-image: " + str1);
   */
   
   return str1;    
 }
  /*   WRITE CODE - Use an alert to alert, "I like you" and then two random praises.
   */
  function alertTwoRandomPraises()
  {
    alert("I like you! " + randomPraise() + " "+ randomPraise());  
     
  }
  
  /*
   * write test to the desc area
   */
  function writeText(txt)
  {
  document.getElementById("desc").innerHTML=txt;
  }

  /*
   * write image to the desc1 area
   */
  function writeImage()
  {
  var txt =  "<img src='class.jpg' width='105' height='103' onclick = writeTextRandomPraise()>"
  document.getElementById("desc1").innerHTML=txt;
  }
  /*
   * write image to the desc1 area
   * We need a global
   */
   var lastImageNumber = 1;
  
  /* Write a random image to a location. So need an array of image names, and then randomly pick from that.. 
   */
  
   
   /* Write a play random audio function
    */
    

    var player = new Audio(); // define a global audio object
    
    /*  a global array of sounds
     */
     
       var sounds = ["animals008.mp3","love.wav", "great.wav","easy.wav", "map_00_barnanimals.wav","JollyGoodShow.wav"];
   

       
    
    //load and play the sound, s is the name of a mp3 or wav file
    function play(s) {
        player.src = s;
        player.load();
        player.play();
    }
    
    /* Play a random sound
     */
    
   function playRandomSound()
    {
       var sound = " ";
       
       sound = randomStringFromArray(sounds);
       play(sound);
        
    }

   /*
    * write image to one of the randomly picked areas desc1 - desc9 and the image is clickable
    */
  function writeRandomLocationImage()
  {
      var str = "desc";
      var str2 = "desc";
      var imageNumberNew = GetRandomRange(1, 9);
   /* put the background color over the last location */

      str += String(lastImageNumber);
      /*alert("This is the string " + str); */
      
      txt =  "<img src='green.jpg' width='105' height='103'>"
      document.getElementById(str).innerHTML=txt; 
   /* put the new image in place */
   
      str2 += String(imageNumberNew);
      /*alert("This is the string " + str2); */
      
      txt =  "<img src='class.jpg' width='105' height='103' onclick = writeTextRandomPraise()>"
      document.getElementById(str2).innerHTML=txt;  
      lastImageNumber = imageNumberNew;
      
  }
   


 // global set of images
   var moreImages = ["girl_paint_hands-105x103.jpeg","badger_logo_105x103.jpeg", "W-6261c_tn_105x103.jpeg","W-3814d_tn_105x103.jpeg", "USCCB105x103logo.jpeg", "TSessions1-105x103.jpeg", "poweranimalpolarbearcrop-105x103.jpeg", "HTUYM-105x103_1_.jpeg"];

   /* Write a random image (images all the same size) to a random location
    */
   function writeRandomImageRandomLocation()
   {
      var str = "desc";
      var str2 = "desc";
      var imageNumberNew = GetRandomRange(1, 9);
   /* put the background color over the last location */

      str += String(lastImageNumber);
      /*alert("This is the string " + str); */
      
      txt =  "<img src='green.jpg' width='105' height='103'>"
      document.getElementById(str).innerHTML=txt; 
   /* put the new image in place */
   
      str2 += String(imageNumberNew);
      /*alert("This is the string " + str2); */
      
      txt =  "<img src='" + randomStringFromArray(moreImages) + "' width='105' height='103' onclick = writeTextRandomPraise()>"
      document.getElementById(str2).innerHTML=txt;  
      lastImageNumber = imageNumberNew;
      
   }
   
   /* Write a random image (images all the same size) to one location
    */
  function writeRandomImage()
  {    
      var txt;
      
      txt =  "<img src='";
      
      txt = txt + randomStringFromArray(moreImages); 
      
      txt = txt +  "' width='105' height='103' onclick = writeTextRandomPraise()>";
      alert(txt);
      document.getElementById("desc0").innerHTML=txt;  
      lastImageNumber = imageNumberNew;
      
  }
   /* Write 3 random images (images all the same size)
    */
  function slotMachine()
    {    
        /* use txt1, txt2, txt3 so can see if they won (play sound that works with Firefox), also initialize to green rectangle onLoad */
        var txt1, txt2, txt3;
        
       
        // alert ("in slot");
                 
         txt1 =  "<img src='";
                
         txt1 = txt1 + randomStringFromArray(moreImages); 
                
         txt1 = txt1 +  "' width='105' height='103'>";
       
                
         document.getElementById("div1").innerHTML=txt1;  
          
         txt2 =  "<img src='";
                
         txt2 = txt2 + randomStringFromArray(moreImages); 
                
         txt2 = txt2 +  "' width='105' height='103'>";
       
         document.getElementById("div2").innerHTML=txt2;  		         
                
         txt3 =  "<img src='";
                
         txt3 = txt3 + randomStringFromArray(moreImages); 
                
         txt3 = txt3 +  "' width='105' height='103'>";
                        
         document.getElementById("div3").innerHTML=txt3;  
                
         play("leverPull.wav");
        
        /* Check if there are three the same which is a BIG win, play coins if win */
        
        if ((txt1 == txt2) && (txt2 == txt3) && (txt1 == txt3))
            {
            //alert( "Three in a row, BIG win!");
            play( "BIGWinWSiren.wav"); 	
            } // Otherwise check if two match
        else if ((txt1 == txt2) || (txt2 == txt3) || (txt1 == txt3))
                {
                //alert( "two in a row, small win!");
                play( "smallSound.wav"); 	
                }

        
    }
    

  /*
   * write praise/insult to one of the randomly picked areas desc1 - desc9 
   */
 function writeRandomLocationPhrase()
 {
      var str = "desc";
      var str2 = "desc";
      var imageNumberNew = GetRandomRange(1, 9);
   /* put the background color over the last location */

      
   
      str2 += String(imageNumberNew);
      /*alert("This is the string " + str2); */
      
      txt =  randomPraise();
      document.getElementById(str2).innerHTML=txt;  
      lastImageNumber = imageNumberNew;
      
 }
  /*
   * initialize all the image areas
   */
 function intializeRandomLocationImage()
 {
      var str, i;
      
      txt =  "<img src='green.jpg' width='105' height='103'>"
      /* put the background color over each location */
      for (i = 1; i <= 9 ; i++)
       {
       str = "desc";
       str += String(i);   
       document.getElementById(str).innerHTML=txt;     
       }   
 }
 /* initialize the place to write an image, put in an image with the background color. 
  */
function initImageSpot()
{  
      
      txt =  "<img src='green.jpg' width='105' height='103' onclick = writeTextRandomPraise()>"
      document.getElementById("desc0").innerHTML=txt;  
      lastImageNumber = imageNumberNew;
      
}
 
 
 /*
  * Write random praise to text box
  */
 function writeTextRandomPraise()
 {
   var str1 = " ";
   
   str1 = randomPraise();
   writeText(str1);
 }
 
/*
 * time functions
 */
 
 /* GLOBAL variables  */
 var timeStart;

/* return milliseconds since 1970/01/01
 */

function callGetTime()
{   
     var d = new Date();
     return d.getTime();
}

 
 /* Start the time, i.e., get a date, and then get a time, milliseconds since 1970/01/01
  */
 function startTimer() 
 {
     
     TrialStartObj = new Date();
     timeStart = TrialStartObj.getTime();
      writeText("Timer started");
     
 }
 /* Stop the timer, i.e, get another date, and then get a time, milliseconds since 1970/01/01
  */
 function stopTimer() 
 {
    var stopTime, stopTimeObj;
    
    stopTimeObj = new Date();
    stopTime = stopTimeObj.getTime();
    return stopTime;
 }
   
 function elapsedTime()
 
 {
    var elapsedTimeGot;
    
    timeEnd = stopTimer();
    elapsedTimeGot = (timeEnd - timeStart)/1000;
    return elapsedTimeGot;  
 }
 
 function writeTextElapsedtime()
 {
    var elapsedTimeNow;
    
    elapsedTimeNow = elapsedTime();
    writeText("Elapsed time is " + elapsedTimeNow);
 }
 
 /*
  * Also, need time out function(s)... 
  */
