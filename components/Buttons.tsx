'use client'

import Link from 'next/link'

import { buttonConfig } from '@/lib/buttonOptions/buttonConfig'
import React from 'react'
import ConfirmAlert from './ConfirmAlert'
import { useNotesContext } from './NotesProvider'
import { ButtonType } from '@/types/types'
import { Button } from './ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"





export default function Buttons({ option, data, editStates }: { option: ButtonType, data?: any, editStates?: any }) {

    const { setNotes, userEmail, limit, currentPage, savePrevPath } = useNotesContext()
    const { handleClickSave, isActive, setIsActive } = editStates || {}
    const propsData = { data, handleClickSave, isActive, setIsActive }
    const propsQuery = { userEmail, limit, currentPage }
    const selectedOption = buttonConfig(propsData, setNotes, propsQuery as any)[option]

    return (
        <>
            {
                <TooltipProvider>
                    {
                        option === 'view' ?

                            <Tooltip>
                                <Button
                                    asChild
                                    option={selectedOption}
                                    className={selectedOption.className}
                                    onClick={savePrevPath}>
                                    <Link href={selectedOption.action}>
                                        <TooltipTrigger>
                                            <span>{React.createElement(selectedOption.icon)}</span>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p className={selectedOption.classNameText}>{selectedOption.text}</p>
                                        </TooltipContent>
                                    </Link>
                                </Button>
                            </Tooltip>
                            :
                            option === 'create' ?
                                <Tooltip>
                                    <Button
                                        option={selectedOption}
                                        className={selectedOption.className}>
                                        <TooltipTrigger>
                                            <span>{React.createElement(selectedOption.icon)}</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className={selectedOption.classNameText}>{selectedOption.text}</p>
                                        </TooltipContent>
                                    </Button>
                                </Tooltip>
                                :
                                (option === 'delete' ?
                                    <Tooltip>
                                        <ConfirmAlert
                                            option={selectedOption}
                                        />
                                    </Tooltip>
                                    :
                                    <Tooltip>
                                        <Button option={selectedOption}
                                            onClick={selectedOption.action}
                                            className={selectedOption.className}
                                        >
                                            <TooltipTrigger>
                                                <span>{React.createElement(selectedOption.icon)}</span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className={selectedOption.classNameText}>{selectedOption.text}</p>
                                            </TooltipContent>
                                        </Button>
                                    </Tooltip>
                                )



                    }
                </TooltipProvider>
            }
        </>
    )

}