export interface Counter {
  increment: (step?: number) => void
  subscribe: (listener: (c: number) => void) => void
}

export const counter = (): Counter => {
  let count = 0

  const listeners: Array<(c: number) => void> = []

  const increment = (step: number = 1) => {
    count += step
    notifySubscribers()
  }

  const subscribe = (listener: (c: number) => void) => {
    listeners.push(listener)
    listener(count)
  }

  const notifySubscribers = () => {
    listeners.forEach((listener) => listener(count))
  }

  return {
    increment,
    subscribe,
  }
}
