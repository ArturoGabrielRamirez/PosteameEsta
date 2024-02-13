"use client"

import { toast } from "sonner"

export async function ToastSuspense({ paramsToast }: any) {

    return (
        <div>
            {toast.success(`${paramsToast}`)}
        </div>
    )


} 