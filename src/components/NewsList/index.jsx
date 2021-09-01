import React from 'react'
import Button from '../ui/Button'
import NewsItem, { NewsItemSkeleton } from './NewsItem'

const NewsList = ({ news, createNews, loading, toggleArchived, deleteArticle }) => {
  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <NewsItemSkeleton />
        <NewsItemSkeleton />
        <NewsItemSkeleton />
        <NewsItemSkeleton />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {news.length
        ? news.map((newsItem) =>
          <NewsItem toggleArchived={toggleArchived} deleteArticle={deleteArticle} key={newsItem._id} {...newsItem} />
        )
        : <div className="flex flex-col items-center w-full mt-80 gap-2">
          <span className="text-2xl font-semibold">The are no news registered.</span>
          <Button onClick={createNews} label="Create news" />
        </div>
      }
    </div>
  )
}

export default NewsList
