@namespace
class SpriteKind:
    dropeador = SpriteKind.create()
    sumar = SpriteKind.create()
    restar = SpriteKind.create()

def on_b_pressed():
    if inGame:
        open_main_menu()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite, otherSprite):
    global cerca, golpes
    cerca = True
    if golpes == vida_arbol:
        sprites.destroy(otherSprite)
        info.change_score_by(3)
        golpes = 0
        cerca = False
sprites.on_overlap(SpriteKind.player, SpriteKind.dropeador, on_on_overlap)

def on_a_pressed():
    global golpes, oprimido
    if inGame:
        animation.run_image_animation(woodCutter,
            assets.animation("""
                talar
                """),
            100,
            False)
        if cerca:
            golpes += 1
    elif inMenu:
        oprimido = True
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap2(sprite32, otherSprite32):
    global cantidad, oprimido
    if otherSprite32 == cursor and oprimido and cantidad > 1:
        cantidad += 0 - 1
        valorSprite.set_text("" + str(cantidad))
        oprimido = False
sprites.on_overlap(SpriteKind.restar, SpriteKind.player, on_on_overlap2)

# Presiona izquierda

def on_left_pressed():
    walk_lef()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def open_second_menu():
    global oprimido, inMenu, cantidad, valorSprite, sumar_botton, restar_botton, confirm_botton, cursor
    oprimido = False
    inMenu = True
    cantidad = 1
    valorSprite = textsprite.create("1")
    valorSprite.set_max_font_height(15)
    valorSprite.set_position(80, 29)
    sprites.destroy(woodCutter)
    sprites.destroy_all_sprites_of_kind(SpriteKind.dropeador)
    scene.set_background_image(assets.image("""
        fondo_menu
        """))
    sumar_botton = sprites.create(assets.image("""
        sumar
        """), SpriteKind.sumar)
    sumar_botton.set_position(121, 59)
    restar_botton = sprites.create(assets.image("""
        restar
        """), SpriteKind.restar)
    restar_botton.set_position(32, 59)
    confirm_botton = sprites.create(assets.image("""
        ok
        """), SpriteKind.text)
    confirm_botton.set_position(76, 94)
    cursor = sprites.create(assets.image("""
        cursor
        """), SpriteKind.player)
    controller.move_sprite(cursor, 100, 100)
# Suelta derecha

def on_right_released():
    stop_walk_anim()
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

# Suelta izquierda

def on_left_released():
    stop_walk_anim()
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_on_overlap3(sprite2, otherSprite2):
    global cantidad, oprimido
    if otherSprite2 == cursor and oprimido:
        cantidad += 1
        valorSprite.set_text("" + str(cantidad))
        oprimido = False
sprites.on_overlap(SpriteKind.sumar, SpriteKind.player, on_on_overlap3)

def chekc_trueque():
    global huevos, pollos, cabras, caballos, patatas
    if selectedItem.includes("huevo") and info.score() >= 3 * cantidad:
        huevos += 12 * cantidad
        info.change_score_by(-3 * cantidad)
    elif selectedItem.includes("pollo") and info.score() >= 6 * cantidad:
        pollos += 1 * cantidad
        info.change_score_by(-6 * cantidad)
    elif selectedItem.includes("cabra") and info.score() >= 5 * cantidad:
        cabras += 1 * cantidad
        info.change_score_by(-5 * cantidad)
    elif selectedItem.includes("caballo") and info.score() >= 12 * cantidad:
        caballos += 1 * cantidad
        info.change_score_by(-12 * cantidad)
    elif selectedItem.includes("patata") and info.score() >= 2 * cantidad:
        patatas += 1 * cantidad
        info.change_score_by(-2 * cantidad)
    else:
        game.splash("No tienes madera suficiente")
def walk_lef():
    animation.run_image_animation(woodCutter,
        assets.animation("""
            left_walk
            """),
        200,
        True)
def spaws_trees():
    global tree
    posiciones = [46, 80, 117]
    list2: List[number] = []
    for value in list2:
        pass
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

def on_on_overlap4(sprite3, otherSprite3):
    global inGame, inMenu, oprimido
    if otherSprite3 == cursor and oprimido:
        inGame = True
        inMenu = True
        oprimido = False
        sprites.destroy(sumar_botton)
        sprites.destroy(restar_botton)
        sprites.destroy_all_sprites_of_kind(SpriteKind.text)
        sprites.destroy_all_sprites_of_kind(SpriteKind.player)
        chekc_trueque()
        spaw_player()
        spaws_trees()
sprites.on_overlap(SpriteKind.text, SpriteKind.player, on_on_overlap4)

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
def spaw_player():
    global woodCutter
    woodCutter = sprites.create(assets.image("""
        myImage
        """), SpriteKind.player)
    woodCutter.set_position(18, 97)
def open_main_menu():
    global inGame, backPack, myMenu
    inGame = False
    backPack = [miniMenu.create_menu_item("huevo " + ("" + str(huevos)),
            assets.image("""
                huevo
                """)),
        miniMenu.create_menu_item("pollo " + ("" + str(pollos)),
            assets.image("""
                pollo
                """)),
        miniMenu.create_menu_item("cabra " + ("" + str(cabras)),
            assets.image("""
                cabra
                """)),
        miniMenu.create_menu_item("caballo " + ("" + str(caballos)),
            assets.image("""
                caballo
                """)),
        miniMenu.create_menu_item("1.5/kg patata " + ("" + str(patatas)),
            assets.image("""
                patata
                """))]
    myMenu = miniMenu.create_menu_from_array(backPack)
    myMenu.set_title("Inventario")
    myMenu.set_frame(assets.image("""
        fondo_inventario
        """))
    myMenu.set_position(80, 60)
    myMenu.set_style_property(miniMenu.StyleKind.SELECTED,
        miniMenu.StyleProperty.BACKGROUND,
        8)
    
    def on_button_pressed(selection, selectedIndex):
        global selectedItem
        selectedItem = selection
        myMenu.close()
        open_second_menu()
    myMenu.on_button_pressed(controller.A, on_button_pressed)
    
    
    def on_button_pressed2(selection2, selectedIndex2):
        global inGame
        inGame = True
        myMenu.close()
    myMenu.on_button_pressed(controller.B, on_button_pressed2)
    
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
tree: Sprite = None
selectedItem = ""
confirm_botton: Sprite = None
restar_botton: Sprite = None
sumar_botton: Sprite = None
valorSprite: TextSprite = None
cantidad = 0
cursor: Sprite = None
oprimido = False
woodCutter: Sprite = None
inMenu = False
vida_arbol = 0
patatas = 0
caballos = 0
pollos = 0
cabras = 0
huevos = 0
golpes = 0
cerca = False
inGame = False
info.set_score(0)
inGame = True
cerca = False
golpes = 0
huevos = 0
cabras = 0
pollos = 0
caballos = 0
patatas = 0
vida_arbol = 3
spaw_player()
spaws_trees()

def on_forever():
    if inGame:
        scene.set_background_image(assets.image("""
            bosc
            """))
        controller.move_sprite(woodCutter, 100, 100)
        if woodCutter.x > scene.screen_width():
            woodCutter.x = 0
            if len(sprites.all_of_kind(SpriteKind.dropeador)) == 0:
                spaws_trees()
        # aparece por la izquierda
        if woodCutter.x < 0:
            woodCutter.x = scene.screen_width()
            if len(sprites.all_of_kind(SpriteKind.dropeador)) == 0:
                spaws_trees()
    else:
        controller.move_sprite(woodCutter, 0, 0)
forever(on_forever)
