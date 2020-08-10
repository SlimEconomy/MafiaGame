import React, { useState, useEffect } from 'react'
import shuffle from "../Shuffle"
import assignRoles from '../AssignRoles'
import Participants from './Participants'
import { LooseObject } from "../AssignRoles"

interface Props {
    startGame: () => void;
    roles: Array<string>;
    players: Array<string>;
}

const StartGame: React.FC<Props> = ({ players, roles }) => {
    const [activePlayers, setActivePlayers] = useState<LooseObject>({})
    const [deadPlayers, setDeadPlayers] = useState<LooseObject>({});

    useEffect(() => {
        shuffle(players);
        shuffle(roles);
        setActivePlayers(assignRoles(players, roles))
    }, [])

    const deleteParticipant = (player: string, role?: string): void => { //transfer an active player to a dead one
        if (role) {
            const index = activePlayers[role].indexOf(player); //get index of this player in the role array
            let deadPlayer: string = "";
            if (index > -1) {
                deadPlayer = activePlayers[role][index]; //save the dead player to push it to dead players
                activePlayers[role].splice(index, 1); //remove dead player from active players
            }
            setActivePlayers({ //to update state with spliced array
                ...activePlayers,
            })
            let deadPlayersObject: LooseObject = {
                ...deadPlayers,
                //if there are no dead players for a role, create a new array, else push it to the already dead players array
            }
            deadPlayersObject[role] ? deadPlayersObject[role].push(deadPlayer) : deadPlayersObject[role] = [deadPlayer]
            setDeadPlayers(deadPlayersObject)
        }
    }

    console.log(deadPlayers, activePlayers)

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
