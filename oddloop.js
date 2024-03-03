// Write a program to print the sum of odd numbers up to N.


const input = require("readline-sync")
let n = input.questionInt(" enter the number: ")
let i =1;
sum=0;
while(n>=i){
    if(i%2!=0){
        sum= sum+i
    }
    i++ 
} console.log(sum)