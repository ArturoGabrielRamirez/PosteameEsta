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
    AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@radix-ui/react-tooltip'


export default function ConfirmAlert({ className, option }: { className?: string, option: any }) {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <span>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span>
                                    <Button className={`${option.className} ${className}`}>
                                        <p>{React.createElement(option.icon)}</p>
                                        <TooltipContent>
                                            <p className={option.classNameText}>{option.text}</p>
                                        </TooltipContent>
                                    </Button>
                                </span>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>
                </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estas seguro que queres eliminar esta Nota?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción eliminara esta nota y no podra ser recuperada de nuevo de nuestra base de datos.
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