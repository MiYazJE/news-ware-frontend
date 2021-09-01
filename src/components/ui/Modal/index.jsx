import * as React from 'react'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ show, hide, title, children }) => {
  return (
    <AnimatePresence>
      {show && (
        <Dialog
          open={show}
          onClose={hide}
          as="div"
          className="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto"
        >
          <div className="flex flex-col py-8 px-4 text-center">
            <Dialog.Overlay />
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: 'easeOut',
                  duration: 0.15
                }
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: 'easeIn',
                  duration: 0.15
                }
              }}
            >

              <div
                className="align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <button onClick={hide} title="Close modal" className="absolute top-2 right-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                </button>

                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h2"
                        className="text-lg text-blue-700 leading-6 font-medium"
                        id="modal-headline"
                      >
                        {title}
                      </Dialog.Title>
                    </div>

                  </div>

                  <div className="mt-3">
                    {children}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default Modal
