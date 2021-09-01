import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import NewsList from './components/NewsList'
import Search from './components/ui/Search'
import useNews from './hooks/useNews'
import Modal from './components/ui/Modal'
import CreateArticle from './forms/CreateArticle'

function App() {
  const [showNewsArchived, setShowArchived] = useState(false)
  const [showCreateArticleModal, toggleShowCreateArticleModal] = useState()

  const {
    newsArchived,
    loadingNews,
    newsUnarchived,
    toggleArchived,
    createArticle,
    filterAllNews,
    deleteArticle
  } = useNews()

  return (
    <div className="flex flex-col min-h-screen items-center font-sans bg-gray-100">
      <div className="container">

        <div className="sticky z-50 top-0 md:top-5 w-full">
          <Search
            placeholder="Search an article..."
            onFilter={filterAllNews}
          />
          <div className="px-5 my-2 flex justify-center">
            <button
              className={`py-3 px-5 rounded rounded-tr-none rounded-br-none ${!showNewsArchived ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}
              onClick={() => setShowArchived(false)}
            >
              News unarchived
            </button>
            <button
              className={`py-3 px-5 rounded rounded-tl-none rounded-bl-none ${showNewsArchived ? 'bg-blue-700 text-white' : 'bg-white text-black'}`}
              onClick={() => setShowArchived(true)}
            >
              News archived
            </button>
          </div>
        </div>

        <div className="p-5">
          <NewsList
            createNews={() => toggleShowCreateArticleModal(show => !show)}
            deleteArticle={deleteArticle}
            toggleArchived={toggleArchived}
            loading={loadingNews}
            news={showNewsArchived ? newsArchived : newsUnarchived}
          />
        </div>

        <div className="fixed bottom-5 right-5">
          <button
            onClick={() => toggleShowCreateArticleModal(show => !show)}
            className="bg-blue-700 border-none rounded-full h-12 w-12 flex items-center justify-center text-2xl text-white"
            title="Create an article"
          >
            <svg className="fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" /></svg>
          </button>

        </div>
      </div>

      <Modal title="Create news" show={showCreateArticleModal} hide={() => toggleShowCreateArticleModal(show => !show)}>
        <CreateArticle hide={() => toggleShowCreateArticleModal(show => !show)} createArticle={createArticle} />
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </div >
  )
}

export default App
