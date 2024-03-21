"use client"

import MiniPushPinGroup from "./MiniPushPinGroup"
import { useNotesContext } from "./NotesProvider"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination"
import PaperBG from "./PaperBG"


export default function Paginator() {

    const {
        notes,
        currentPage,
        handlePageChange,
        concatenatedPath
    } = useNotesContext()

    const handleClick = (action: string, e: React.MouseEvent) => {
        e.preventDefault()
        handlePageChange(action)
    }


    return (
        <div className="relative flex justify-center items-center">
            <PaperBG>
                <div className="flex absolute top-4 w-full p-2">
                    <MiniPushPinGroup />
                </div>
                <div className="absolute">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href={`${concatenatedPath}`} onClick={handleClick.bind(null, 'previous')} className={`${currentPage === 1 && 'hidden'} bg-emerald-500`} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={`${concatenatedPath}`} className="bg-emerald-500">{currentPage}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis className="bg-emerald-500 rounded-md" />
                            </PaginationItem>
                            <PaginationItem>
                                {notes?.length !== 0 ?
                                    <PaginationNext href={`${concatenatedPath}`} onClick={handleClick.bind(null, 'next')} className={`${notes?.length === 0 && 'hidden'} bg-emerald-500`} />
                                    :
                                    <PaginationLink href={`${concatenatedPath}`} onClick={handleClick.bind(null, 'redirect')} className="bg-emerald-500">
                                        ⟲
                                    </PaginationLink>
                                }
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
                <div className="flex absolute bottom-4 w-full p-2">
                    <MiniPushPinGroup />
                </div>
            </PaperBG>
        </div>
    )






}