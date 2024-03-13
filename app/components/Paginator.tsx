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


    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={handlePrevious} className={`${currentPage === 1 ? 'hidden' : 'block '}`} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" onClick={handleNext} className={`${notes.length === 0 ? 'hidden' : 'block'}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )

}