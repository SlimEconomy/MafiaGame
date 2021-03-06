import React from 'react'
import Participant from './Participant'
import { LooseObject, Role, Player } from "../types"

interface Props {
    participants: Array<string> | LooseObject | Array<Player>;
    deleteParticipant?: (participant: string | Player) => void;
    reviveParticipant?: (participant: string | Player) => void;
}

const Participants: React.FC<Props> = ({ participants, deleteParticipant: deleteFunction, reviveParticipant }) => {
    return (
        <div>
            {
                (participants as Array<Player | string>).map((participant: string | Player, index: number) => {
                    return <Participant key={typeof participant === "string" ? participant + index : participant.id} participant={participant} deleteFunction={deleteFunction} reviveParticipant={reviveParticipant} />
                })
            }
        </div>
    )
}

export default Participants
