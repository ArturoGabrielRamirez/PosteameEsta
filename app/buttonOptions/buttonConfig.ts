import { PenSquare, Eye, Trash2, PenLineIcon, Ban, Save, CheckSquare } from 'lucide-react'
import { deleteNote } from '../actions/deleteNote'
import { getNotes } from '../actions/getNotes'


const handleClickDelete = async (propsData: { data: any }, setNotes: any, propsQuery: { userEmail: string, limit: number, currentPage: number }) => {
    const { userEmail, limit, currentPage } = propsQuery
    const currentPageToString = currentPage.toString()
    const res = await deleteNote(propsData.data)
    const { notes } = await getNotes(undefined, userEmail, currentPageToString, limit)
    setNotes(notes)
    return res
}

const handleClickToFalse = (propsData: { setIsActive: (arg0: boolean) => void }) => {
    propsData.setIsActive(false)
}

const handleClickToTrue = (propsData: { setIsActive: (arg0: boolean) => void }) => {
    propsData.setIsActive(true)
}

export const buttonConfig = (propsData: { data: any; handleClickSave: any; setIsActive: ((arg0: boolean) => void) }, setNotes: any, propsQuery: { userEmail: string, limit: number, currentPage: number }) => ({
    'view': {
        action: `/note/${propsData.data}`,
        className: 'bg-cyan-800',
        classNameText: 'hidden sm:block',
        icon: Eye,
        text: 'Veamos Esta'
    },
    'delete': {
        action: () => handleClickDelete({ data: propsData.data }, setNotes, { userEmail: propsQuery.userEmail, currentPage: propsQuery.currentPage, limit: propsQuery.limit }),
        className: 'bg-red-600 flex items-center',
        classNameText: 'hidden sm:block',
        icon: Trash2,
        text: 'Eliminame Esta'
    },
    'edit': {
        action: () => handleClickToTrue({
            setIsActive: () => {
                propsData.setIsActive(true);
            },
        }),
        className: 'bg-teal-400',
        classNameText: 'hidden sm:block',
        icon: PenLineIcon,
        text: 'Editame Esta'
    },
    'cancel': {
        action: () => handleClickToFalse({
            setIsActive: () => {
                propsData.setIsActive(false)
            },
        }),
        className: 'bg-slate-700',
        classNameText: 'hidden sm:block',
        icon: Ban,
        text: 'Canceleame Esta',
    },
    'save': {
        action: propsData.handleClickSave,
        className: 'bg-emerald-500',
        classNameText: 'hidden sm:block',
        icon: Save,
        text: 'Reposteame Esta'
    },
    'new': {
        action: () => handleClickToTrue({
            setIsActive: () => {
                propsData.setIsActive(true);
            },
        }),
        className: 'xl:gap-2 bg-emerald-600 min-h-[100px] min-w-full text-md',
        classNameText: 'hidden sm:block',
        icon: PenSquare,
        text: 'Escribime Esta'
    },
    'create': {
        action: undefined,
        className: 'bg-green-400',
        classNameText: 'hidden sm:block',
        icon: CheckSquare,
        text: 'Posteame Esta!'

    }
})