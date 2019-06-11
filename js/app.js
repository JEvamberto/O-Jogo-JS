// Inimigos que o jogador deve evitar
var Enemy = function() {
    // Variáveis aplicadas a cada instância devem ser declaradas aqui

    // A imagem dos inimigos, this usa uma classe helper que carrega
    // a imagem facilmente
    this.sprite = 'images/inseto.png';
};

// Atualiza a posição de um inimigo
// Parâmetro: dt, um intervalo de tempo entre atualizações
Enemy.prototype.update = function(dt) {
    // Você deve multiplicar cada movimento por dt
    // assegura que o jogo rode na mesma velocidade em todos computadores.
};

// Desenha o inimigo na tela
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Agora escreva a class Player
// Ela requer os métodos update(), render() e handleInput().


// Agora instancie seus objetos.
// Coloque todos os objetos inimigos em um array chamado allEnemies
// Coloque o jogador em uma variável chamada player



// Esta função escuta pela tecla pressionada e envia a tecla para o método
// Player.handleInput(). Você não precisa modificar.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
