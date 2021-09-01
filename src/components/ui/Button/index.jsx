import React from 'react'

const Button = ({ disabled, onClick, type = 'button', label, children, loading, className }) => {
  const content = label || children

  const styles = 'color-white flex justify-center items-center text-white bg-blue-700 transition-all ease-in-out duration-300 hover:text-black hover:bg-white border border-blue-700 font-semibold py-2 px-6 rounded-md'

  return (
    <button
      className={`
        ${styles} 
        ${className}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
      `}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading
        ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        : content}
    </button>
  )
}

export default Button
