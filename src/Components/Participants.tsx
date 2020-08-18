import React from 'react'
import Participant from './Participant'
import { LooseObject, Role, Player } from "../types"

interface Props {
    participants: Array<string> | LooseObject | Array<Player>;
    deleteParticipant?: (participant: string | Player) => void;
}

const Participants: React.FC<Props> = ({ participants, deleteParticipant: deleteFunction }) => {
    return (
        <div>
            {!Array.isArray(participants) ? //not array
                Object.keys(participants).map(role => {
                    const playerArray: Array<Player> = participants[role]
                    return playerArray.map((player: Player) => <Participant key={player.id} participant={player} deleteFunction={deleteFunction} />)
                })
                : //if array
                (participants as Array<Player | string>).map((participant: string | Player, index: number) => {
                    return <Participant key={typeof participant === "string" ? participant + index : participant.id} participant={participant} deleteFunction={deleteFunction} />
                })}
        </div>
    )
}

export default Participants
