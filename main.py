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
scene.set_background_image(assets.image("""
    bosc
    """))
woodCutter = sprites.create(assets.image("""
    myImage
    """), SpriteKind.player)
controller.move_sprite(woodCutter)