function getlogin(){
    let login = localStorage.getItem('login');

    if(login == null){
        login = [];
    }else{
        login = JSON.parse(login);
    }
    return login;
}

function setlogin(login){
    localStorage.setItem('login', JSON.stringify(login));
}

