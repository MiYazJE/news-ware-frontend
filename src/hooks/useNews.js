import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NewsService from '../services/NewsService'
import filterNews from '../utils/filterNews'

const newsService = new NewsService()

const useNews = () => {
  const [allNewsUnarchived, setAllNewsUnarchived] = useState([])
  const [allNewsArchived, setAllNewsArchived] = useState([])
  const [newsUnarchived, setNewsUnarchived] = useState([])
  const [newsArchived, setNewsArchived] = useState([])
  const [loadingNews, setLoadingNews] = useState(true)

  const fetchAllNews = useCallback(async () => {
    setLoadingNews(true)
    const { data: allNews } = await newsService.getAll()
    setLoadingNews(false)

    const unarchived = []
    const archived = []

    allNews.forEach(news => {
      if (news.isArchived) {
        archived.push(news)
      } else {
        unarchived.push(news)
      }
    })

    setAllNewsUnarchived(unarchived)
    setAllNewsArchived(archived)

    setNewsUnarchived(unarchived)
    setNewsArchived(archived)
  }, [])

  useEffect(() => {
    fetchAllNews()
  }, [fetchAllNews])

  const filterAllNews = useCallback((search) => {
    const newsUnarchivedFiltered = filterNews({
      search,
      news: allNewsUnarchived
    })
    const newsArchivedFiltered = filterNews({
      search,
      news: allNewsArchived
    })

    setNewsArchived(newsArchivedFiltered)
    setNewsUnarchived(newsUnarchivedFiltered)
  }, [allNewsUnarchived, allNewsArchived])

  const toggleArchived = async (id, isArchived) => {
    await newsService.setArchived(id, isArchived)
      .then(() => {
        fetchAllNews()
        toast.success('The article has been archived')
      })
  }

  const createArticle = async (article) => {
    await newsService.post(article)
      .then(() => {
        fetchAllNews()
        toast.success('The article has been created')
      })
      .catch(() => toast.error('Problems trying to create the article'))
  }

  const deleteArticle = async (id) => {
    await newsService.delete(id)
      .then(() => {
        fetchAllNews()
        toast.success('The article has been deleted')
      })
  }

  return {
    loadingNews,
    newsArchived,
    newsUnarchived,
    toggleArchived,
    createArticle,
    deleteArticle,
    filterAllNews,
    fetchAllNews
  }
}

export default useNews
