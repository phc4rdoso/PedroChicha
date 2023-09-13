function requestLogin() {

    name_value = document.getElementById("user")
    password_value = document.getElementById("password")

    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({name: name_value, password: password_value})
    }).then(response => {
        if(response.ok){
            console.log('deu certo')
        } else {
            console.log('deu errado :(')
        }
    })
};