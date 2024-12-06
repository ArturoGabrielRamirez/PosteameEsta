import { PenSquare, Eye, Trash2, PenLineIcon, Ban, Save, CheckSquare } from 'lucide-react'
import { deleteNote } from '@/actions/deleteNote'
import { getNotes } from '@/actions/getNotes'
import { propsButtonsData, propsButtonsQuery, propsHandleClickBoolean } from '@/types/types'



const handleClickDelete = async (propsData: { data: any }, setNotes: any, propsQuery: { userEmail: string, limit: number, currentPage: number }) => {

    const { userEmail, limit, currentPage } = propsQuery
    const currentPageToString = currentPage.toString()
    const res = await deleteNote(propsData.data)
    const { notes } = await getNotes(undefined, userEmail, currentPageToString, limit)

    setNotes(notes)

    return res

}

const handleClickBoolean = (propsData: propsHandleClickBoolean) => {
    propsData.setIsActive(propsData.isActive ? false : true)
}


export const buttonConfig = (propsData: propsButtonsData, setNotes: any, propsQuery: propsButtonsQuery) => ({

    'view': {
        action: `/note/${propsData.data}`,
        className: 'min-w-[70px] p-2 bg-emerald-500',
        classNameText: '',
        icon: Eye,
        text: 'Mirame Esta'
    },

    'delete': {
        action: () => handleClickDelete({
            data: propsData.data
        },
            setNotes,
            {
                userEmail: propsQuery.userEmail,
                currentPage: propsQuery.currentPage,
                limit: propsQuery.limit
            }),
        className: 'min-w-[70px] p-2 bg-red-600',
        classNameText: '',
        icon: Trash2,
        text: 'Eliminame Esta'
    },

    'edit': {
        action: () => handleClickBoolean(propsData),
        className: 'min-w-[70px] p-2 bg-emerald-500',
        classNameText: '',
        icon: PenLineIcon,
        text: 'Editame Esta'
    },

    'cancel': {
        action: () => handleClickBoolean(propsData),
        className: 'min-w-[70px] p-2 bg-red-600',
        classNameText: '',
        icon: Ban,
        text: 'Cancelame Esta',
    },

    'save': {
        action: propsData.handleClickSave,
        className: 'min-w-[70px] p-2 bg-emerald-500',
        classNameText: '',
        icon: Save,
        text: 'Guardame Esta'
    },

    'new': {
        action: () => handleClickBoolean(propsData),
        className: 'min-w-[70px] p-2 xl:gap-2 bg-emerald-600 min-h-[80px] w-full',
        classNameText: '',
        icon: PenSquare,
        text: 'Escribime Esta'
    },

    'create': {
        action: undefined,
        className: 'min-w-[70px] p-2 bg-green-400',
        classNameText: '',
        icon: CheckSquare,
        text: 'Posteame Esta!'
    }

})