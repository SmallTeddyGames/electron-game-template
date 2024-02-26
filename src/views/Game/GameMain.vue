<script lang="ts" setup>
const FighterCanvasRef: Ref = ref()
const fighterState = ref('idle')
const FighterAnimation = ref([])
const FighterAnimationState = [
  { name: 'idle', frames: 6 },
  { name: 'walk', frames: 8 },
  { name: 'run', frames: 8 },
  { name: 'jump', frames: 10 },
  { name: 'attack1', frames: 4 },
  { name: 'attack2', frames: 3 },
  { name: 'attack3', frames: 4 },
  { name: 'shield', frames: 2 },
  { name: 'hurt', frames: 3 },
  { name: 'dead', frames: 3 }
]

const init = () => {
  const FighterCanvas = FighterCanvasRef.value
  const FighterCtx = FighterCanvas.getContext('2d')
  const FIGHTER_WIDTH = FighterCanvas.width = 128
  const FIGHTER_HEIGHT = FighterCanvas.height = 128
  const fighterImage = new Image()
  fighterImage.src = './roles/FighterSpritelist.png'
  const fighterSpriteWidth = 128
  const fighterSpriteHeight = 128
  let gameFrame = 0
  const staggerFrames = 8

  FighterAnimationState.forEach((state, index) => {
    let frames = { loc: [] }
    for(let j = 0; j < state.frames; j++) {
      let positionX = j * FIGHTER_WIDTH
      let positionY = index * FIGHTER_HEIGHT
      frames.loc.push({x: positionX, y: positionY})
    }
    FighterAnimation.value[state.name] = frames
  })

  console.log(FighterAnimation.value)

  const animate = () => {
    FighterCtx.clearRect(0, 0, FIGHTER_WIDTH, FIGHTER_HEIGHT)
    let position = Math.floor(gameFrame / staggerFrames) % FighterAnimation.value[fighterState.value].loc.length
    let frameX = fighterSpriteWidth * position
    let frameY = FighterAnimation.value[fighterState.value].loc[position].y

    FighterCtx.drawImage(fighterImage, frameX, frameY, fighterSpriteWidth, fighterSpriteHeight, 0, 0, fighterSpriteWidth, fighterSpriteHeight)
    gameFrame++
    requestAnimationFrame(animate)
  }

  animate()
}

onMounted(() => {
  init()
})
</script>

<template>
  <div h-full w-screen color-white p8 flex>
    <el-select v-model="fighterState" style="width: 200px;">
      <el-option v-for="item in FighterAnimationState" :value="item.name"></el-option>
    </el-select>
    <canvas ref="FighterCanvasRef"></canvas>
  </div>
</template>

<style lang="scss" scoped>
#FighterCanvas {
  border: 1px solid #666;
}
</style>
