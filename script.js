// 1. برمجة العداد الزمني
// قم بتعديل التاريخ أدناه لتاريخ بداية علاقتكما
const startDate = new Date('2025-02-14T00:00:00'); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(updateTimer, 1000);
updateTimer();

// 2. برمجة القلوب المتساقطة
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
