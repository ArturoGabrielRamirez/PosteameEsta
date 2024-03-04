"use client"

import { useNotesContext } from "./NotesProvider"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


export default function Paginator() {

    const {
        currentPage,
        handlePrevious,
        handleNext,
        notes
    } = useNotesContext()

    const validatedArray = notes.length === 0 ? 'hidden' : 'block'
    const validatedPage = currentPage === 1 ? 'hidden' : 'block '

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={handlePrevious} className={`${validatedPage}`} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" onClick={handleNext} className={`${validatedArray}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )

}