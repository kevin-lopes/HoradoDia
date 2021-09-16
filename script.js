function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${data.toLocaleTimeString()} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'img/manhecer.png'
        document.body.style.background = '#4cbff5'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'img/tardecer.png'
        document.body.style.background = '#f5a134'
    } else {
        // Boa noite!
        img.src = 'img/noitecer.png'
        document.body.style.background = '#272727'
    }
}