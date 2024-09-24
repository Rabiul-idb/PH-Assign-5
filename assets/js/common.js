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

//get donation amount by input field
function getDonateAmount(id){
    const amount = document.getElementById(id).value;
    const DonateAmount = parseFloat(amount);
    document.getElementById(id).innerText = '';
    return DonateAmount;
    
}

// history item maker
function historyMaker(id , amount){
    const title = document.getElementById(id).innerText;
    const div = document.createElement('div');
    div.classList.add('history-item', 'p-5', 'border', 'rounded-lg', 'mb-4');
    div.innerHTML = `
        <h3 class="font-medium text-xl mb-3">${amount} TK ${title}</h3>
        <p class=" text-base">${Date()}</p>
    `
    document.getElementById('history-container').appendChild(div);
}

