
// blog btn href to blog.html
document.getElementById('blog-btn').addEventListener('click', function(){
    
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