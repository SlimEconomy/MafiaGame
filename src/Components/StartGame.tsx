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
    const [activePlayers, setActivePlayers] = useState<LooseObject>({})
    const [deadPlayers, setDeadPlayers] = useState({});

    useEffect(() => {
        shuffle(players);
        shuffle(roles);
        setActivePlayers(assignRoles(players, roles))
    }, [])

    const deleteParticipant = (player: string, role?: string): void => { //delete a dead player from the game
        if (role) {
            const index = activePlayers[role].indexOf(player); //get index of this player in the role array
            if (index > -1) {
                activePlayers[role].splice(index, 1);
            }
            setActivePlayers({ //to update state with spliced array
                ...activePlayers,
            })
        }
    }

    return (
        <div>
            {Object.keys(activePlayers).length !== 0 &&
                <>
                    <div>
                        <h3 style={{ color: "#00FF7F" }}>Active players</h3>
                        <Participants deleteFunction={deleteParticipant} participants={activePlayers} />
                    </div>
                    <div>
                        <h3 style={{ color: "#EA3C53" }}>Dead players</h3>
                        <Participants participants={deadPlayers} />
                    </div>
                </>
            }
        </div>
    )
}

export default StartGame
