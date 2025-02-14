import { Note } from "@/interfaces/interfaces"
import SkeletonCard from "./SkeletonCard"


export default function SkeletonArray({ notes }: { notes: Note[] }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: notes.length }, (_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}