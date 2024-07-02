document.addEventListener('DOMContentLoaded', function() { 
    function updateTime() { 
        const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]'); 
        const currentDay = document.querySelector('[data-testid="currentDay"]'); 

        const now = new Date(); 
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
        const dayName = dayNames[now.getUTCDay()]; 

        const utcHours = now.getUTCHours().toString().padStart(2, '0');
        const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
        const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');

        currentTimeUTC.textContent = `Current Time (UTC): ${utcHours}:${utcMinutes}:${utcSeconds}`; 
        currentDay.textContent = `Current Day: ${dayName}`; 
    } 

    updateTime(); 
    setInterval(updateTime, 1000); 
});
