import Nail from "./Nail"


export default function NailGroup() {

    return (
        <div className="flex justify-between p-2 w-full z-10 relative">
            <Nail />
            <Nail />
        </div>
    )

}