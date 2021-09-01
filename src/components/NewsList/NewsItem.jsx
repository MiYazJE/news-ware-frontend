import React, { useState } from 'react'
import Button from '../ui/Button'

const NewsItem = ({ title, _id, author, description, isArchived, content, toggleArchived, deleteArticle }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleOnToggleArchived = async () => {
    setIsLoading(true)
    await toggleArchived(_id, !isArchived)
    setIsLoading(false)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    await deleteArticle(_id)
    setIsDeleting(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col-reverse justify-start sm:flex-row max-h-full sm:max-h-96">
      <div className="flex flex-col w-full sm:w-11/12 justify-between">
        <div className="flex flex-col p-3">
          <p className="text-blue-800 font-semibold text-lg">{title.toUpperCase()}</p>
          <p className="font-semibold capitalize">{description}</p>
          <p className="mt-5">{content}</p>
          <p className="text-sm font-bold my-2">{author}</p>

        </div>
        <div className="mb-2 flex justify-center">
          {!isArchived && (
            <div>
              <Button loading={isLoading} onClick={handleOnToggleArchived} label="Archive it" />
            </div>
          )}
          {isArchived && (
            <Button loading={isDeleting} className="bg-pink-800 border-pink-800" onClick={handleDelete} label="Delete article" />
          )}
        </div>
      </div>

      <div className="w-full sm:h-auto h-72">
        <img
          loading="lazy"
          className="h-full w-full object-cover rounded-tr-xl rounded-tl-xl sm:rounded-tl-none rounded-br-none sm:rounded-br-xl"
          src="https://source.unsplash.com/random"
          alt="image of the article"
        />
      </div>

    </div>
  )
}

export const NewsItemSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md w-full flex">
    <div className="flex flex-col h-full w-7/12 p-4">
      <div className="animate-pulse bg-blue-100 rounded h-4 w-full" />
      <div className="animate-pulse bg-blue-100 rounded h-4 w-5/12 mt-2" />

      <div className="animate-pulse bg-blue-100 rounded h-4 w-8/12 mt-10" />
      <div className="animate-pulse bg-blue-100 rounded h-4 w-1/2 mt-2" />
      <div className="animate-pulse bg-blue-100 rounded h-4 w-8/12 mt-2" />
      <div className="animate-pulse bg-blue-100 rounded h-4 w-1/2 mt-2" />
      <div className="animate-pulse bg-blue-100 rounded h-4 w-8/12 mt-2" />
    </div>

    <div className="w-5/12 p-10">
      <div className=" animate-pulse bg-blue-100 w-full h-full"></div>
    </div>

  </div>
)

export default NewsItem
