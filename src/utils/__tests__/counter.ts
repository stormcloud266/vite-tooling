import { counter, Counter } from '../counter'

describe('counter', () => {
  let c: Counter
  let count: number

  beforeEach(() => {
    c = counter()
    count = 0
  })

  it('increments the count', () => {
    c.increment()
    c.subscribe((newCount) => (count = newCount))
    expect(count).toBe(1)
  })

  it('notifies subscribers on increment', () => {
    c.subscribe((newCount) => (count = newCount))

    c.increment()
    expect(count).toBe(1)

    c.increment(2)
    expect(count).toBe(3)
  })

  it('notifies new subscribers of current count', () => {
    c.increment(3)
    c.subscribe((newCount) => (count = newCount))
    expect(count).toBe(3)
  })
})
