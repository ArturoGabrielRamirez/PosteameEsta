import { Skeleton } from "./ui/skeleton";

export default function SkeletonTemplate({ type }: {
    type: string
}) {

    return (
        <Skeleton className={`${type === 'paginator' ? 'max-h-[calc(25vh-20px)]' : 'max-h-[calc(30vh-30px)]'} flex justify-center items-center`} >
            {type === 'createNote' && (
                <>
                    <div className="bg-gray-700 w-full h-[80px] rounded-sm flex justify-center items-center gap-3" >
                        <div className="size-[24px] bg-gray-900 rouded-sm" />
                        <div className="w-[175px] h-[20px] bg-gray-900 rounded-sm" />
                    </div>
                    <div className="bg-gray-900 size-36 absolute rounded-sm opacity-30" />

                </>
            )
            }
            {type === 'paginator' && (
                <div className="flex gap-2 justify-center items-center">
                    <div className="bg-gray-900 w-10 h-10 rounded-sm" />
                    <div className="bg-gray-900 w-10 h-10 rounded-sm" />
                    <div className="bg-gray-900 w-10 h-10 rounded-sm" />
                </div>
            )}

        </Skeleton>
    )

}