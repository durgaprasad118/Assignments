import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import { useDataQuery } from './utilities/FetchData'
function App() {
  const { isLoading, error, data } = useDataQuery()
  const [dataApi, setDataApi] = useState([])
  const [searchQuery, setSearchQuery] = useState('')


  useEffect(() => {
    if (!isLoading && !error) {
      setDataApi(data)
    }
  }, [isLoading, error, data])

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleResetClick = () => {
    setSearchQuery('')
  }
  // TODO: do this or that
  const filteredData = dataApi.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="py-4 bg-gray-50 dark:bg-gray-900 p-2">
      <div className="flex justify-center gap-x-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 rounded-md p-2 w-1/3"
        />
        <button
          onClick={handleResetClick}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Reset
        </button>
      </div>

      {filteredData.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full gap-4 gap-y-20 pb-20 h-fit">
          {filteredData.map((item, index) => (
            <Card
              key={index}
              {...item}
            ></Card>
          ))}
        </div>
      ) : (
        <div className="flex h-[90vh] w-full bg-gray-900 items-center justify-center text-gray-50 text-2xl">
          Oops The item you are searching for is not found!!
        </div>
      )}
    </div>
  )
}

export default App
