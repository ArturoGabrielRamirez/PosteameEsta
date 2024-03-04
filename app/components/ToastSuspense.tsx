"use client"

import { toast } from "sonner"

export function ToastSuspense({ paramsToast, ToastMethod }: { paramsToast: any; ToastMethod: keyof typeof toast }) {

    console.log(paramsToast, ToastMethod)

    return (
        <div>
            {toast[ToastMethod](paramsToast)}
        </div>
    )


} 