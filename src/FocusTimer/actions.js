import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import * as el from "./elements.js"

let currentSound = null // Variável para rastrear o som atual

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function setMoreFive() {
  console.log("Add 5 minutes")

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  minutes += 5


        minutes = minutes > 60 ? 60 : minutes

        seconds = 0


  timer.updateDisplay(minutes)
  sounds.buttonPressAudio.play()
}

export function setMinusFive() {
  console.log("Minus 5")

  let minutes = Number(el.minutes.textContent)
  minutes -= 5

  if (minutes < 0) {
    reset()
    sounds.kitchenTimer.play()
    return
  }

  timer.updateDisplay(minutes)
  sounds.buttonPressAudio.play()
}

export function stopCurrentSound() {
  if (currentSound) {
    currentSound.pause()
    currentSound.currentTime = 0
  }
}


export function setMusicState(target) {
  stopCurrentSound() // Para o som atual

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

  if (isTargetActive) {
    currentSound = null
  } else {
    // Iniciar o som apropriado
    if (target === "music-on-tr") {
      currentSound = sounds.floresta
      currentSound.play()
    } else if (target === "music-on-rc") {
      currentSound = sounds.chuva
      currentSound.play()
    } else if (target === "music-on-cf") {
      currentSound = sounds.cafeteria
      currentSound.play()
    } else if (target === "music-on-fp") {
      currentSound = sounds.lareira
      currentSound.play()
    }
  }
}

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
