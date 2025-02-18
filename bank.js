/*
    Date Modified: 18/02/2025
    Dev Title/Name: Shaun S
    Bank app js first script. This version aims to allow a user to withdraw some money
    Version: SummerzIndBank.1.0
*/

//A database would make a lot easier and improve this system.
//VAR account balance
let accBal = 1000.00;
let hardPin = "1234";

//DISPLAY Welcome msg and enter pin
console.log("Welcome! Please enter your pin to continue");
//VAR pin equals user input
let userPin = prompt("Enter your 4-digit PIN:");

//IF CHECK pin is valid
if(userPin === hardPin){
    //DISPLAY successful login msg, account balance, Menu Options
    console.log("Access granted");
    console.log("Select an option: \n1.Withdraw \n2.Deposit \n3.Check Balance \n4.Cancel");

    //VAR user choice equals prompt  
    let userChoice = prompt("Enter choice");

    //IF user choice is withdraw
    if(userChoice === "1") {
    //VAR withdraw amount prompt user
    let withdrawAmmount = parseFloat(prompt("Enter withdraw ammount"));
    //IF withdraw amount >= 0 AND withdraw amount <= account balance
        if(withdrawAmmount > 0 && withdrawAmmount <= accBal){
            //UPDATE account balance
            accBal -= withdrawAmmount; //accBal = accBal - withdrawAmmount;
            //DISPLAY account balance
            console.log(`Withdrawal successful. Current blance: $${accBal}`);
            //PRINT receipt and dispense money
            //Not hooked into hardware for this version
        }
        //ELSE
        else{
            //DISPLAY insufficient Funds msg
            console.log("Insufficient Funds!");
        }
    //LOOP retry OR EXIT cancel transaction 
        }
        else{
            console.log("No other options");
        }
}
//ELSE
else {
    //Re-enter pin loop menu
    console.log("Invalid PIN. Card Ejected. Goodbye!"); //One run, add looping and additional menu logic  
}
//END