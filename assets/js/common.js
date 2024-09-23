//get balance
function getBalance(id){
    const myBalance = document.getElementById(id).innerText;
    const myBalanceValue = parseFloat(myBalance);
    return myBalanceValue;
}

// get donation amount
function getdonationAmount (id){
    const donationAmount = document.getElementById(id).innerText;
    const totalDonationAmount = parseFloat(donationAmount);
    return totalDonationAmount;
}

//get donation outdoor
function getDonateAmount(id){
    const amount = document.getElementById(id).value;
    const DonateAmount = parseFloat(amount);
    return DonateAmount;
    
}