import React, { useState, useEffect } from 'react'
import shuffle from "../Shuffle"
import assignRoles from '../AssignRoles'
import Participant from './Participant'
import Participants from './Participants'
import { LooseObject } from "../AssignRoles"

interface Props {
    startGame: () => void;
    roles: Array<string>;
    players: Array<string>;
}

const StartGame: React.FC<Props> = ({ players, roles }) => {
    const [assignedRoles, setAssignedRoles] = useState<LooseObject>({})

    useEffect(() => {
        shuffle(players);
        shuffle(roles);
        setAssignedRoles(assignRoles(players, roles))
    }, [])

    const deleteParticipant = (player: string, role?: string): void => { //delete a dead player from the game
        if (role) {
            const index = assignedRoles[role].indexOf(player); //get index of this player in the role array
            if (index > -1) {
                assignedRoles[role].splice(index, 1);
            }
            setAssignedRoles({ //to update state with spliced array
                ...assignedRoles,
            })
        }
    }

    return (
        <div>
            {Object.keys(assignedRoles).length !== 0 && <Participants deleteFunction={deleteParticipant} participants={assignedRoles} />}
        </div>
    )
}

export default StartGame
