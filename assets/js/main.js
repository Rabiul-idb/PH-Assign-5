
//blog btn href to blog.html
document.getElementById('blog-btn').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'blog.html';
})


// toggle donation and history container

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

donationBtn.addEventListener('click', function(){
    document.getElementById('donation-container').style.display = 'block';
    document.getElementById('history-container').classList.add('hidden');
    this.classList.add('bg-btn_color')
    historyBtn.classList.remove('bg-btn_color');
})
historyBtn.addEventListener('click', function(){
    document.getElementById('donation-container').style.display = 'none';
    document.getElementById('history-container').classList.remove('hidden');
    this.classList.add('bg-btn_color')
    donationBtn.classList.remove('bg-btn_color');

})

// Donation Card Functionality =====

// donation for noakhali
document.getElementById('donate-for-nuakhali').addEventListener('click', function(event){
    event.preventDefault();
    
    const myBalanceValue = getBalance('myBalance');
    const totalDonationAmount = getdonationAmount('donation-nuakhali');
    const donateAmount = getDonateAmount('donate-amount-noakhali');
    

    if(donateAmount < 0 || typeof donateAmount !== 'number' || isNaN(donateAmount)){
        alert('Invalid Input. Make sure that, your donation amount will be a positive number');
        return ;
    }

    if(donateAmount > myBalanceValue){
        alert("Sorry! you don't have enough balance");
        return;
    }

    const totalAmount = totalDonationAmount + donateAmount;
    document.getElementById('donation-nuakhali').innerText = totalAmount;

    const remainingBalance = myBalanceValue - donateAmount;
    document.getElementById('myBalance').innerText = remainingBalance;

    //show in history container
    historyMaker('title-noakhali' , donateAmount);

    // open modal
    document.getElementById('modal-donate-amount').innerText = donateAmount;
     my_modal_1.showModal()
    
   
})

// donation for feni
document.getElementById('donate-for-feni').addEventListener('click', function(event){
    event.preventDefault();

    
    const myBalanceValue = getBalance('myBalance');
    const totalDonationAmount = getdonationAmount('donation-feni');
    const donateAmount = getDonateAmount('donate-amount-feni');

    if(donateAmount < 0 || typeof donateAmount !== 'number' || isNaN(donateAmount)){
        alert('Invalid Input. Make sure that, your donation amount will be a positive number');
        return ;
    }
    if(donateAmount > myBalanceValue){
        alert("Sorry! you don't have enough balance");
        return;
    }


    const totalAmount = totalDonationAmount + donateAmount;
    document.getElementById('donation-feni').innerText = totalAmount;

    const remainingBalance = myBalanceValue - donateAmount;
    document.getElementById('myBalance').innerText = remainingBalance;

    //show in history container
    historyMaker('title-feni' , donateAmount);

    // open modal
    document.getElementById('modal-donate-amount').innerText = donateAmount;
     my_modal_1.showModal()
   
})

// donation for quota protest
document.getElementById('donate-for-quota').addEventListener('click', function(event){
    event.preventDefault();
    
    const myBalanceValue = getBalance('myBalance');
    const totalDonationAmount = getdonationAmount('donation-quota');
    const donateAmount = getDonateAmount('donate-amount-quota');

    if(donateAmount < 0 || typeof donateAmount !== 'number' || isNaN(donateAmount)){
        alert('Invalid Input. Make sure that, your donation amount will be a positive number');
        return ;
    }
    if(donateAmount > myBalanceValue){
        alert("Sorry! you don't have enough balance");
        return;
    }

    const totalAmount = totalDonationAmount + donateAmount;
    document.getElementById('donation-quota').innerText = totalAmount;

    const remainingBalance = myBalanceValue - donateAmount;
    document.getElementById('myBalance').innerText = remainingBalance;

     //show in history container
     historyMaker('title-quota' , donateAmount);

     // open modal
    document.getElementById('modal-donate-amount').innerText = donateAmount;
    my_modal_1.showModal();
   
})