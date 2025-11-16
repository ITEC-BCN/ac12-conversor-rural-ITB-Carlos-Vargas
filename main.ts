//  Presiona izquierda
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    walk_lef()
})
//  Suelta derecha
controller.right.onEvent(ControllerButtonEvent.Released, function on_right_released() {
    stop_walk_anim()
})
//  Suelta izquierda
controller.left.onEvent(ControllerButtonEvent.Released, function on_left_released() {
    stop_walk_anim()
})
function walk_lef() {
    animation.runImageAnimation(woodCutter, assets.animation`
            left_walk
            `, 200, true)
}

//  --- Eventos del mando ---
//  Presiona derecha
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    walk_right()
})
function stop_walk_anim() {
    animation.stopAnimation(animation.AnimationTypes.All, woodCutter)
    woodCutter.setImage(assets.image`
        myImage
        `)
}

//  --- Funciones para animación ---
function walk_right() {
    animation.runImageAnimation(woodCutter, assets.animation`
            rigth_walk
            `, 200, true)
}

let woodCutter : Sprite = null
scene.setBackgroundImage(assets.image`
    bosc
    `)
woodCutter = sprites.create(assets.image`
    myImage
    `, SpriteKind.Player)
controller.moveSprite(woodCutter)
