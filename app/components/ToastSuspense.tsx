"use client"

import { toast } from "sonner"

export function ToastSuspense({ ToastMethod, paramsToast }: { ToastMethod: keyof typeof toast, paramsToast: any }) {


    return (
        <div>
            {toast[ToastMethod](paramsToast)}
        </div>
    )


} 