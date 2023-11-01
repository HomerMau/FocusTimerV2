import state from "./state.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  console.log("Estou Honry")
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function setMoreFive() {
  console.log('Add 5')
}

export function setMinusFive() {
  console.log("Minus 5")
}

export function setMusicState(target) {
  const musicOptions = [
    "music-on-tr",
    "music-on-rc",
    "music-on-cf",
    "music-on-fp",
  ]
  const isTargetActive = document.documentElement.classList.contains(target)

  musicOptions.forEach((option) => {
    if (option === target) {
      if (isTargetActive) {
        console.log(`Turning off ${target}`)
        state.isMute = document.documentElement.classList.remove(target)
      } else {
        console.log(`Turning on ${target}`)
        state.isMute = document.documentElement.classList.add(target)
      }
    } else {
      console.log(`Turning off ${option}`)
      state.isMute = document.documentElement.classList.remove(option)
    }
  })
}

// Você pode chamar esta função em cada botão passando a classe relevante como argumento
export function tree() {
  setMusicState("music-on-tr")
}

export function rainCloud() {
  setMusicState("music-on-rc")
}

export function cafeteria() {
  setMusicState("music-on-cf")
}

export function fireplace() {
  setMusicState("music-on-fp")
}
