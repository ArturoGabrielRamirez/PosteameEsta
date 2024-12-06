'use client'

import Link from 'next/link'

import { buttonConfig } from '@/lib/buttonOptions/buttonConfig'
import React from 'react'
import ConfirmAlert from './ConfirmAlert'
import { useNotesContext } from './NotesProvider'
import { ButtonType } from '@/types/types'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import TooltipButton from './TooltipButton'

export default function Buttons({
    classProps,
    option,
    data,
    editStates }
    : {
        classProps?: string,
        option: ButtonType,
        data?: any,
        editStates?: any
    }) {

    const {
        setNotes,
        userEmail,
        limit,
        currentPage,
        savePrevPath } = useNotesContext()
    const { handleClickSave, isActive, setIsActive } = editStates || {}
    const propsData = { data, handleClickSave, isActive, setIsActive }
    const propsQuery = { userEmail, limit, currentPage }
    const selectedOption = buttonConfig(propsData, setNotes, propsQuery as any)[option]

    return (
        <>
            {
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            className={`relative ${option === 'new' && 'w-full'}`}
                            asChild>
                            <span>
                                {option === 'delete' ? (
                                    <ConfirmAlert option={selectedOption} />
                                )
                                    : (<TooltipButton
                                        option={selectedOption}
                                        classProps={classProps}
                                        savePrevPath={savePrevPath}>
                                        {option === 'view' && (
                                            <Link
                                                href={selectedOption.action}
                                                className='size-full absolute' />)}
                                        {option === 'new' && (
                                            <span className="text-[24px]">
                                                {selectedOption.text}
                                            </span>
                                        )}
                                        <TooltipContent>
                                            <p className={selectedOption.classNameText}>
                                                {selectedOption.text}
                                            </p>
                                        </TooltipContent>
                                    </TooltipButton>
                                    )
                                }
                            </span>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
            }
        </>
    )

}