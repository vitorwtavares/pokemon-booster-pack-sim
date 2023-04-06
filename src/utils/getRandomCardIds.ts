export const getRandomCardIds = (packSize: number, amountOfCards: number) => {
  const randomIds = Array(amountOfCards)
    .fill(0)
    .map(() => Math.floor(Math.random() * (packSize - 1) + 1))

  if (amountOfCards === 1) return `number:${[...randomIds]}`

  return `(number:${randomIds.join(' OR number:')})`
}
