scene.set_background_image(assets.image("""
    bosc
    """))
woodCutter = sprites.create(assets.image("""
    myImage
    """), SpriteKind.player)
controller.move_sprite(woodCutter)
animation.run_image_animation(woodCutter,
    assets.animation("""
        myAnim
        """),
    200,
    True)