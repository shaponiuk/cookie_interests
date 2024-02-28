const dateElement = document.getElementById("date");        
        
function updateDate() {        
    const date = new Date();        
    const day = date.getDate();        
    const month = date.getMonth() + 1;        
    const year = date.getFullYear();        
    const hours = date.getHours();        
    const minutes = date.getMinutes();        
    const seconds = date.getSeconds();        
    const milliseconds = date.getMilliseconds();        
    dateElement.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;        
}        
        
updateDate();