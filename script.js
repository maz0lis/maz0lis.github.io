function askName(){
    let name = prompt('Назови свое имя')
    alert(`Здравствуй, ${name}!`)
}

function chatting(){
    let userName = document.getElementById('userName').value;
    let message = document.getElementById('message').value;

    let str = userName + ': ' + message;

    if (userName == '') {
        document.getElementById('error').innerText = 'Ошибка. Введите имя';
        return
    }
    document.getElementById('result').innerText = str;
    document.getElementById('userName').value = '';
    document.getElementById('message').value = '';
    document.getElementById('error').innerText = '';
}

function calculator(){
    let numOne = +document.getElementById('numOne').value
    let sign = document.getElementById('sign').value
    let numTwo = +document.getElementById('numTwo').value
    let result
    
    switch(sign){
        case '+':
            result = numOne + numTwo;
            break
        case '-':
            result = numOne - numTwo;
            break
        case '*':
            result = numOne * numTwo;
            break     
        case '/':
            if (numTwo == 0){
                document.getElementById("resultNum").value = "Ошибка. Деление на 0";
                return
            }else{
                result = numOne / numTwo;
            }
            break
        case '^':
            result = numOne ** numTwo;
            break
        default:
            result='Ошибка. Неверный знак';
            break
    }

    document.getElementById("resultNum").value = result;
}