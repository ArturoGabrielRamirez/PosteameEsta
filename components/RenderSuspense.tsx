import { Suspense } from "react"

function RenderSuspense({ component: Component, fallback }: { component: React.LazyExoticComponent<React.ComponentType<any>>, fallback: React.ReactNode }) {
    return (
        <Suspense fallback={fallback}>
            <Component />
        </Suspense>
    )
}

export default RenderSuspense