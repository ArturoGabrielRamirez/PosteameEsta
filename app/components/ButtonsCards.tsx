"use client"

import { deleteNote } from "../actions/deleteNote"

export default function ButtonsCards(data: any) {

    const handleClick = async () => {
        const res = await deleteNote(data)
        console.log(res)

    }

    return (<div className="flex justify-around">
        <button className="bg-cyan-700 rounded-sm p-2 px-5">Edit</button>
        <button onClick={handleClick} className="bg-red-600 rounded-sm p-2">Delete</button>
    </div>)
}