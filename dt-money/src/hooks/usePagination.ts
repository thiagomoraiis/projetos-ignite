import { useMemo, useState } from 'react'

type State = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export function usePagination(
  initialData: State[],
  perPage = 5,
  showPageNumber = 10,
) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalItems = initialData.length
  const totalPages = Math.ceil(totalItems / perPage)

  function getDataForPage(page: number) {
    const startIndex = (page - 1) * perPage
    return initialData.slice(startIndex, startIndex + perPage)
  }

  const pageNumbers = useMemo(() => {
    const numbers: number[] = []

    const start = Math.max(1, currentPage - Math.floor(showPageNumber / 2))
    const end = Math.min(totalPages, start + showPageNumber - 1)

    for (let i = start; i <= end; i++) {
      numbers.push(i)
    }

    return numbers
  }, [currentPage, totalPages, showPageNumber])

  const pageData = getDataForPage(currentPage)

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((state) => state + 1)
    }
  }

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1)
    }
  }

  return {
    page: {
      data: pageData,
      current: currentPage,
      numbers: pageNumbers,
      next: currentPage < totalPages ? currentPage + 1 : null,
      previous: currentPage > 1 ? currentPage - 1 : null,
      last: totalPages,
    },
    action: {
      goTo: goToPage,
      next: nextPage,
      previous: previousPage,
    },
  }
}
