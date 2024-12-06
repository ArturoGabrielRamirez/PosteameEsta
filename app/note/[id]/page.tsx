import { getNotes } from "@/actions/getNotes"
import NoteDetails from "@/components/NoteDetails"
import { getServerSession } from "next-auth"


export default async function NoteDetailsContainer(props: { params: Promise<{ id: any }> }) {
    const params = await props.params;
    const session = await getServerSession()
    const userEmail = session?.user?.email as string
    const { id } = params
    const res = await getNotes(id, userEmail)

    return (
        <NoteDetails res={res} />
    )
}