function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generatePin').addEventListener('click', function(){
    const pin = getPin();
    const showField = document.getElementById('showPin');
    showField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText ;
    const typedField = document.getElementById('typed-num');
    const prevTypedNum = typedField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedField.value = '';
        }
        else if(number === '<'){
            const del = prevTypedNum.split('');
            del.pop();
            const remainingDigits = del.join('');
            typedField.value = remainingDigits;

        }

    }
    else{
        const newTypedNum = prevTypedNum + number;
        typedField.value = newTypedNum;
    }


})
document.getElementById('btn-submit').addEventListener('click', function(){
    const showField = document.getElementById('showPin');
    const currentPin = showField.value;
    const typedField = document.getElementById('typed-num');
    const typedNum = typedField.value;

    const pinSuccess = document.getElementById('success');
    const pinFail = document.getElementById('failed');
    if(typedNum === currentPin){
        
        pinSuccess.style.display = 'block';
        typedField.value = '';
        pinFail.style.display = 'none';
        
    }
    else{
        pinFail.style.display = 'block';
        typedField.value = '';
        pinSuccess.style.display = 'none';
    }
    
})