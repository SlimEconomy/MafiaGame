import React from 'react'

interface Props {
    participant: string,
    deleteFunction: (participant: string) => void
}

const Participant: React.FC<Props> = ({ participant, deleteFunction }) => {
    return (
        <div className="participant">
            <h3>{participant}</h3>
            <div onClick={() => deleteFunction(participant)}>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default Participant
