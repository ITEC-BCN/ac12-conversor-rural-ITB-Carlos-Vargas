@namespace
class SpriteKind:
    dropeador = SpriteKind.create()

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
# --- Funciones para animación ---
def walk_right():
    animation.run_image_animation(woodCutter,
        assets.animation("""
            rigth_walk
            """),
        200,
        True)
woodCutter: Sprite = None
vida_arbol = 0
golpes = 0
cerca = False
info.set_score(0)
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
controller.move_sprite(woodCutter)