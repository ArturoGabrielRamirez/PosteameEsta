import { Note } from "@/interfaces/interfaces"
import SkeletonCard from "./SkeletonCard"
import { useNotesContext } from "./NotesProvider"


export default function SkeletonArray({ notes }: { notes: Note[] }) {

    const {limit} = useNotesContext()
    const limitToNumber = Number(limit)
    const remainder = notes.length % limitToNumber
    const missingNotes = remainder === 0 ? 0 : limitToNumber - remainder
    const notesSubstitute = Array(missingNotes === 0 ? 10 : missingNotes).fill({ isPlaceholder: true })
    const finalNotes = [...notes, ...notesSubstitute].slice(0, Number(limit))

    return (
        <>
            {finalNotes?.map((note, i) => (
                note.isPlaceholder ? (
                    <div key={`placeholder-${i}`} className="max-h-[calc(30vh-30px)] min-h-[240px] w-full z-10" />
                ) : (
                    <SkeletonCard key={note._id || `note-${i}`} />
                )
            ))}
        </>
    )
}