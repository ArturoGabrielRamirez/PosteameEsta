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
import { Button } from '@/components/ui/button'


export default function ConfirmAlert({ option }: { option: any }) {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={option.className}>
                    <span>{React.createElement(option.icon)}</span>
                    <p className={option.classNameText}>{option.text}</p>
                </Button>
            </AlertDialogTrigger>
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