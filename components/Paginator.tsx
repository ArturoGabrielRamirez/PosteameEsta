import MiniPushPinGroup from "./MiniPushPinGroup"
import { useNotesContext } from "./NotesProvider"
import {
    Pagination,
    PaginationContent,
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
        <AspectRatio ratio={16 / 10}>
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
                                    onClick={(e) => handleClick('previous', e)}
                                    className={`${currentPage === 1 && 'hidden'} bg-emerald-500`} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href={`${concatenatedPath}`}
                                    className="bg-emerald-500">
                                    {currentPage}
                                </PaginationLink>
                            </PaginationItem>
                            {currentPage > 2 && <PaginationItem>
                                <Pagination className="bg-emerald-500 rounded-md" >
                                    <PaginationLink
                                        href={`${concatenatedPath}`}
                                        onClick={(e) => handleClick('redirect', e)}
                                        className="bg-emerald-500">
                                        <ChevronsLeft />
                                    </PaginationLink>
                                </Pagination>
                            </PaginationItem>}
                            <PaginationItem>
                                {notes?.length !== 0 &&
                                    <PaginationNext
                                        href={`${concatenatedPath}`}
                                        onClick={(e) => handleClick('next', e)}
                                        className={`${isLastPage && !isEmptyPage && 'hidden'} bg-emerald-500`} />
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
    )

}