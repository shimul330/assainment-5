
const colours = ["red", "blue", "yellow", "purple"];


document.getElementById("body-change-colour").addEventListener("click", function(){
    const randomColour = Math.floor(Math.random() * colours.length);
    
    document.body.style.backgroundColor = colours[randomColour];
    document.body.style.transition = "0.3s";
    

})