let login=prompt('What is youe name?','');

if (login=='admin') {
    let passwordAdmin=prompt('What is your password','')
    if (passwordAdmin== 'I`m boss') {
        alert('Hello');
    } else if (passwordAdmin== '' || passwordAdmin== null) {
        alert('Canceled')
    } else {
        alert('Wrong password')
    }
}   else if (login== '' || login== null) {
    alert('Canceled')
    }
    else {
    alert('I dont know you');
}