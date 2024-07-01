document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const options = { timeZone: 'Africa/Lagos', hour12: false };
        const localTime = now.toLocaleTimeString('en-US', options);
        const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });

        document.getElementById('current-time').textContent = localTime;
        document.getElementById('current-day').textContent = dayOfWeek;
    }

    updateTimeAndDay(); // Initial call to set the time and day immediately
    setInterval(updateTimeAndDay, 1000); // Update every second
});
