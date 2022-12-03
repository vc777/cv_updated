/*var tweet = prompt("compose your tweet");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);*/


//alert("You have written " + tweetCount + " characters, you have " + (140- tweetCount) + " characters remaining";
//alert(finalOutput);

/*You have written 182 characters, you have -42  characters left;*/



/*var name = "Vivek"
a = name.slice(0,name.length);
alert(a);
console.log(a)*/

/*
alert(prompt("compose your tweet").slice(0,140));
//single line slice cmd
*/

/*
var name = "vivek"
name  = name.toUpperCase();
name = name.toLowerCase();
first_Letter = name.slice(0,1);
first_Letter = first_Letter.toUpperCase();
final_one = (first_Letter + name.slice(1,name.length))
*/

/*
//Dog age to human age calculator
var dogAge = prompt("How old your Dog")
var humanAge  = (dogAge - 2) * 4 + 21;
alert("So your Dog age is " + dogAge + " & your Age is " + humanAge)
*/

/*
var x = 5;

y =   x +=2;

*/



/*
function getMilk() {
    
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
alert("leave house")
alert("take right")
}

getMilk();

*/


/** 
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
/*
 function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
    }
    
    function moveFourTimes() {
       
       move();
       move();
       move();
       move();
    }

    */


/**/
    /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
/*
function main(){
   
    putBeeper();
    diagonalMoveandBeeper();
    diagonalMoveandBeeper();
    diagonalMoveandBeeper();
    diagonalMoveandBeeper();
    
    }
    
    function diagonalMoveandBeeper() {
       
       move();
       turnLeft();
       move();
       putBeeper();
       turnRight();
       
       move();
       move();
    }
    */


    /*----------------------------------*/
    function main(){
        beepersRight();
        goUpTurnLeft();
        beepersLeft();
        goUpTurnRight();
           beepersRight();
        goUpTurnLeft();
        beepersLeft();
        goUpTurnRight();
           beepersRight();
     }
      
     function goUpTurnRight() {
        turnRight();
        move();
        turnRight();
     }
      
     function goUpTurnLeft() {
        turnLeft();
        move();
        turnLeft();
     }
      
     function beepersRight() {
        putBeeper();
        move();
        move();
        putBeeper();
        move();
        move();
        putBeeper();  
     }
      
     function beepersLeft() {
        move();
        putBeeper();
        move();
        move();
        putBeeper();
        move();
     }

     /*----------------------*/



     /*---*/

function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
      var numofBottles = Math.floor(bottles/1.5);
    alert("buy " + numofBottles + " Bottles of Milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(11)

  /*----------------*/ */


  /* -------------- */
  function lifeInWeeks(age) {
    var yearsR = 90-age;
    var days = yearsR * 365;
    var weeks = yearsR * 52;
    var months = yearsR * 12;
    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");    
}


lifeInWeeks(56);


/* -------------------*/


/*----------------------- */
function getMilk(bottles) {   
   console.log("leaveHouse");
   console.log("moveRight");
   console.log("moveRight");
   console.log("moveUp");
   console.log("moveUp");
   console.log("moveUp");
   console.log("moveUp");
   console.log("moveRight");
   var numofBottles = Math.floor(bottles/1.5);
   alert("buy " + numofBottles + " Bottles of Milk");
   console.log("moveLeft");
   console.log("moveLeft");
   console.log("moveDown");
   console.log("moveDown");
   console.log("moveDown");
   console.log("moveDown");
   console.log("moveLeft");
   console.log("moveLeft");
   console.log("enterHouse");
   return bottles %1.5
 }
 
var change = getMilk(11);
alert("you will receive a change of " + change);

/*- -----------------------------*/

https://drive.google.com/drive/folders/1JxG8SEka_f9s3mEIMv41-rxe2DOQNl3Y 

download it




/*--------------------*/
Didnt understand this probelem
import java.util.*;

class GenericStack <E>
    {

        Stack <E> stack = new Stack <E>();
        public void push(E obj)
        {
            stack.push(obj);
        }
        public E pop()
        {
            E obj = stack.pop();
            return obj;
        }
    }

public class Test

{
    public static void main(String args[])
    {

        GenericStack <String> gs = new GenericStack <String>();
        gs.push("Hello");
        System.out.print(gs.pop() + " ");
        GenericStack <Integer> gs = new GenericStack <Integer>();
        gs.push(44);
        System.out.println(gs.pop());
    }
    
}


/*-------------------*/
/*-------------------*/
I made this answer work it


function getMilk(money) {
    console.log("Take Left")
    console.log("Take Right")
    console.log("Take Straight")
    var num_of_bottles = Math.floor(money/32);
    alert("You bought " + num_of_bottles + " packet/bottle of milk from Kirana Store");
    console.log("Take Left")
    console.log("Take Right")
    console.log("Take Straight")

    return money % 32; //Remainder of this division(Change in return)
}



var change = getMilk(prompt("Enter money here"));
alert("You receive a change in return of Rupees " + change + "/-");


/*---------------------------*/


/*------------------------------*/
Another function i worked on 


function getMilk(money, costperbottle) {
    console.log("Take Left")
    console.log("Take Right")
    console.log("Take Straight")
    alert("You bought " + secondFunction(money, costperbottle) + " packet/bottle of milk from Kirana Store");
    console.log("Take Left")
    console.log("Take Right")
    console.log("Take Straight")

    return money % costperbottle; //Remainder of this division(Change in return)
}

function secondFunction(startingMoney, costperbottle) {
    var num_of_bottles = Math.floor(startingMoney/costperbottle);
    return num_of_bottles

}


var change = getMilk((prompt("Enter Money Here")), (prompt("Enter cost per bottle here")))
alert("you receive a change of " + change + "/-")


/*-------------------------------------------------/


/*-------------------------------------------*/

function getMilk(money, costperbottle) {
    console.log("Take Left")
    console.log("Take Right")
    console.log("Take Straight")
    alert("You bought " + secondFunction(money, costperbottle) + " packet/bottle of milk from Kirana Store");
    console.log("Take Left")
    console.log("Take Right")
    console.log("Take Straight")

    return money % costperbottle; //Remainder of this division(Change in return)
}

function secondFunction(startingMoney, costperbottle) {
    var num_of_bottles = Math.floor(startingMoney/costperbottle);
    return num_of_bottles

}


alert("Hello master, here is your " +  getMilk( (prompt("Enter Money Here")), (prompt("Enter cost per bottle here")) )  + " change");



/*------------------------------------------*/


/*--------------------------------------*/

function bmiCalculator(weight, height) {
    var dmi = weight/(height**2);
    return Math.round(dmi)
}


var bmi = bmiCalculator(prompt("Enter weight"),prompt("Enter height"));
alert("your bmi is " + bmi)


/*------------------------------------------*/


/*--------------------------------*/
var n = Math.random();
n=n*6
n= Math.floor(n) + 1;
console.log(n);

/*----------------------------------*/



/*

var n = Math.random();
n=n*6
/* here range is from 0 to 5 only*, here random is creating floating point number 0.111/
n= Math.floor(n) + 1;
/* here added 1 to 6 range only, here floor is rounding the number*/
console.log(n);

**/



https://www.youtube.com/watch?v=GtOt7EBNEwQ





/*

var n = Math.random();
n=Math.floor(n*6)+1;
console.log(n)
*/


/* Love Calculator

prompt("What is your name")
prompt("What is their name")

var LoveScore = Math.random()*100
LoveScore = Math.floor(LoveScore) +1;
alert("Your love Score is " +  LoveScore + "%");

*/





/* LOVESCORE with if conditioon

function loveScore_teller(add_from_lovescore) {
    if (loveScore>=70){
        alert("Your Love score is " + loveScore + "& you love each other aslike DHANYA & MANYA LEO")
    }else {
        alert("You failed in LoveStory & Going to get Arranged Marriage")
    }

}

prompt("Enter your Name")
prompt("Enter their Name")
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
loveScore_teller(loveScore)



*/



/* LOVE SCORE if if if conditions

function loveScore_teller(add_from_lovescore) {
    if (loveScore>=70){
        alert("Your Love score is " + loveScore + "& you love each other aslike DHANYA & MANYA LEO")
    }if (loveScore>30 && loveScore<70) {
        alert("your lovestory is floating level - mid with score of "+ loveScore + "% be Bondative")
    }if (loveScore<=30){
        alert("your lovescore is " + loveScore + "% its seems like OIL and WATER" )
    }

}

prompt("Enter your Name")
prompt("Enter their Name")
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
loveScore_teller(loveScore)





/*
var a = 12;
var b ="12";
if (a==b){
    alert("true")
}else{
    alert("false")
}*/


*/


/* BMI CALCULATOR  FINAL PROVED SELF

function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    bmi = Math.round(bmi);
    var interpretation;

    if (bmi<18.5) {
        interpretation= ("Your BMI is " + bmi + ", so you are underweight.");
    }if (bmi>18.5 && bmi<24.9){
        interpretation=("Your BMI is " + bmi + ", so you have a normal weight.");
    }if (bmi>24.9){
        interpretation=("Your BMI is " + bmi + ", so you are overweight.");
    }
    return interpretation;
}


var weight = prompt("Enter weight")
var height = prompt("Enter height")
bmiCalculator (weight, height)



*/


/* LEAP YEAR FIRST CREATE A FLOW CHART AND NEXT WORK ON IT


function isLeap(year) {
    if (year%4===0){
        if (year%100 ===0){
            if (year%400===0){
                return "Leap year.";
            }else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
        
    }else {
        return "Not leap year.";
    }
    
}


isLeap (prompt("Enter Year here"))

*/

/* ARRAY BASIC THING


var guestList = ["Angela", "Champ","Random", "MongoN", "Palaza"]
console.log(guestList.includes("Champ"));
console.log(guestList.length)
console.log(guestList[0])

*/


/* ARRAY Guest inviting // not inviting as per value availability

var guestList = ["Angela", "Champ","Random", "MongoN", "Palaza"]
var guestName = guestList.includes(prompt("Enter your name here"))
if (guestName===true) {
    console.log("Please come in");
}else  {
    console.log("Get Lost");
}


*/



/*