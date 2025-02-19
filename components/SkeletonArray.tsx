import { Note } from "@/interfaces/interfaces"
import SkeletonCard from "./SkeletonCard"
import { useNotesContext } from "./NotesProvider"


export default function SkeletonArray({ notes }: { notes: Note[] }) {

    const {limit} = useNotesContext()
    const limitToNumber = Number(limit)
    const remainder = notes.length % limitToNumber
    const missingNotes = remainder === 0 ? 0 : limitToNumber - remainder
    const notesSubstitute = Array(missingNotes || 10).fill({ isPlaceholder: true })
    const finalNotes = [...notes, ...notesSubstitute]

    return (
        <>
            {finalNotes?.map((note, i) => (
                note.isPlaceholder ? (
                    <div key={`placeholder-${i}`} className="h-[calc(30vh-30px)] w-full z-10" />
                ) : (
                    <SkeletonCard key={note._id || `note-${i}`} />
                )
            ))}
        </>
    )
}