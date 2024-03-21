'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { buttonConfig } from '../buttonOptions/buttonConfig'
import React from 'react'
import ConfirmAlert from './ConfirmAlert'
import { useNotesContext } from '../components/NotesProvider'
import { ButtonType } from '../types/types'


export default function Buttons({ option, data, editStates }: { option: ButtonType, data?: any, editStates?: any }) {
    
    const { setNotes, userEmail, limit, currentPage, savePrevPath } = useNotesContext()
    const { handleClickSave, isActive, setIsActive } = editStates || {}
    const propsData = { data, handleClickSave, isActive, setIsActive }
    const propsQuery = { userEmail, limit, currentPage }
    const selectedOption = buttonConfig(propsData, setNotes, propsQuery as any)[option]

    return (
        option === 'view' ?
            <>
                <Button
                    asChild
                    option={selectedOption}
                    className={selectedOption.className}
                    onClick={savePrevPath}>
                    <Link href={selectedOption.action}>
                        <span>{React.createElement(selectedOption.icon)}</span>
                        <p className={selectedOption.classNameText}>{selectedOption.text}</p>
                    </Link>
                </Button>
            </>
            :
            option === 'create' ?
                <Button
                    option={selectedOption}
                    className={selectedOption.className}>
                    <span>{React.createElement(selectedOption.icon)}</span>
                    <p className={selectedOption.classNameText}>{selectedOption.text}</p>
                </Button>
                :
                (option === 'delete' ?
                    <>
                        <ConfirmAlert
                            option={selectedOption}
                        />
                    </>
                    :
                    <>
                        <Button option={selectedOption}
                            onClick={selectedOption.action}
                            className={selectedOption.className}
                        >
                            <span>{React.createElement(selectedOption.icon)}</span>
                            <p className={selectedOption.classNameText}>{selectedOption.text}</p>
                        </Button>
                    </>
                )
    )

}