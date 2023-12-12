import { useQuery } from '@tanstack/react-query'
export const useDataQuery = () => {
  return useQuery({
    queryKey: 'dat',
    queryFn: async () => {
      const res = await fetch('https://api.punkapi.com/v2/beers')
      return res.json()
    },
  })
}
