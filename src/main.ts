import './style.css'

import { counter } from './utils/counter'

const display = document.getElementById('display')!
const add = document.getElementById('add')!
const subtract = document.getElementById('subtract')!

const mainCounter = counter()

mainCounter.subscribe((newCount) => {
  display.textContent = newCount.toString()
})

add.addEventListener('click', () => mainCounter.increment())
subtract.addEventListener('click', () => mainCounter.increment(-1))
