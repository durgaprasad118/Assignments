import React from 'react'
const CardSkeleton = () => {
  return (
    <div className="w-80 h-96">
      <div className="max-w-sm bg-gray-300 animate-pulse border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 text-center">
        <div className="w-72 h-72 mx-auto bg-gray-400 rounded-t-lg"></div>

        <div className="p-5">
          <div className="mb-2 h-6 bg-gray-400 rounded"></div>
          <div className="mb-3 h-20 bg-gray-400 rounded"></div>

          <div className="flex justify-between">
            <div className="h-4 w-12 bg-gray-400 rounded"></div>
            <div className="h-4 w-20 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardSkeleton
