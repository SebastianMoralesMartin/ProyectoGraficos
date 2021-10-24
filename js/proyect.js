import * as THREE from '../../libs/three.js/r131/three.module.js'
import * as CANNON from '../../libs/cannon.js/cannon-es.js'  //for future collision computing

import {Game, Utils} from "./common.js"

function loadGame(){
    const game = new Game()

    game.init = function(){

        this.circle = new THREE.Mesh(new THREE.CircleGeometry(0.5), Game.materials.solid)
        this.circle.position.set(-2,2,0)

        this.scene.add(this.circle)
    }

    game.update = function(delta){

        this.timestamp += delta

        this.circle.material = Game.materials.solid
    }

    game.init()
    game.tick()


}

window.onload = function(){
    leadGame()
}