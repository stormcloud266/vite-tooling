import { getElementByIdOrThrow } from '../getElement'

describe('getElementByIdOrThrow', () => {
  afterEach(() => {
    // Restore 'document.getElementById'
    jest.restoreAllMocks()
  })

  it('returns an html element', () => {
    // Create a mock element
    const mockDiv = document.createElement('div')
    mockDiv.id = 'mockId'
    mockDiv.textContent = 'Mock Text'

    // Mock 'document.getElementById'
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      return id === 'mockId' ? mockDiv : null
    })

    const div = getElementByIdOrThrow('mockId')
    expect(div).not.toBeNull()
    expect(div).toBeInstanceOf(HTMLElement)
  })

  it('returns a button element', () => {
    // Create a mock element
    const mockButton = document.createElement('button')
    mockButton.id = 'mockButtonId'
    mockButton.textContent = 'Mock Text'

    // Mock 'document.getElementById'
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      return id === 'mockButtonId' ? mockButton : null
    })

    const button = getElementByIdOrThrow<HTMLButtonElement>('mockButtonId')
    expect(button).not.toBeNull()
    expect(button).toBeInstanceOf(HTMLButtonElement)
  })
})
