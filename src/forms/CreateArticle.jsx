import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

const initialValues = {
  author: '',
  description: '',
  title: '',
  content: ''
}

const validationSchema = Yup.object().shape({
  author: Yup.string().required('Author is required.'),
  title: Yup.string().required('Title is required.')
})

const CreateArticle = ({ createArticle, hide }) => {
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)

    createArticle(values)
      .then(hide)
      .finally(() => setSubmitting(false))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <form className="w-96" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input value={values.author} name="author" error={errors.author} placeholder="Type the author..." onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Input className="mt-2" value={values.title} error={errors.title} name="title" placeholder="Type the title..." onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Input value={values.description} name="description" placeholder="Type the description..." onChange={handleChange} />
          </div>
          <div className="mb-4">
            <textarea
              className="flex-1 appearance-none border border-transparent w-full py-3 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={values.content}
              name="content"
              placeholder="Type the content..."
              onChange={handleChange}
            />
          </div>
          <Button loading={isSubmitting} type="submit" label="Create" />
        </form>
      )}

    </Formik>
  )
}

export default CreateArticle
