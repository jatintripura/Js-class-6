// Javascript function declaration
//Example -1

function myBook(price){
    return 700-price;
}
const book_1= myBook(500);
console.log(book_1);

//Example-2

function total_pen(pen){
    return 5 *pen;
}
const total_price = total_pen(100);
console.log(total_price);

//Example-3

function myProduct(product){
    return 79 * product;
}
const total_product = myProduct(40);
console.log(total_product);

//Example -4

function independent_year(year) {
    return 2022 - year;
}
const year_left = independent_year(1971);
console.log(year_left);

//Example-5

function capital_number (number){
return number - 8;
}
const another_number = capital_number(9);
console.log(another_number);

//funtion expression
//Example-1
const myBook_1 = function(price){
    return 500 - price;
}
const book_2 = myBook_1(400);
console.log(book_2);

//Example - 2
const a_value = function(value){
return 900- value;
}
const b_value = a_value(700);
console.log(b_value);

//Example-3

// Arrow function 
//Example-1
 const fixed_price = price => 50 - price;
 const another_price = fixed_price(40);
 console.log(another_price);

 //Example-2

 const calculate_Age = Age =>{
    return 2022-Age;
 }
 const my_Age = calculate_Age(2001);
 console.log(my_Age);

 const your_Age = calculate_Age(1999);
 console.log(your_Age);

 //Example-3

 const age_left = age =>{
    const ageLeft = 2022 - age;
    return 35 -ageLeft;
 }
 const govt_job = age_left(2001);
 console.log(govt_job);

 

 //Array

 //Example-1


 const students=[ "Alina","Riyan","Lioni"];
 console.log(students);
 console.log(students[0]);
 console.log(students[1]);
 console.log(students[2]);

 //Example - 2

 const bookName=new Array("Gitangoli","Math","Physics");
 console.log(bookName[0]);
 console.log(bookName[1]);
 console.log(bookName[2]);

 const studentList=[ "Alina","Riyan","Lioni"];
 console.log(studentList);
 studentList[0]="Lioni";
 console.log(studentList);

 //Determine Array length

 console.log(studentList.length);

 //Get last item array

 console.log(studentList[studentList.length-1]);

 const user = ["Jatin" , "Tripur" ,2001,2022-2001,"Web","Devloper"];
 console.log(user);
 console.log(user[1]);

//Array method

const users=["user_1","user_2","user_3"];
console.log(users);

//Add item

users.push("user_4");
console.log(users);

// Unshift 

users.unshift("Frist_user");
console.log(users);

//Delete last item

users.pop();
console.log(users);

//Remove frist item

users.shift();
console.log(users);


console.log(users);
const delete_item= users.pop();
console.log(delete_item);


console.log(users);
const deleteItem=users.shift();
console.log(deleteItem);

console.log("Thank you");