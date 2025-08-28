// Responsive history section
const historySection = document.getElementById('history-section');
const historyBtn = document.getElementById('history-btn');
const cardContainer = document.getElementById('card-container');
const homeBtn = document.getElementById('home-btn');
historyBtn.addEventListener('click', function() {
    cardContainer.classList.add('hidden');
    historySection.classList.remove('hidden');
    historyBtn.classList.add('dock-active');
    homeBtn.classList.remove('dock-active');
});
homeBtn.addEventListener('click', function() {
    cardContainer.classList.remove('hidden');
    historySection.classList.add('hidden');
    historyBtn.classList.remove('dock-active');
    homeBtn.classList.add('dock-active');
});





// clear history functionality
const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function() {
    const historyCalls = document.getElementById("history-calls");
    historyCalls.innerHTML = '';
});