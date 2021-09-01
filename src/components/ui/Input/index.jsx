import React from 'react'

const Input = ({ value, name, error, className, placeholder, onChange }) => {
  const styles = 'flex-1 appearance-none border border-transparent w-full py-3 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'

  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : ''
  return (
    <>
      <input
        className={`${className || ''} ${styles} ${errorStyles}`}
        placeholder={placeholder}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </>
  )
}

export default Input
