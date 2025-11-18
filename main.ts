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
    backPack = [
    miniMenu.createMenuItem("huevo", img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 c c 1 1 1 1 1 1 1 
        1 1 1 1 1 d c d d c 1 1 1 1 1 1 
        1 1 1 1 c c d d d d c b 1 1 1 1 
        1 1 1 c d d d 1 d d d b c 1 1 1 
        1 1 1 c d d 1 d d d d b c 1 1 1 
        1 1 c d d d d d d d d d d c 1 1 
        1 1 c d d d d d d d d d d c 1 1 
        1 1 c d d d d d d d d d b c 1 1 
        1 1 c d d d d d d d d b b c 1 1 
        1 1 1 c d d d d d d d e c 1 1 1 
        1 1 1 1 c c b b d d c b 1 1 1 1 
        1 1 1 1 1 d c c c c 1 1 1 1 1 1 
        1 1 1 1 1 d b b b b 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `),
    miniMenu.createMenuItem("pollo", img`
        1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 f 2 f 1 1 1 1 1 1 1 
        1 1 1 1 f f 2 2 2 f f 1 1 1 1 1 
        1 1 1 1 f 2 1 1 1 1 1 f 1 1 1 1 
        1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 
        1 1 1 1 f 1 f 1 1 5 5 f f 1 1 1 
        1 1 f 1 f 1 1 1 1 2 1 1 f 1 1 1 
        1 f 1 f f b 1 1 1 1 1 1 1 f 1 1 
        1 f 1 1 b b b 1 1 1 1 1 1 f 1 1 
        1 f 1 b b b b b 1 1 1 1 1 b f 1 
        1 f 1 b b b b b 1 1 1 1 1 b f 1 
        1 f 1 1 b b b 1 1 1 1 1 1 b f 1 
        1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 1 
        1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 
        1 1 1 1 f f 5 f f 5 f f 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `),
    miniMenu.createMenuItem("cabra", img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 b 1 c 1 1 1 1 
        1 1 1 1 d d d d 1 b d b 1 d d d 
        1 1 1 1 1 b 1 1 d 1 f d d f d 1 
        1 1 1 1 1 1 d d d d d d 1 b d d 
        1 1 1 1 1 1 d d d b d d d 1 b b 
        1 1 1 1 1 1 d d d 1 d d d b b b 
        d d 1 1 1 1 1 1 1 1 1 b 1 1 b 1 
        d d 1 1 1 1 1 1 d 1 1 b 1 1 b 1 
        d d 1 1 1 b d d d 1 b b 1 1 b 1 
        b d d 1 1 b d d d 1 b b 1 1 1 1 
        1 d d b 1 b d d d 1 b b 1 1 1 1 
        1 b b b 1 b b b b 1 b b 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `),
    miniMenu.createMenuItem("Caballo", img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 b 1 b 1 1 1 1 1 1 
        1 1 1 1 1 1 b e d e 1 1 1 1 1 1 
        1 1 1 1 1 e b e e e e 1 1 1 1 1 
        1 1 1 1 b e b e e e e e 1 1 1 1 
        1 1 1 1 e c b b b b d 1 1 1 1 1 
        1 1 1 e e e b b c b b d 1 1 1 1 
        1 1 1 e e b b b c b b b d 1 1 1 
        1 1 e e b b b 4 4 b b b d d 1 1 
        1 1 e e b e b b b b b d d c d 1 
        1 1 e e e b e b b b b d d d d 1 
        1 1 e e e b b e e 1 1 b d d d 1 
        1 1 e e b b b b b 1 1 1 b b 1 1 
        1 1 e c b b b b b e 1 1 1 1 1 1 
        1 1 e e b b 4 4 b e 1 1 1 1 1 1 
        1 1 c b b b 4 4 b b e 1 1 1 1 1 
        `)
    ]
    myMenu = miniMenu.createMenuFromArray(backPack)
    myMenu.setTitle("Inventario")
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
let myMenu: miniMenu.MenuSprite = null
let backPack: miniMenu.MenuItem[] = []
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
