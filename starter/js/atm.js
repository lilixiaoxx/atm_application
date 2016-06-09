//Begin with the document ready function
$(document).ready(function(){
  var amountChecking;
  var checkingBalanceTemp;
  var checkingBalance;
  var withdrawChecking;

  var amountSavings;
  var savingsBalanceTemp;
  var savingsBalance;
    //Checking account deposit function
    //On click of the depositChecking button
  $('#depositChecking').click(function(){
    //Get value from the amountChecking input field


    amountChecking = parseInt($('#amountChecking').val());
    checkingBalanceTemp = $("#checkingBalance").text(); // get the "$0", you cannot add or substract it directly
    checkingBalance = parseInt(checkingBalanceTemp.split("").slice(1).join("")); // give you the integer 0

     //Take that value and add it to the existing value in the checkingBalance div
    checkingBalance = amountChecking + checkingBalance;

    $("#checkingBalance").text('$'+checkingBalance);

    // text() get the value from certain element
    // text(something) set the value for certain element

  });

    //Checking account withdrawl funtion
    //On click of the withdrawChecking button
  $('#withdrawChecking').click(function(){
    //Get value from the amountChecking input field
    amountChecking = parseInt($('#amountChecking').val());
    checkingBalanceTemp = $("#checkingBalance").text(); // get the "$0", you cannot add or substract it directly
    checkingBalance = parseInt(checkingBalanceTemp.split("").slice(1).join("")); //

    checkingBalance =  checkingBalance- amountChecking;
    // If that value is greater than the value in the account ignore that action
    // In other words if this would put the account into a negative balance do not allow it
    //Else subtract that value from the current amount in the checking account
   if (checkingBalance>0){
     $('#checkingBalance').text('$'+ checkingBalance);
   }else{
      alert("You don't have enough money");
   }
  });

    //Savings account deposit function
   //On click of the depositSavings button
  $('#depositSavings').click(function(){
    //Get value from the amountSavings input field
    //Take that value and add it to the existing value in the savingsBalance div
    amountSavings = parseInt($('#amountSavings').val());
    savingsBalanceTemp = $("#savingsBalance").text(); // get the "$0", you cannot add or substract it directly
    savingsBalance = parseInt(savingsBalanceTemp.split("").slice(1).join("")); //

    savingsBalance = amountSavings + savingsBalance;
    $("#savingsBalance").text('$'+ savingsBalance);
  });


    //Savings account withdraw funtion
    //On click of the withdrawl button
  $('#withdrawSavings').click(function(){

    amountSavings = parseInt($('#amountSavings').val());
    savingsBalanceTemp = $("#savingsBalance").text(); // get the "$0", you cannot add or substract it directly
    savingsBalance = parseInt(savingsBalanceTemp.split("").slice(1).join(""));

    amountChecking = parseInt($('#amountChecking').val());
    checkingBalanceTemp = $("#checkingBalance").text(); // get the "$0", you cannot add or substract it directly
    checkingBalance = parseInt(checkingBalanceTemp.split("").slice(1).join(""));

    if(amountSavings <= savingsBalance) {
      savingsBalance = savingsBalance - amountSavings;
      $("#savingsBalance").text('$'+savingsBalance);
    } else {
      if((checkingBalance+savingsBalance) >= amountSavings){
        alert("This will take money from your checking balance");
        $("#savingsBalance").text('$0');
        $("#checkingBalance").text('$'+(checkingBalance+savingsBalance-amountSavings));
      }else {
        alert("You do not have enough money!");
      }
  }
  });
});
        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account


// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
