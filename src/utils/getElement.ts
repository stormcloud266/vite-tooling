export const getElementByIdOrThrow = <T extends HTMLElement>(id: string): T => {
  const element = <T>document.getElementById(id)
  if (!element) throw new Error(`Element with ID "${id}" not found`)

  return element
}
