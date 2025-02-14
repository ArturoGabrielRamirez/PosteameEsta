import { Note } from "@/interfaces/interfaces";
import { Skeleton } from "./ui/skeleton";


export default function SkeletonTemplate({ isLastPage, loading, notes }: {
    isLastPage: boolean,
    loading: boolean,
    notes: Note[] | undefined
}) {

    return (
        <Skeleton className={` ${isLastPage && notes !== undefined && loading ? 'w-full h-full' : 'max-h-[calc(30vh-30px)] max-w-[300px] flex justify-center items-center'}`} />
    )

}