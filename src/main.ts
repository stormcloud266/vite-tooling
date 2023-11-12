import './style.css'

import { counter } from './utils/counter'
import { getElementByIdOrThrow } from './utils/getElement'

const display = getElementByIdOrThrow('display')
const add = getElementByIdOrThrow<HTMLButtonElement>('add')
const subtract = getElementByIdOrThrow<HTMLButtonElement>('subtract')

const mainCounter = counter()

mainCounter.subscribe((newCount) => {
  display.textContent = newCount.toString()
})

add.addEventListener('click', () => mainCounter.increment())
subtract.addEventListener('click', () => mainCounter.increment(-1))
