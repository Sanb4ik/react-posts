import { useMemo } from "react"

export const usePagination = (totalPages) => {
    console.log(totalPages)
    const sortedPosts =  useMemo(() => {
        let pages = []
        console.log("useMeme Pagination")
        for(let i=0; i<totalPages;i++)
        {
            pages.push(i+1)
        }
        return pages
      },[totalPages])

    return sortedPosts
}