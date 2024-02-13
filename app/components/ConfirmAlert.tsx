import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export default function ConfirmAlert({ option }: { option: any }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger><div className='flex'>
                <span>{React.createElement(option.icon)}</span>
                <p className={option.classNameText}>{option.text}</p></div></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Estas seguro que queres eliminar esta Nota?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta accion eliminara esta nota y no podra ser recuperada de nuevo de nuestros servidores.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>No, Cancelar.</AlertDialogCancel>
                    <AlertDialogAction onClick={option.action}>Si, Eliminar.</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}