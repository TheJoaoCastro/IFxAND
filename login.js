function login() {
    var idlogin = document.getElementById('idlogin').value;
    var senhalogin = document.getElementById('senhalogin').value;

    if (idlogin == '123' && senhalogin == '123') {
        location.href = 'menu.html';
    } else {
        alert('Usuário ou senha incorretos!')
    }
}
