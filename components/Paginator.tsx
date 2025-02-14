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
import { ChevronsLeft } from 'lucide-react'
import { AspectRatio } from "@radix-ui/react-aspect-ratio"


export default function Paginator() {

    const {
        notes,
        currentPage,
        handlePageChange,
        concatenatedPath,
        isLastPage,
        isEmptyPage
    } = useNotesContext()

    const handleClick = (action: string, e: React.MouseEvent) => {
        e.preventDefault()
        handlePageChange(action)
    }


    return (
        <div className={`${isLastPage && notes === undefined && 'absolute'} w-full max-w-[300px] rounded-sm shadow-lg shadow-[rgba(0,0,0,0.8)] `}>
            <AspectRatio ratio={16 / 10} className="max-w-full max-h-full">
                <PaperBG>
                    <div className="flex absolute top-0 w-full py-4 px-2">
                        <MiniPushPinGroup />
                    </div>
                    <div className="absolute flex flex-col items-center">
                        {notes && notes?.length === 0 && isLastPage && !isEmptyPage && <p className="p-2">No hay notas para mostrar.</p>}
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href={`${concatenatedPath}`}
                                        onClick={handleClick.bind(null, 'previous')}
                                        className={`${currentPage === 1 && 'hidden'} bg-emerald-500`} />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href={`${concatenatedPath}`}
                                        className="bg-emerald-500">
                                        {currentPage}
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis className="bg-emerald-500 rounded-md" />
                                </PaginationItem>
                                <PaginationItem>
                                    {notes?.length !== 0 ?
                                        <PaginationNext
                                            href={`${concatenatedPath}`}
                                            onClick={handleClick.bind(null, 'next')}
                                            className={`${isLastPage && !isEmptyPage && 'hidden'} bg-emerald-500`} />
                                        :
                                        <PaginationLink
                                            href={`${concatenatedPath}`}
                                            onClick={handleClick.bind(null, 'redirect')}
                                            className="bg-emerald-500">
                                            <ChevronsLeft />
                                        </PaginationLink>
                                    }
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                    <div className="flex absolute bottom-1 w-full py-4 px-2">
                        <MiniPushPinGroup />
                    </div>
                </PaperBG>
            </AspectRatio>
        </div>
    )

}