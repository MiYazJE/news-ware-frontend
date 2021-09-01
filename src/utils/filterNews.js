const normalizedStr = (str = '') => str.toLowerCase?.()

const filterNews = ({ news = [], search }) => {
  const normalizedSearch = normalizedStr(search)

  return news.filter(news =>
    Object.values(news).some((value) =>
      normalizedStr(value)?.includes(normalizedSearch)
    ))
}

export default filterNews
