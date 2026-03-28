async function initCounter() {
    const counterElement = document.getElementById('session-counter');
    if (!counterElement) return;

    // Switched to dwyl.com because seeyoufarm is currently down/unstable
    // This uses your specific repo: jamesorion6869/jor-fusion-web
    const url = `https://hits.dwyl.com/jamesorion6869/jor-fusion-web.svg?style=flat-square&show=session&label=SESSIONS&color=00d4ff&labelColor=141820`;
    
    const img = new Image();
    img.src = url;
    img.style.verticalAlign = "middle";
    img.style.height = "20px";
    
    // If the image loads successfully, put it in the header
    img.onload = function() {
        counterElement.innerHTML = ''; 
        counterElement.appendChild(img);
    };

    // If the service is down or you are testing locally, show OFFLINE
    img.onerror = function() {
        counterElement.style.color = "var(--text-dim)";
        counterElement.style.fontSize = "9px";
        counterElement.innerText = "OFFLINE";
    };
}

document.addEventListener('DOMContentLoaded', initCounter);
