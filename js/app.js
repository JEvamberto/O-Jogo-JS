
var score=0;
var recorde=0;
// Inimigos que o jogador deve evitar
var Enemy = function(x,y) {
    // Variáveis aplicadas a cada instância devem ser declaradas aqui

    // A imagem dos inimigos, this usa uma classe helper que carrega
    // a imagem facilmente
    this.x = x;
    this.y = y;
    this.speed =  10 + Math.random() * 100 +30;
    this.sprite = 'images/inseto.png';
};


// Atualiza a posição de um inimigo
// Parâmetro: dt, um intervalo de tempo entre atualizações
var colide=50;

Enemy.prototype.update = function(dt) {
    // Você deve multiplicar cada movimento por dt
    // assegura que o jogo rode na mesma velocidade em todos computadores.
    
    if (this.x < 500) {
        this.x += (dt) * this.speed;
    } else {
        this.x = -190;
        this.speed = 10 + Math.random() * 130 +30;
    }
    
    var colideX=Math.abs(this.x-player.x);
    var colideY=Math.abs(this.y-player.y);
    
    if(colideX<=colide && colideX>0 && colideY<=colide && colideY>0){
       
        if(score>recorde){
            recorde=score;
            document.getElementById("RecordePonto").innerHTML = recorde;
            alert("Parabéns, você quebrou o recorde, continue assim!!! ");

        }else{
            alert("Seja melhor na próxima");
        
        }
       
    
        score=0;
        document.getElementById("pontos").innerHTML = score;
        player.reset();
        
    }

    


}


// Desenha o inimigo na tela
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Agora escreva a class Player
// Ela requer os métodos update(), render() e handleInput().

class Player{

    constructor (){
        this.x=200;
        this.y=430;
        this.sprite= "images/personagem-garoto.png";
    }

    update(){
        if(this.y < 0){
            score++;
     
            document.getElementById("pontos").innerHTML = score;
            this.reset();
        }

    


    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

  

    handleInput(direct){

        if(direct === "up" ){
            this.y -= 50;
        }
        if(direct === "down" && this.y<430){
            this.y +=50;
        }

        if(direct === "left" && this.x>0){
            this.x-=50;
            
        }

        if(direct === "right" && this.x<400){
            this.x+=50;
        }


    }
    
    
    reset(){
        this.x=200;
        this.y=430;
    }

}

// Agora instancie seus objetos.
// Coloque todos os objetos inimigos em um array chamado allEnemies
// Coloque o jogador em uma variável chamada player
var allEnemies = [
    new Enemy(-252, 60),
    new Enemy(-190, 220),
    new Enemy(-200, 150),
    new Enemy(-290, 159),
    new Enemy(-290, 220),
];


var player= new Player();

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
