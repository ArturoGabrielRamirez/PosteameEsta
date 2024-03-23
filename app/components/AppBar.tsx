import NailGroup from "./NailGroup"
import CatLogoWithBG from "./CatLogoWithBG"
import Title from "./Title"
import SessionOptionBar from "./SessionOptionBar"

export default function AppBar() {

    return (
        <div className='flex bg-gradient-to-bl from-[#92410ee9] via-[#733007] to-[#532508] border-t-8 border-r-0 border-b-8 border-l-8 border-t-[#7c370fde] border-orange-950 border-double p-4'>
            <div className="granulated xl:flex xl:flex-col xl:justify-between w-full shadow-md shadow-[rgba(0,0,0,0.9)]">
                <NailGroup />
                <div className="flex items-center flex-row justify-between xl:flex-col flex-1">
                    <CatLogoWithBG />
                    <Title />
                    <div className="relative rotate-90 sm:rotate-0 max-w-[190px] sm:max-w-[300px] md:max-w-[360px] xl:max-w-[350px] shadow-md shadow-[rgba(0,0,0,0.8)]">
                        <SessionOptionBar />
                    </div>
                </div>
                <NailGroup />
            </div>
        </div>
    )
    
}