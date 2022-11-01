/*  (1) variables, variable assignment
    (2) conditional execution (if, else, or switch)
    (3) functions
    (4) arrays, plus one or more of the following: loops, randomness, time/date
    (5) objects, properties, methods and constructor  */
//I learned this from a Udemy course, a simple way to make a dropDown menu
function dropdownMenu (){
    var x = document.getElementById("dropClick");//by creating the variable "x" to represent this action, I can save time and space in the future
    if (x.className == "topnav"){
        x.className += " responsive";//this will change topnav to topnav.responsive in mobile
    } else {
        x.className = "topnav";
    }
}
//Here we assign the variable "userPersonas" as an array which will hold all the personas which represent people using clsss
var userPersonas = new Array();
//Each persona in the array is entered as a new Persona, with a unique variable assignment which includes their 
//first and last name, age, native language, and the language they are interested in learning. 
var persona1 = new Persona("Aziz", "Ansari", 39, "English", "Italian");
var persona2 = new Persona("Brigitte", "Bardot", 87, "French", "English");
var persona3 = new Persona("Camila", "Cabello", 25, "Spanish", "Russian");
var persona4 = new Persona("Desmond", "Dekkar", 65, "English", "Mandarin");
var persona5 = new Persona("Emilio", "Estévez", 37, "English", "Spanish");
var persona6 = new Persona("Franz", "Ferdinand", 51, "German", "Russian");
var persona7 = new Persona("Gilberto", "Gil", 79, "Portuguese", "English");
var persona8 = new Persona("Helen", "Hunt", 58, "English", "German");
var persona9 = new Persona("Ivan", "Illich", 76, "German", "Spanish");
var persona10 = new Persona("Jesse", "Jackson", 80, "English", "Japanese");
var persona11 = new Persona("Keira", "Knightly", 37, "English", "Turkish");
var persona12 = new Persona("Lauren", "Lucernoni", 29, "English", "Italian");
var persona13 = new Persona("Najwa", "Nimri", 50, "Spanish", "French");
var persona14 = new Persona("Olive", "Oyl", 19, "Italian", "Japanese");
var persona15 = new Persona("Pablo", "Picasso", 84, "Spanish", "Portuguese");
var persona16 = new Persona("Qiao", "Qiao", 42, "Mandarin", "English");
var persona17 = new Persona("Rene", "Russo", 68, "English", "French");
var persona18 = new Persona("Sarah", "Silverman", 51, "English", "Italian");
var persona19 = new Persona("Uğur", "Uçar", 35, "Turkish", "English");
var persona20 = new Persona("Vince", "Vaughan", 52, "English", "Japanese");
var persona21 = new Persona("Wilhelm", "Wundt", 88, "German", "English");
var persona22 = new Persona("Xiaoliang", "Xie", 22, "Mandarin", "English");
var persona23 = new Persona("Yoshiko", "Yamaguchi", 94, "Japanese", "English");
var persona24 = new Persona("Zinedine", "Zinane", 49, "French", "Spanish");

//This method pushes each persona into the array 
userPersonas.push(persona1);
userPersonas.push(persona2);
userPersonas.push(persona3);
userPersonas.push(persona4);
userPersonas.push(persona5);
userPersonas.push(persona6);
userPersonas.push(persona7);
userPersonas.push(persona8);
userPersonas.push(persona9);
userPersonas.push(persona10);
userPersonas.push(persona11);
userPersonas.push(persona12);
userPersonas.push(persona13);
userPersonas.push(persona14);
userPersonas.push(persona15);
userPersonas.push(persona16);
userPersonas.push(persona17);
userPersonas.push(persona18);
userPersonas.push(persona19);
userPersonas.push(persona20);
userPersonas.push(persona21);
userPersonas.push(persona22);
userPersonas.push(persona23);
userPersonas.push(persona24);


//This is a constructor function which creates each persona as an object and defines their properties
function Persona(FName, LName, Age, L1, L2) {
    this.fname = FName;
    this.lname = LName;
    this.age = Age;
    this.l1 = L1;
    this.l2 = L2;
}

//This is a function which processes each new user that filles out the form, taking their inputs and making them into an object with those properties
function ProcessNewUser() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var l1 = document.getElementById("myL1").value;
    var l2 = document.getElementById("myL2").value;

/* console.log("first name: " + fname);
    console.log("last name: " + lname);
    console.log("age: " + age);
    console.log("l1: " + l1);
    console.log("l2: " + l2); */

//This returns the values for the new user to the HTML file so they can see that their info has been recorded correctly
    var returnValue = "Your info has been stored as:";
    returnValue += "<br><br>";
    returnValue += "First Name: " + fname;
    returnValue += "<br>";
    returnValue += "Last Name: " + lname;
    returnValue += "<br>";
    returnValue += "Age: " + age;
    returnValue += "<br>";
    returnValue += "Native Language: " + l1;
    returnValue += "<br>";
    returnValue += "Interested in learning: " + l2;
    returnValue += "<br><br>";

//This function returns a random other user from the array of personas. 
    var choosePerson = Math.floor(Math.random() * (userPersonas.length - 1));

//In the future, I would like to work on a function that matches the users based on (1)shared L2, (2)Having the new user's L2 as their L1, 
//and (3) an age range of ten years. I think the "random match" could be a fun alternative feature, though.
    var person = userPersonas[choosePerson];

    returnValue += "Your random match is: ";
    returnValue += "<br><br>";
    returnValue += "First Name: " + person.fname; 
    returnValue += "<br>";
    returnValue += "Last Name: " + person.lname;
    returnValue += "<br>";
    returnValue += "Age: " + person.age;
    returnValue += "<br>";
    returnValue += "Their native language is: " + person.l1;
    returnValue += "<br>";
    returnValue += "They are interested in learning: " + person.l2;
    returnValue += "</h1><br><br>";

    document.getElementById("output").innerHTML = returnValue;

}

