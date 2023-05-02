const getDateNow = (): string => {
  const date = new Date()
  const dataFormatada = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`
  return dataFormatada
}

export default getDateNow
