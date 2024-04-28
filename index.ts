#! /usr/bin/env node
import inquirer from "inquirer";
let myBalnace =10000;
let myPin =2345;
let pinAnswer =await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your Pin Code",
            type:"number",
        }
    ]
);
if (pinAnswer.pin === myPin){
    console.log("correct password");
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"select option",
                type:"list",
                choices:["withdraw","check balance","transfer amount",]
            }
        ]
    );
    if (operationAns.operation==="withdraw"){
        let amountAns= await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"entre your amount",
                    type:"number",
                }
            ]
        );
        myBalnace -= amountAns.amount;

        console.log("your remaining balance is" +myBalnace) 
    } 
    
    else if(operationAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalnace}`) //Template literal
    }

} 
else {
    console.log("incorrect pin code");
}