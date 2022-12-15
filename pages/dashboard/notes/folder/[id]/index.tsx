import { useRouter } from "next/router"
import { ContentWrapper } from "../../../../../components/ContentWrapper/ContentWrapper"
import { MainContainer } from "../../../../../components/MainContainer/MainContainer"
import { NewNote } from "../../../../../components/Notes/NewNote"
import { NotePreview } from "../../../../../components/Notes/NotePreview"
import { NotesNavigator } from "../../../../../components/Notes/NotesNavigator"
import { NotesPreview } from "../../../../../components/Notes/NotesPreview"
import { useNewNote } from "../../../../../store/store"


export default function Folder({ folder, notes }: { folder: any, notes: any }) {
    const noteStatus = useNewNote((state) => state.newNoteStatus)
    return (
        <MainContainer keywords='notes, note' title={folder.name}>
            <ContentWrapper style="white">
                <div className='py-[30px] min-h-[200px]'>
                    <div className='flex flex-row'>
                        <NotesNavigator />
                        <div className='flex-25 border-x-2 border-whale-white'>
                            <div>
                                <div className='flex border-b-2 border-whale-white justify-between p-[20px] items-center'>
                                    <div className='text-whale-bowhead'>
                                        {folder.name}
                                    </div>
                                </div>
                            </div>
                            {notes.length == 0 ?
                                <div className="text-[12px] p-[20px] text-center text-whale-gray">
                                    Folder is Empty :(
                                    <br />
                                    Click button: New Note
                                </div>
                                :
                                <>
                                    {notes.map((note: any) => {
                                        return <NotePreview key={note.id} name={note.name} date={note.date} note={note} folder={folder} />
                                    })}
                                </>
                            }
                            {noteStatus ? <NewNote folder={folder} /> : <></>}
                        </div>
                        <NotesPreview />
                    </div>
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }: { params: any }) {
    const responseFolder = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}`)
    const responseNotes = await fetch(`https://638f1f119cbdb0dbe31da265.mockapi.io/folders/${params.id}/notes`)
    const folder = await responseFolder.json()
    const notes = await responseNotes.json()
    return {
        props: { folder, notes },
    }
}