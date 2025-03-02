document.getElementById("clear-btn").addEventListener("click", function(){
    const clearHistory = document.getElementById("history-section");
    const allPTag = clearHistory.querySelectorAll("p");
    for(let i = 0; i<allPTag.length; i++){
        allPTag[i].remove();
        
    }
})