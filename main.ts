namespace SpriteKind {
    export const dropeador = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dropeador, function (sprite, otherSprite) {
    cerca = true
    if (golpes == vida_arbol) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
        golpes = 0
        cerca = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    woodCutter,
    assets.animation`talar`,
    100,
    false
    )
    if (cerca) {
        golpes += 1
    } else {
    	
    }
})
// Presiona izquierda
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    walk_lef()
})
// Suelta derecha
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    stop_walk_anim()
})
// Suelta izquierda
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    stop_walk_anim()
})
function walk_lef () {
    animation.runImageAnimation(
    woodCutter,
    assets.animation`left_walk`,
    200,
    true
    )
}
// --- Eventos del mando ---
// Presiona derecha
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    walk_right()
})
function stop_walk_anim () {
    animation.stopAnimation(animation.AnimationTypes.All, woodCutter)
    woodCutter.setImage(assets.image`myImage`)
}
function open_main_menu () {
	
}
// --- Funciones para animación ---
function walk_right () {
    animation.runImageAnimation(
    woodCutter,
    assets.animation`rigth_walk`,
    200,
    true
    )
}
let woodCutter: Sprite = null
let vida_arbol = 0
let golpes = 0
let cerca = false
info.setScore(0)
cerca = false
golpes = 0
vida_arbol = 3
scene.setBackgroundImage(assets.image`bosc`)
let tree = sprites.create(assets.image`myImage0`, SpriteKind.dropeador)
tree.setPosition(117, 94)
tree = sprites.create(assets.image`myImage0`, SpriteKind.dropeador)
tree.setPosition(46, 94)
tree = sprites.create(assets.image`myImage0`, SpriteKind.dropeador)
tree.setPosition(80, 94)
woodCutter = sprites.create(assets.image`myImage`, SpriteKind.Player)
woodCutter.setPosition(18, 97)
controller.moveSprite(woodCutter)
