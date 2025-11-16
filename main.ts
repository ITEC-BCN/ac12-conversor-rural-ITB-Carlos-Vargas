scene.setBackgroundImage(assets.image`bosc`)
let woodCutter = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(woodCutter)
animation.runImageAnimation(
woodCutter,
assets.animation`myAnim`,
200,
true
)
