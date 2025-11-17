namespace SpriteKind {
    export const dropeador = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    open_main_menu()
})
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
    backPack = miniMenu.createMenuFromArray([miniMenu.createMenuItem("huevo", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . b b 1 1 1 1 b b . . . . 
        . . . . b 1 1 1 3 3 1 b . . . . 
        . . . b 1 1 1 1 3 3 3 1 b . . . 
        . . . b 1 1 3 1 1 3 3 1 b . . . 
        . . b d 1 1 1 1 1 1 1 1 d b . . 
        . . b d 3 3 1 1 1 1 1 1 d b . . 
        . . b b 3 3 1 1 1 1 3 3 d b . . 
        . . c b b d 1 1 1 3 3 b d c . . 
        . . c d d d d d d b b b d c . . 
        . . c b d d b b d b b d b c . . 
        . . . c d d b b d d d d c . . . 
        . . . . c b d d d d b c . . . . 
        . . . . . c c c c c c . . . . . 
        `), miniMenu.createMenuItem("pollo", img`
        ..........bbbbbb................
        .......bbb444444bb..............
        .....2244444ddd444b.............
        ....244444444dddd44e............
        ...244444444444ddd4be...........
        ..244444444444444d44be..........
        .2b444444444444444d4be..........
        .2b44444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bb4b4444444444444444bbe........
        2bb4444444444444444444be........
        2bb44444444444444444444e........
        2bbb444bbb4444444444444e........
        22bbb444bb4bb444444444be........
        .2bbbbb44bbbb44444444bbe........
        .22bbbbbbbb44bbb444444bbe.......
        ..eeebbbbbbb44bbb444444be.......
        ...eeeeebbbbbbbb44b4444be.......
        .....eeeeee222bb44bbb4bbe.......
        .......eeeee222bb44bbbbee.......
        ............e222bbbbbbbec.......
        ..............ee2bbbbeebdb......
        .................eeeeecdddb.....
        .......................cd11bbbb.
        ........................cd111dbb
        .........................b11111c
        .........................c11dd1c
        .........................cd1dbc.
        .........................cb11c..
        ..........................ccc...
        ................................
        `)])
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
let backPack: miniMenu.MenuSprite = null
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
