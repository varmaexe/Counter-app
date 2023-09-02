const countValue = document.getElementById('counter');

const increment = () => {
    let value = parseInt(countValue.innerText);
    // update the value 
    value = value + 1
    countValue.innerText = value;
}

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value
}