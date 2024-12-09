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
        concatenatedPath
    } = useNotesContext()

    const handleClick = (action: string, e: React.MouseEvent) => {
        e.preventDefault()
        handlePageChange(action)
    }


    return (
        <div className={`relative flex justify-center items-center overflow-hidden w-full max-w-[500px] `}>
            <AspectRatio ratio={16 / 11}>
                <PaperBG>
                    <div className="flex absolute top-0 w-full py-4 px-2">
                        <MiniPushPinGroup />
                    </div>
                    <div className="absolute flex flex-col items-center">
                        {notes && notes?.length === 0 && <p className="p-2">No hay más notas.</p>}
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
                                            className={`${notes?.length === 0 && 'hidden'} bg-emerald-500`} />
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