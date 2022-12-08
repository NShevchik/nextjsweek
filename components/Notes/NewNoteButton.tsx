import { BsFillFileEarmarkFill } from "react-icons/bs"
import { useNewNote } from "../../store/store"

export const NewNoteButton = () => {
    const changeNewNote = useNewNote((state) => state.newNoteEdit)
    return (
        <div onClick={() => changeNewNote()} className="bg-orange w-full rounded-[30px] cursor-pointer">
            <div className="py-[15px] flex flex-row items-center">
                <div className="text-white opacity-50 pl-[20px]">
                    <BsFillFileEarmarkFill />
                </div>
                <div className="text-[13px] text-white pl-[50px]">
                    New Note
                </div>
            </div>
        </div>
    )
}
