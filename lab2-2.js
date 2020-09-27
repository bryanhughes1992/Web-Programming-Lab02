//#### LAB 2.2 OPERATORS WITH VARIABLES AT A RESTAURANT ####

//alert(firstGreeting);

//ALL VARIABLES ARE DECLARED HERE
var item1 = 9.99; //CHICKEN PASTA
var item2 = 14.50; //STEAK
var item3 = 7.85; //GARLIC BREAD
var subTotal; //TOTAL OF BILL BEFORE DISCOUNT AND TAX
var discountValue = 5; //FIVE BUCKS OFF COUPON
var subAfterDiscount;  //TOTAL AFTER COUPON AND BEFORE TAX
var taxHST = 1.13;  //HST
var totalAfterTax; //TOTAL AFTER TAX
var numOfDiners = 2;//NUMBER OF PEOPLE AT A TABLE
var eachPays; //TOTAL FOR EACH CUSTOMER (TWO CUSTOMERS)
var billMessage = "You each owe $";  //OUTPUT MESSAGE FOR ALERT BOX

//VVVVVVV   LOGIC PROGRAMMING GOES AFTER VARIABLE DECLARATIONS   VVVVVVVVV

//=============== START YOUR LAB WORK DOWN HERE, NOT UP WHERE THE VARIABLES ARE DECLARED.

subTotal = item1 + item2 + item3 - discountValue;
totalAfterTax = subTotal * taxHST;
eachPays = totalAfterTax / 2;

var eachOwe = billMessage + eachPays.toFixed(2);


alert(eachOwe);