import { useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';

const PhotoList = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
		setIsOpen(false);
	}

	const openModal = () => {
		setIsOpen(true);
	}

  return (
		<>
      <button onClick={openModal}>
        <img src={photo.url} alt={photo.title} />
      </button>
      <div className="absolute">
        <Transition appear show={isOpen} as="div">
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
              
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    {photo.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <img src={photo.url} alt={photo.title} />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
	);
}

export default PhotoList;