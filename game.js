var config = {
    type: Phaser.AUTO,
    // Ширина вікна гри
    width: 800,
    // Висота вікна гри
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // Гравітація у напрямку y
            gravity: { y: 300 },
            debug: false
        }
    },

    scene: {
        // Функція завантаження ресурсів
        preload: preload,
        // Функція створення об'єктів гри
        create: create,
        // Функція оновлення стану гри
        update: update
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('fone', 'assets/fone.jpg');
}

function create ()
{
    // Додавання зображення неба
    this.add.image(0, 0, 'fone').setScale(2);
}

function update()
{

}
