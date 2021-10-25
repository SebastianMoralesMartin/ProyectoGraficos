import * as THREE from '../../libs/three.js/r131/three.module.js'
import { TransformControls } from '../../libs/three.js/r131/controls/TransformControls.js'
import { Game, Utils } from './common.js';
import { Shape } from '../../libs/cannon.js/cannon-es.js';

function loadGame() {
    const game = new Game();

    game.init = function () {
        this.debug = false;


        //Circle enemy
        this.circleTest = new THREE.CircleGeometry(0.25, 32);
        this.edges = new THREE.EdgesGeometry(this.circleTest);
        this.line = new THREE.LineSegments(this.edges, new THREE.LineBasicMaterial({ color: 0x63ff63 }));
        this.line.position.x = -2
        this.line.position.y = 2
        this.line.position.z = 0

        this.line2 = new THREE.LineSegments(this.edges, new THREE.LineBasicMaterial({ color: 0x63ff63 }));
        this.line2.position.x = -2
        this.line2.position.y = 2
        this.line2.position.z = 0

        this.line3 = new THREE.LineSegments(this.edges, new THREE.LineBasicMaterial({ color: 0x63ff63 }));
        this.line3.position.x = -2
        this.line3.position.y = 2
        this.line3.position.z = 0

        //circle enemy END

        //Square enemy

        this.square = new THREE.PlaneGeometry(0.5, 0.5);
        this.squareEdges = new THREE.EdgesGeometry(this.square);
        this.squareLine = new THREE.LineSegments(this.squareEdges,
            new THREE.LineBasicMaterial({ color: 0xff00ff }));
        this.squareLine.position.x = -3
        this.squareLine.position.y = 2
        this.squareLine.position.z = 0

        this.squareLine2 = new THREE.LineSegments(this.squareEdges,
            new THREE.LineBasicMaterial({ color: 0xff00ff }));
        this.squareLine2.position.x = -3
        this.squareLine2.position.y = 2
        this.squareLine2.position.z = 0

        this.squareLine3 = new THREE.LineSegments(this.squareEdges,
            new THREE.LineBasicMaterial({ color: 0xff00ff }));
        this.squareLine3.position.x = -3
        this.squareLine3.position.y = 2
        this.squareLine3.position.z = 0

        //Square Enemy END

        //Diamond Enemy
        //position constants and rotation
        const dX = -2
        const dY = 3
        const dZ = 0
        const rtZ = 1

        this.diamondEdges = new THREE.EdgesGeometry(this.square)
        this.diamondLine = new THREE.LineSegments(this.diamondEdges, new THREE.LineBasicMaterial({ color: 0xffc763 }))
        this.diamondLine2 = new THREE.LineSegments(this.diamondEdges, new THREE.LineBasicMaterial({ color: 0xffc763 }))

        this.diamondLine.position.x = dX
        this.diamondLine.position.y = dY
        this.diamondLine.position.z = dZ
        this.diamondLine.rotation.z = rtZ

        this.diamondLine2.position.x = dX
        this.diamondLine2.position.y = dY
        this.diamondLine2.position.z = dZ
        this.diamondLine2.rotation.z = rtZ

        // Diamond enemy END

        //Duodecahedron power

        this.dodecahedron = new THREE.DodecahedronGeometry(.5)
        this.dodeEdges = new THREE.EdgesGeometry(this.dodecahedron)
        this.drawable = new THREE.LineSegments(this.dodecahedron, new THREE.LineBasicMaterial({ color: 0xffffff }))
        this.drawable.position.set(-2, 1, 3.9)

        //Hexagono trolazo

        const A = [Math.cos(0 / (180/Math.PI)), Math.sin(0 / (180/Math.PI))]
        const B = [Math.cos(60 / (180/Math.PI)), Math.sin(60 / (180/Math.PI))]
        const C = [Math.cos(120 / (180/Math.PI)), Math.sin(120 / (180/Math.PI))]
        const D = [Math.cos(180 / (180/Math.PI)), Math.sin(180 / (180/Math.PI))]
        const E = [Math.cos(240 / (180/Math.PI)), Math.sin(240 / (180/Math.PI))]
        const F = [Math.cos(300 / (180/Math.PI)), Math.sin(300 / (180/Math.PI))]


       
        const x = 2
        const y = 2


        this.hexagon = new THREE.Path()
        this.hexagon.currentPoint
        //this.hexagon.moveTo(0,0)
        this.hexagon.moveTo(A[0], A[1])
        this.hexagon.lineTo(B[0], B[1])
        this.hexagon.lineTo(C[0], C[1])
        this.hexagon.lineTo(D[0], D[1])
        this.hexagon.lineTo(E[0], E[1])
        this.hexagon.lineTo(F[0], F[1])
        this.hexagon.lineTo(A[0], A[1])
        this.hexagon.lineTo(C[0], C[1])
        this.hexagon.lineTo(F[0], F[1])
        this.hexagon.lineTo(B[0], B[1])
        this.hexagon.lineTo(E[0], E[1])
        this.hexagon.lineTo(C[0], C[1])
        this.hexagon.lineTo(D[0], D[1])
        this.hexagon.lineTo(B[0], B[1])
        this.hexagon.lineTo(F[0], F[1])
        this.hexagon.lineTo(D[0], D[1])
        this.hexagon.lineTo(A[0], A[1])
        this.hexagon.lineTo(E[0], E[1])
        

        
        this.hexPoints = this.hexagon.getPoints();

        this.hexGeometry = new THREE.BufferGeometry().setFromPoints(this.hexPoints)
        //this.hexEdges = new THREE.EdgesGeometry(this.hexGeometry)
        this.hexDrawable = new THREE.Line(this.hexGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }))
        this.hexDrawable.position.set(-1, 2, 0)

        this.hexDraw2 = new THREE.Line(this.hexGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }))
        this.hexDraw2.position.set(-1, 2, 0)

        this.hexDraw3 = new THREE.Line(this.hexGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }))
        this.hexDraw3.position.set(-1, 2, 0)

        // Hexaogno END
        




        this.knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.5, 0.1), Game.materials.solid);
        this.knot.position.x = -3;
        this.knot.position.z = 1;
        this.knot.position.y = 2;

        this.knotBBox = new THREE.BoxHelper(this.knot, 0x00ff00);
        this.knotBBox.update();
        this.knotBBox.visible = false;

        this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1), Game.materials.solid);
        this.sphere.position.x = 2;
        this.sphere.position.y = 2;

        this.sphereBBox = new THREE.BoxHelper(this.sphere, 0x00ff00);
        this.sphereBBox.update();
        this.sphereBBox.visible = false;

        // the object the user can control to check for collisions
        this.cube = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.5), Game.materials.solid);
        this.cube.position.set(0.5, 1, 2);
        this.cubeShadow = Utils.createShadow(this.cube, Game.materials.shadow);

        this.cubeBBox = new THREE.BoxHelper(this.cube, 0x00ff00);
        this.cubeBBox.update();
        this.cubeBBox.visible = false;

        this.scene.add(this.cube);
        this.scene.add(this.cubeBBox);
        this.scene.add(this.knot);
        this.scene.add(this.knotBBox);
        this.scene.add(this.sphere);
        this.scene.add(this.sphereBBox);

        //Custom ADDs
        this.scene.add(this.line);
        this.scene.add(this.line2)
        this.scene.add(this.line3)
        this.scene.add(this.squareLine)
        this.scene.add(this.squareLine2)
        this.scene.add(this.squareLine3)
        this.scene.add(this.diamondLine)
        this.scene.add(this.diamondLine2)
        this.scene.add(this.drawable)
        this.scene.add(this.hexDrawable)
        this.scene.add(this.hexDraw2)
        this.scene.add(this.hexDraw3)
        //END

        // add fake shadows
        this.scene.add(Utils.createShadow(this.sphere, Game.materials.shadow));
        this.scene.add(Utils.createShadow(this.knot, Game.materials.shadow));
        this.scene.add(this.cubeShadow);

        this.controls = new TransformControls(this.camera, this.renderer.domElement);
        this.controls.space = 'world';
        this.controls.attach(this.cube);
        this.scene.add(this.controls);
    };

    game.update = function (delta) {


        this.knot.rotation.x += (Math.PI / 4) * delta;
        //Custom Add
        this.circle.rotation.x += (Math.PI / 4) * delta;
        this.line.rotation.x += (Math.PI / 2) * delta;
        this.line.rotation.y -= (Math.PI / 2) * delta
        this.line3.rotation.y -= (Math.PI / 2) * delta

        this.squareLine2.rotation.x -= (Math.PI / 3) * delta
        this.squareLine3.rotation.y -= (Math.PI / 3) * delta

        this.diamondLine2.rotation.y -= (Math.PI / 3) * delta

        this.drawable.rotation.x -= (Math.PI / 3) * delta
        this.drawable.rotation.y += (Math.PI / 3) * delta
        this.drawable.rotation.z += (Math.PI / 3) * delta

        this.hexDrawable.rotation.x -= (Math.PI / 3) * delta
        this.hexDrawable.rotation.y += (Math.PI / 3) * delta
        this.hexDrawable.rotation.z += (Math.PI / 3) * delta

        this.hexDraw2.rotation.x += (Math.PI / 76) * delta
        this.hexDraw2.rotation.y -= (Math.PI / 3) * delta
        this.hexDraw2.rotation.z -= (Math.PI / 3) * delta

        //END

        this.knotBBox.update();

        Utils.updateShadow(this.cubeShadow, this.cube);
        this.cubeBBox.update(); // update the bbox to match the cube's position

        let sphereBox = new THREE.Box3().setFromObject(this.sphere);
        let cubeBox = new THREE.Box3().setFromObject(this.cube);
        let knotBox = new THREE.Box3().setFromObject(this.knot);


        this.circle.material = Game.materials.solid
        this.sphere.material = sphereBox.intersectsBox(cubeBox) ? Game.materials.colliding : Game.materials.solid;
        this.knot.material = knotBox.intersectsBox(cubeBox) ? Game.materials.colliding : Game.materials.solid;
    };

    game.toggleDebug = function () {
        this.knotBBox.visible = !this.debug;
        this.sphereBBox.visible = !this.debug;
        this.cubeBBox.visible = !this.debug;
        this.debug = !this.debug;
    };

    game.init();
    game.tick();
}

window.onload = function () {
    loadGame();
};
