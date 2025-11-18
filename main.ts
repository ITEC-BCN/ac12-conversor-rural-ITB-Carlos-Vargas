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
    myMenu.setFrame(img`
        8888.....88....888....88.88....888....888...8888
        867788..8768..86768..8678768..86768..8678.887768
        8767768.8777886767688777877788676768877788677678
        877677686767787767787767676778776778776786776778
        .8778766677678776778767767767877677876778678778.
        .8677866867668676768667686766867676866766687768.
        ..86668688676886868867688867688686886768686668..
        .888666888888888888888888888888888888888866688..
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87768866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87766866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        ..886668888888888888888888888888888888888666888.
        ..86668686768868688676888676886868867688686668..
        .8677866676686767686676867668676768667686687768.
        .8778768776787767787677677678776778767766678778.
        877677687677877677877676767787767787767686776778
        8767768877788676768877787778867676887778.8677678
        867788.8768..86768..8678768..86768..8678..887768
        8888...888....888....88.88....888....88.....8888
        `)
    myMenu.setPosition(80, 60)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 8)
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
