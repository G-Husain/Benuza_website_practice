
function startCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    let timer = setInterval(() => {
        current++;
        element.textContent = current;

        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

startCounter("counter", 0, 78, 2000); // id, start, end, duration(ms)

