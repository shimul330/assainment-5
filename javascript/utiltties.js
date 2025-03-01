function getShearedInnerText(id){
    const increaseValue = document.getElementById(id).innerText;
    const convertedIncreaseValue = parseInt(increaseValue);
    return convertedIncreaseValue;
}


function setInnerTextValue(id, value){
    document.getElementById(id).innerText = value;
}

function buttonSelctector(id){
    document.getElementById(id);
}