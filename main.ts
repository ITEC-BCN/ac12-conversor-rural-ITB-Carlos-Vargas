controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    woodCutter,
    assets.animation`talar`,
    100,
    false
    )
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
scene.setBackgroundImage(assets.image`bosc`)
let tree = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
woodCutter = sprites.create(assets.image`myImage`, SpriteKind.Player)
tree.setPosition(46, 94)
woodCutter.setPosition(18, 97)
controller.moveSprite(woodCutter)
