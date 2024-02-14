import { PenSquare, Eye, Trash2, PenLineIcon, Ban, Save } from 'lucide-react'
import { deleteNote } from '../actions/deleteNote'

const handleClickDelete = async (propsData: { data: any }) => {
    const res = await deleteNote(propsData.data)
    return res
}

const handleClickToFalse = (propsData: { setIsActive: (arg0: boolean) => void }) => {
    propsData.setIsActive(false)
}

const handleClickToTrue = (propsData: { setIsActive: (arg0: boolean) => void }) => {
    propsData.setIsActive(true)
}

export const buttonConfig = (propsData: { data: any; handleClickSave: any; setIsActive: ((arg0: boolean) => void) }) => ({
    'view': {
        action: `/note/${propsData.data}`,
        className: 'bg-cyan-800',
        classNameText: 'hidden sm:block',
        icon: Eye,
        text: 'Veamos Esta'
    },
    'delete': {
        action: () => handleClickDelete({ data: propsData.data }),
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
            setIsActive:() => {
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
    }
})