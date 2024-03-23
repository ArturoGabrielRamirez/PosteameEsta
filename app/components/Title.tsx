import MiniPushPinGroup from "./MiniPushPinGroup";
import PaperBG from "./PaperBG";

export default function Title() {

    return (
        <div className="mx-10 hidden min-[1145px]:block relative shadow-md shadow-[rgba(0,0,0,0.8)] lg:max-w-[300px] xl:max-w-[500px]">
        <PaperBG>
            <div className="absolute flex flex-col justify-between p-2 w-full h-full">
                <MiniPushPinGroup />
                <h1 className="font-bold md:text-5xl min-w-full relative pl-4 text-black">POSTEAME ESTA!</h1>
                <MiniPushPinGroup />
            </div>
        </PaperBG>
        </div>
    )

}