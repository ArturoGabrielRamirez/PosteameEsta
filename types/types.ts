import { Session } from "next-auth"
import { Note } from "@/interfaces/interfaces"

export type ButtonType = 'view' | 'delete' | 'edit' | 'cancel' | 'save' | 'new' | 'create'

export type Theme = 'light' | 'dark' | 'system'

export type ThemeTypes = {
    currentTheme: string | null
}

export type propsHandleClickBoolean = {
    isActive: boolean
    setIsActive: (arg0: boolean) => void
}

export type FormData = {
    title: string
    postItNote: string
}

export type propsButtonsData = {
    data: any
    handleClickSave: any
    isActive: boolean
    setIsActive: ((arg0: boolean) => void)
}

export type propsButtonsQuery = {
    userEmail: string
    limit: number
    currentPage: number
}

export type NotesContextType = {
    currentPage: number,
    handlePageChange: (action: string) => void,
    setNotes: (notes: Note[]) => void,
    isActive: boolean,
    setIsActive: (boolean: boolean) => void,
    notes: Note[],
    session: Session | null,
    userEmail: string,
    limit: string,
    concatenatedPath: any,
    savePrevPath: () => void,
    loading: boolean
}

type ButtonOption = {
    action: (() => void) | string | undefined;
    className: string;
    classNameText: string;
    icon: React.ElementType;
    text: string;
};

export type TooltipButtonProps = {
    option: ButtonOption;
    classProps?: string;
    children?: React.ReactNode;
    savePrevPath: () => void;
};