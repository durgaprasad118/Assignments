import React from 'react'
const Card = ({ name, description, tagline, ph, image_url, first_brewed }) => {
  return (
    <div className="w-80 h-96">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center ">
        <img
          className=" w-72 h-72 mx-auto py-2 "
          src={image_url}
          alt=""
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {name}
            </h5>
          </a>
          <p className="mb-3 truncate overflow-hidden font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div className="flex justify-between">
            <p className="text-gray-200">{ph + ' ⭐'}</p>
            <p className="text-gray-500">First-brewed: {first_brewed}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
