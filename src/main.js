import 'pixi'
import 'p2'
import Phaser from 'phaser'
import LoaderState from './states/LoaderState'
import MainState from './states/MainState'
import config from './config'

class Game extends Phaser.Game {

  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Loader', LoaderState, false)
    this.state.add('Main', MainState, false)

    this.state.start('Loader')
  }
}

window.game = new Game()