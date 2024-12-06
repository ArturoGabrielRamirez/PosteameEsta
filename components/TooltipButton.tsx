import React from "react"
import { Button } from "./ui/button"
import { TooltipButtonProps } from "@/types/types"

const TooltipButton: React.FC<TooltipButtonProps> = ({
    option,
    classProps,
    children,
    savePrevPath
}) => {
    return (
        <Button
            option={option}
            className={`${option.className} ${classProps}`}
            onClick={typeof option.action === 'string' ? savePrevPath : option.action}>
            <p>{React.createElement(option.icon)}</p>
            {children}
        </Button>
    )
}

export default TooltipButton