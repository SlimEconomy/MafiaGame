import React from 'react'
import Participant from './Participant'
import { LooseObject } from "../types"

interface Props {
    participants: Array<string> | LooseObject;
    deleteFunction?: (participant: string, role?: string) => void
}

const Participants: React.FC<Props> = ({ participants, deleteFunction }) => {
    return (
        <div>
            {!Array.isArray(participants) && typeof participants === "object" ? //if object
                Object.keys(participants).map(key => {
                    const playerArray: Array<string> = participants[key]
                    const newArray: Array<JSX.Element> = []; //array of rendered components
                    for (let player of playerArray) {
                        newArray.push(<Participant key={key + player} participant={player} deleteFunction={deleteFunction} role={key} />)
                    }
                    return newArray;
                })
                : //if array
                participants.map(participant => {
                    return <Participant key={participant + Math.random()} participant={participant} deleteFunction={deleteFunction} />
                })}
        </div>
    )
}

export default Participants
