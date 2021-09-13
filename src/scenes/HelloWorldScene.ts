import Phaser from 'phaser'

const LOGO_KEY = 'logo';

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image(LOGO_KEY, 'assets/sprites/phaser3-logo.png')

    }

    create()
    {
        const logo = this.physics.add.image(400, 100, LOGO_KEY)

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)
    }
}
