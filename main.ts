namespace SpriteKind {
    export const dropeador = SpriteKind.create()
    export const sumar = SpriteKind.create()
    export const restar = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inGame) {
        open_main_menu()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dropeador, function (sprite, otherSprite) {
    cerca = true
    if (golpes == vida_arbol) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(3)
        golpes = 0
        cerca = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inGame) {
        animation.runImageAnimation(
        woodCutter,
        assets.animation`talar`,
        100,
        false
        )
        if (cerca) {
            golpes += 1
        }
    } else if (inMenu) {
        oprimido = true
    }
})
// Presiona izquierda
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    walk_lef()
})
function open_second_menu () {
    oprimido = false
    inMenu = true
    cantidad = 0
    valorSprite = textsprite.create("0")
    valorSprite.setMaxFontHeight(15)
    valorSprite.setPosition(80, 29)
    sprites.destroy(woodCutter)
    sprites.destroyAllSpritesOfKind(SpriteKind.dropeador)
    scene.setBackgroundImage(assets.image`fondo_menu`)
    sumar_botton = sprites.create(assets.image`sumar`, SpriteKind.sumar)
    sumar_botton.setPosition(121, 59)
    restar_botton = sprites.create(assets.image`restar`, SpriteKind.restar)
    restar_botton.setPosition(32, 59)
    confirm_botton = sprites.create(assets.image`ok`, SpriteKind.Text)
    confirm_botton.setPosition(76, 94)
    cursor = sprites.create(assets.image`cursor`, SpriteKind.Player)
    controller.moveSprite(cursor, 100, 100)
}
// Suelta derecha
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    stop_walk_anim()
})
// Suelta izquierda
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    stop_walk_anim()
})
sprites.onOverlap(SpriteKind.sumar, SpriteKind.Player, function (sprite2, otherSprite2) {
    if (otherSprite2 == cursor && oprimido) {
        cantidad += 1
        valorSprite.setText("" + cantidad)
        oprimido = false
    }
})
function walk_lef () {
    animation.runImageAnimation(
    woodCutter,
    assets.animation`left_walk`,
    200,
    true
    )
}
function spaws_trees () {
    tree = sprites.create(assets.image`myImage0`, SpriteKind.dropeador)
    tree.setPosition(117, 94)
    tree = sprites.create(assets.image`myImage0`, SpriteKind.dropeador)
    tree.setPosition(46, 94)
    tree = sprites.create(assets.image`myImage0`, SpriteKind.dropeador)
    tree.setPosition(80, 94)
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
function spaw_player () {
    woodCutter = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(woodCutter, 100, 100)
    woodCutter.setPosition(18, 97)
}
sprites.onOverlap(SpriteKind.restar, SpriteKind.Player, function (sprite3, otherSprite3) {
    if (otherSprite3 == cursor && oprimido) {
        cantidad += 0 - 1
        valorSprite.setText("" + cantidad)
        oprimido = false
    }
})
function open_main_menu () {
    inGame = false
    backPack = [
    miniMenu.createMenuItem("huevo " + ("" + huevos), assets.image`huevo`),
    miniMenu.createMenuItem("pollo " + ("" + pollos), assets.image`pollo`),
    miniMenu.createMenuItem("cabra " + ("" + cabras), assets.image`cabra`),
    miniMenu.createMenuItem("caballo " + ("" + caballos), assets.image`caballo`)
    ]
    myMenu = miniMenu.createMenuFromArray(backPack)
    myMenu.setTitle("Inventario")
    myMenu.setFrame(assets.image`fondo_inventario`)
    myMenu.setPosition(80, 60)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 8)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        selectedItem = selection
        myMenu.close()
        open_second_menu()
    })
    myMenu.onButtonPressed(controller.B, function (selection2, selectedIndex2) {
        myMenu.close()
        inGame = true
    })
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
let selectedItem = ""
let myMenu: miniMenu.MenuSprite = null
let backPack: miniMenu.MenuItem[] = []
let tree: Sprite = null
let cursor: Sprite = null
let confirm_botton: Sprite = null
let restar_botton: Sprite = null
let sumar_botton: Sprite = null
let valorSprite: TextSprite = null
let cantidad = 0
let oprimido = false
let woodCutter: Sprite = null
let inMenu = false
let vida_arbol = 0
let caballos = 0
let pollos = 0
let cabras = 0
let huevos = 0
let golpes = 0
let cerca = false
let inGame = false
info.setScore(0)
inGame = true
cerca = false
golpes = 0
huevos = 0
cabras = 0
pollos = 0
caballos = 0
vida_arbol = 3
spaw_player()
spaws_trees()
forever(function () {
    if (inGame) {
        scene.setBackgroundImage(assets.image`bosc`)
    } else {
        controller.moveSprite(woodCutter, 0, 0)
    }
})
