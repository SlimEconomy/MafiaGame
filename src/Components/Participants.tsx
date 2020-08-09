import React from 'react'
import Participant from './Participant'

interface Props {
    participants: Array<string>,
    deleteFunction: (participant: string) => void
}

const Participants: React.FC<Props> = ({ participants, deleteFunction }) => {
    return (
        <div>
            {participants.map(participant => {
                return <Participant participant={participant} deleteFunction={deleteFunction} />
            })}
        </div>
    )
}

export default Participants
