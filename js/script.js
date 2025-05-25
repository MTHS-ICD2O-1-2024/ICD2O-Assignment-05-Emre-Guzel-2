
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: May 8 2025
// This file contains the JS functions for index.html

"use strict"


//setting the calculateInterest functoin
function calclateIntrest() {
  const money = parseFloat(document.getElementById("initial-money").value)
  const interestRate = parseFloat(document.getElementById("interest-rate").value)
  const numberOfYears = parseInt(document.getElementById("number-of-years").value)
  let totalAmount = money
  let breakdown = ""

  // Setting the loop 
  for (let year = 1; year <= numberOfYears; year++) {
    const previousAmount = totalAmount
    totalAmount = totalAmount * (1 + interestRate / 100)

    breakdown += "Year " + year + ": $" + previousAmount.toFixed(2) +
    " × " + (1 + interestRate / 100).toFixed(2) +
    " = $" + totalAmount.toFixed(2) + "<br>"
  }
  // shwowing the result 
  document.getElementById("result").innerHTML =
  "<br>" +
  "Initial Money: $" + money.toFixed(2) +
  "<br>Interest Rate: " + interestRate.toFixed(2) + "%" +
  "<br>Years: " + numberOfYears + "<br><br>" +
  breakdown +
  "<br><b>Final Amount: $" + totalAmount.toFixed(2) + "</b>"
}
