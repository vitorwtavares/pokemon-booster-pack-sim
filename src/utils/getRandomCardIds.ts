const generateRandomNumberOnRange = (max: number, min: number = 1) =>
  Math.floor(Math.random() * max + min)

export const getRandomCardIds = (packSize: number, amountOfCards: number) => {
  let randomIds: number[] = []

  while (randomIds.length < amountOfCards) {
    const randomNumber = generateRandomNumberOnRange(packSize)
    if (!randomIds.includes(randomNumber)) randomIds.push(randomNumber)
  }

  if (amountOfCards === 1) return `number:${[...randomIds]}`

  return `(number:${randomIds.join(' OR number:')})`
}
