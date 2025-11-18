@namespace
class SpriteKind:
    dropeador = SpriteKind.create()

def on_b_pressed():
    open_main_menu()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite, otherSprite):
    global cerca, golpes
    cerca = True
    if golpes == vida_arbol:
        sprites.destroy(otherSprite)
        info.change_score_by(1)
        golpes = 0
        cerca = False
sprites.on_overlap(SpriteKind.player, SpriteKind.dropeador, on_on_overlap)

def on_a_pressed():
    global golpes
    animation.run_image_animation(woodCutter,
        assets.animation("""
            talar
            """),
        100,
        False)
    if cerca:
        golpes += 1
    else:
        pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# Presiona izquierda

def on_left_pressed():
    walk_lef()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

# Suelta derecha

def on_right_released():
    stop_walk_anim()
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

# Suelta izquierda

def on_left_released():
    stop_walk_anim()
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def walk_lef():
    animation.run_image_animation(woodCutter,
        assets.animation("""
            left_walk
            """),
        200,
        True)
# --- Eventos del mando ---
# Presiona derecha

def on_right_pressed():
    walk_right()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def stop_walk_anim():
    animation.stop_animation(animation.AnimationTypes.ALL, woodCutter)
    woodCutter.set_image(assets.image("""
        myImage
        """))
def open_main_menu():
    global inGame, backPack, myMenu
    inGame = False
    backPack = [miniMenu.create_menu_item("huevo",
            img("""
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
                """)),
        miniMenu.create_menu_item("pollo",
            img("""
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
                """)),
        miniMenu.create_menu_item("cabra",
            img("""
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
                """)),
        miniMenu.create_menu_item("Caballo",
            img("""
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
                """))]
    myMenu = miniMenu.create_menu_from_array(backPack)
    myMenu.set_title("Inventario")
    myMenu.set_frame(img("""
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
        """))
    myMenu.set_position(80, 60)
    myMenu.set_style_property(miniMenu.StyleKind.SELECTED,
        miniMenu.StyleProperty.BACKGROUND,
        8)
# --- Funciones para animación ---
def walk_right():
    animation.run_image_animation(woodCutter,
        assets.animation("""
            rigth_walk
            """),
        200,
        True)
myMenu: miniMenu.MenuSprite = None
backPack: List[miniMenu.MenuItem] = []
woodCutter: Sprite = None
vida_arbol = 0
golpes = 0
cerca = False
inGame = False
info.set_score(0)
inGame = True
cerca = False
golpes = 0
vida_arbol = 3
scene.set_background_image(assets.image("""
    bosc
    """))
tree = sprites.create(assets.image("""
    myImage0
    """), SpriteKind.dropeador)
tree.set_position(117, 94)
tree = sprites.create(assets.image("""
    myImage0
    """), SpriteKind.dropeador)
tree.set_position(46, 94)
tree = sprites.create(assets.image("""
    myImage0
    """), SpriteKind.dropeador)
tree.set_position(80, 94)
woodCutter = sprites.create(assets.image("""
    myImage
    """), SpriteKind.player)
woodCutter.set_position(18, 97)

def on_forever():
    if inGame:
        controller.move_sprite(woodCutter, 100, 100)
    else:
        controller.move_sprite(woodCutter, 0, 0)
forever(on_forever)
