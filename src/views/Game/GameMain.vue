<script lang="ts" setup>
const role = ref('Fighter')
const rolesList = [
  { name: 'Fighter' },
  { name: 'Samurai' },
  { name: 'Shinobi' }
]
const FighterCanvasRef: Ref = ref()
const SamuraiCanvasRef: Ref = ref()
const ShinobiCanvasRef: Ref = ref()
const RoleState = ref('')
const RoleAnimationState = ref([])
const FighterState = ref('idle')
const SamuraiState = ref('idle')
const ShinobiState = ref('idle')
const FighterAnimation = ref([])
const SamuraiAnimation = ref([])
const ShinobiAnimation = ref([])
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
const SamuraiAnimationState = [
  { name: 'idle', frames: 6 },
  { name: 'walk', frames: 8 },
  { name: 'run', frames: 8 },
  { name: 'jump', frames: 12 },
  { name: 'attack1', frames: 6 },
  { name: 'attack2', frames: 4 },
  { name: 'attack3', frames: 3 },
  { name: 'shield', frames: 2 },
  { name: 'hurt', frames: 2 },
  { name: 'dead', frames: 3 }
]
const ShinobiAnimationState = [
  { name: 'idle', frames: 6 },
  { name: 'walk', frames: 8 },
  { name: 'run', frames: 8 },
  { name: 'jump', frames: 12 },
  { name: 'attack1', frames: 5 },
  { name: 'attack2', frames: 3 },
  { name: 'attack3', frames: 4 },
  { name: 'shield', frames: 4 },
  { name: 'hurt', frames: 2 },
  { name: 'dead', frames: 4 }
]

const fighterInit = () => {
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

  RoleAnimationState.value.forEach((state, index) => {
    let frames = { loc: [] }
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * FIGHTER_WIDTH
      let positionY = index * FIGHTER_HEIGHT
      frames.loc.push({ x: positionX, y: positionY })
    }
    FighterAnimation.value[state.name] = frames
  })

  const animate = () => {
    FighterCtx.clearRect(0, 0, FIGHTER_WIDTH, FIGHTER_HEIGHT)
    let position = Math.floor(gameFrame / staggerFrames) % FighterAnimation.value[RoleState.value].loc.length
    let frameX = fighterSpriteWidth * position
    let frameY = FighterAnimation.value[RoleState.value].loc[position].y

    FighterCtx.drawImage(fighterImage, frameX, frameY, fighterSpriteWidth, fighterSpriteHeight, 0, 0, fighterSpriteWidth, fighterSpriteHeight)
    gameFrame++
    requestAnimationFrame(animate)
  }

  animate()
}

const samuraiInit = () => {
  const SamuraiCanvas = SamuraiCanvasRef.value
  const SamuraiCtx = SamuraiCanvas.getContext('2d')
  const Samurai_WIDTH = SamuraiCanvas.width = 128
  const Samurai_HEIGHT = SamuraiCanvas.height = 128
  const SamuraiImage = new Image()
  SamuraiImage.src = './roles/SamuraiSpritelist.png'
  const SamuraiSpriteWidth = 128
  const SamuraiSpriteHeight = 128
  let gameFrame = 0
  const staggerFrames = 8

  RoleAnimationState.value.forEach((state, index) => {
    let frames = { loc: [] }
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * Samurai_WIDTH
      let positionY = index * Samurai_HEIGHT
      frames.loc.push({ x: positionX, y: positionY })
    }
    SamuraiAnimation.value[state.name] = frames
  })

  const animate = () => {
    SamuraiCtx.clearRect(0, 0, Samurai_WIDTH, Samurai_HEIGHT)
    let position = Math.floor(gameFrame / staggerFrames) % SamuraiAnimation.value[RoleState.value].loc.length
    let frameX = SamuraiSpriteWidth * position
    let frameY = SamuraiAnimation.value[RoleState.value].loc[position].y

    SamuraiCtx.drawImage(SamuraiImage, frameX, frameY, SamuraiSpriteWidth, SamuraiSpriteHeight, 0, 0, SamuraiSpriteWidth, SamuraiSpriteHeight)
    gameFrame++
    requestAnimationFrame(animate)
  }

  animate()
}

const shinobiInit = () => {
  const ShinobiCanvas = ShinobiCanvasRef.value
  const ShinobiCtx = ShinobiCanvas.getContext('2d')
  const Shinobi_WIDTH = ShinobiCanvas.width = 128
  const Shinobi_HEIGHT = ShinobiCanvas.height = 128
  const ShinobiImage = new Image()
  ShinobiImage.src = './roles/ShinobiSpritelist.png'
  const ShinobiSpriteWidth = 128
  const ShinobiSpriteHeight = 128
  let gameFrame = 0
  const staggerFrames = 8

  RoleAnimationState.value.forEach((state, index) => {
    let frames = { loc: [] }
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * Shinobi_WIDTH
      let positionY = index * Shinobi_HEIGHT
      frames.loc.push({ x: positionX, y: positionY })
    }
    ShinobiAnimation.value[state.name] = frames
  })

  const animate = () => {
    ShinobiCtx.clearRect(0, 0, Shinobi_WIDTH, Shinobi_HEIGHT)
    let position = Math.floor(gameFrame / staggerFrames) % ShinobiAnimation.value[RoleState.value].loc.length
    let frameX = ShinobiSpriteWidth * position
    let frameY = ShinobiAnimation.value[RoleState.value].loc[position].y

    ShinobiCtx.drawImage(ShinobiImage, frameX, frameY, ShinobiSpriteWidth, ShinobiSpriteHeight, 0, 0, ShinobiSpriteWidth, ShinobiSpriteHeight)
    gameFrame++
    requestAnimationFrame(animate)
  }

  animate()
}

const roleChange = (role) => {
  RoleAnimationState.value = []
  switch (role) {
    case 'Fighter':
      RoleState.value = FighterState.value
      RoleAnimationState.value = FighterAnimationState
      fighterInit()
      break
    case 'Samurai':
      RoleState.value = SamuraiState.value
      RoleAnimationState.value = SamuraiAnimationState
      samuraiInit()
      break
    case 'Shinobi':
      RoleState.value = ShinobiState.value
      RoleAnimationState.value = ShinobiAnimationState
      shinobiInit()
      break
  }
}
onMounted(() => {
  roleChange('Fighter')
})
</script>

<template>
  <div h-full w-screen color-white p8 flex>
    <div flex="~ col" gap-4>
      <el-select v-model="role" style="width: 200px;" @change="roleChange">
        <el-option v-for="item in rolesList" :value="item.name"></el-option>
      </el-select>
      <el-select v-model="RoleState" style="width: 200px;">
        <el-option v-for="item in RoleAnimationState" :value="item.name"></el-option>
      </el-select>
    </div>
    <canvas v-show="role === 'Fighter'" ref="FighterCanvasRef"></canvas>
    <canvas v-show="role === 'Samurai'" ref="SamuraiCanvasRef"></canvas>
    <canvas v-show="role === 'Shinobi'" ref="ShinobiCanvasRef"></canvas>
  </div>
</template>

<style lang="scss" scoped>
#FighterCanvas {
  border: 1px solid #666;
}
</style>
