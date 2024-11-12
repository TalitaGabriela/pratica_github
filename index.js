function exibirMensagem() {
    const userName = document.getElementById('user-name').value;

    if (userName === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.innerHTML = `Bem-vindo, ${userName}!`;

    const imagens = ["img/img1.png", "img/img2.png", "img/img3.png"];
    const randomImage = imagens[Math.floor(Math.random() * imagens.length)];

    const stitchImageDiv = document.getElementById('stitch-image');
    stitchImageDiv.innerHTML = `<img src="${randomImage}" alt="Stitch" />`;

    document.getElementById('user-name').value = '';
}
