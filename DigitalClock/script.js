function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the time immediately on page load
updateClock();
