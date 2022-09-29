namespace SpriteKind {
    export const map = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    apple.ay = 25 * Math.sin(angle)
    apple.ax = 25 * Math.cos(angle)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += 30 * (3.14 / 180)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += 30 * (3.14 / 180)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    apple.ay = 20
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorth, function (sprite, location) {
    apple.setVelocity(0, -1)
})
let apple: Sprite = null
let angle = 0
angle = 0
tiles.setCurrentTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
apple = sprites.create(img`
    bbbb........bbbb.................
    c99bb......bb99b.................
    c999bb....bb999c.................
    c9b99bccccb99b9c.................
    c9bb99bccb99bb9c.................
    c93b99999999b39c.................
    c93399999999339c.................
    c99399999999399c.................
    c99999991199999c.................
    c999ff91119ff99c........bbbbbb...
    c999ff91111ff99c.......c999999bb.
    c99991111111999c......c99999999b.
    c9991111fff1199c.....c9991119999b
    c999c11fff1199bc.....c9911111999b
    c999cc111111c9bc.....c911dd11199b
    c99999bb33cc99bcc....cbddbbd1199c
    c999999b33c99999bbccccbbdbbb1199c
    c9999999bb9999999999999999bb1999c
    c999911119999999999999999999b999c
    c999111111999999999999999999999c.
    c99911111119999999999999999999cc.
    c99111111119999999999999999999c..
    c99111111111999999999999999999c..
    cb9111111111999999999999999999c..
    .f9111111111999999999999999999c..
    .ff111111111999999999999999999c..
    ..fb11111111999999999999999999c..
    ...fb1111119999999111111999999c..
    ...fbbb11119999991111111199999c..
    ....fbbfffb9999ccccccccccb9999c..
    ....fbbf..f999c.....fbbf.c9999c..
    ....fbbf..f999c.....fbbf.cc9999c.
    ....fbbf..f99c.......fbf..cc999c.
    ....fbbf..f99c.......fbbf..cc99c.
    ....fbbf..f99c.......fbbf...c99c.
    ....fbbf..f99c......fbbbf...c99c.
    ...fbbbf..f99c......ffff....cb9c.
    ...fbbf..f999c.............c999c.
    ...ffff..f99cc.............c999c.
    .........fffc..............cccc..
    `, SpriteKind.Player)
let rocketengine = sprites.create(img`
    9 3 
    3 9 
    `, SpriteKind.Player)
scene.cameraFollowSprite(apple)
scaling.scaleByPercent(apple, -25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
apple.ay += 20
let myMinimap = minimap.minimap(MinimapScale.Quarter, 2, 0)
let minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
game.onUpdate(function () {
    minimap2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Quarter, 2, 0)
    minimap.includeSprite(myMinimap, apple, MinimapSpriteScale.MinimapScale)
    minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    minimap2.setPosition(apple.x - 50, apple.y - 30)
    rocketengine.setPosition(apple.x + -8 * Math.cos(angle), apple.y + -8 * Math.sin(angle))
})
