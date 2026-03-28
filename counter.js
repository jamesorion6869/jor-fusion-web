async function initCounter() {
    const counterElement = document.getElementById('session-counter');
    if (!counterElement) return;

    // The cacheBuster helps ensure the number updates every time you hit refresh
    const cacheBuster = Math.random();
    const url = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://jamesorion6869.github.io/jor-fusion-web/&count_bg=%2300D4FF&title_bg=%23141820&title=SESSIONS&edge_flat=true&cb=${cacheBuster}`;
    
    const img = new Image();
    img.src = url;
    img.style.verticalAlign = "middle";
    img.style.height = "20px";
    
    // If the image loads successfully, put it in the header
    img.onload = function() {
        counterElement.innerHTML = ''; 
        counterElement.appendChild(img);
    };

    // If it fails (like when testing locally), show "OFFLINE"
    img.onerror = function() {
        counterElement.style.color = "var(--text-dim)";
        counterElement.style.fontSize = "9px";
        counterElement.innerText = "OFFLINE";
    };
}

document.addEventListener('DOMContentLoaded', initCounter);