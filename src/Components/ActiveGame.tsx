import React, { useState, useEffect } from 'react'
import shuffle from "../shuffle"
import assignRoles from '../assignRoles'
import Participants from './Participants'
import { LooseObject, Player } from "../types"

interface Props {
    roles: Array<string>;
    players: Array<string>;
}

const ActiveGame: React.FC<Props> = ({ players, roles }) => {
    const [playersInGame, setPlayersInGame] = useState<LooseObject>({});

    useEffect(() => {
        const randomizedPlayersArray = shuffle(players);
        const randomizedRolesArray = shuffle(roles);
        setPlayersInGame(assignRoles(randomizedPlayersArray, randomizedRolesArray))
    }, [])

    const setStatusOfParticipant = (participant: Player | string, status: string) => {
        if (typeof participant !== "string") {
            const index = playersInGame[participant.role].indexOf(participant);
            const playerToDie = playersInGame[participant.role][index];
            if (status === "alive") playerToDie.isAlive = true;
            else if (status === "dead") playerToDie.isAlive = false;
            setPlayersInGame({ ...playersInGame }); //update state
        }
    }

    const killParticipant = (participant: Player | string) => {
        setStatusOfParticipant(participant, "dead");
    }

    const reviveParticipant = (participant: Player | string) => {
        setStatusOfParticipant(participant, "alive");

    }

    const getActivePlayers = (): Array<Player> => {
        return getPlayersByCondition(true);
    }

    const getDeadPlayers = (): Array<Player> => {
        return getPlayersByCondition(false);
    }

    const getPlayersByCondition = (condition: boolean): Array<Player> => { //true === getActivePlayers, false === getDeadPlayers
        return Object.keys(playersInGame).reduce((playersByCondition, role) => {
            const playersOfRole = playersInGame[role];
            const playersOfRoleByCondition = playersOfRole.filter(player => player.isAlive === condition)
            playersByCondition.push(...playersOfRoleByCondition);
            return playersByCondition;
        }, [] as Array<Player>)
    }

    return (
        <div>
            {Object.keys(playersInGame).length !== 0 &&
                <>
                    <div>
                        <h3 style={{ color: "#00FF7F" }}>Active players</h3>
                        <Participants deleteParticipant={killParticipant} participants={getActivePlayers()} />
                    </div>
                    <div>
                        <h3 style={{ color: "#EA3C53" }}>Dead players</h3>
                        <Participants participants={getDeadPlayers()} reviveParticipant={reviveParticipant} />
                    </div>
                </>
            }
        </div>
    )
}

export default ActiveGame
