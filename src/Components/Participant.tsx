import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { Role, Player } from "../types"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const isParticipantTypeofPlayer = (participant: Player | string) => {
    return !(typeof participant === "string");
}

interface Props {
    participant: string | Player;
    deleteFunction?: (participant: Player | string) => void;
    reviveParticipant?: (participant: Player | string) => void;
}

const Participant: React.FC<Props> = ({ participant, deleteFunction, reviveParticipant }) => {
    let bgImage: string = "";
    if (!(typeof participant === "string")) { //if typeof player
        try {
            bgImage = require(`../Images/${participant.role.toLowerCase()}.png`);
        }
        catch (err) {
            //default case: notfound
        }
    }
    return (
        <div className={`participant ${isParticipantTypeofPlayer(participant) ? "participant-in-game" : ""}`} style={{ backgroundImage: `url("${bgImage}")` }}>
            {!(typeof participant === "string") ? //if particiapnt is Player
                <div style={{ display: "flex" }}>
                    <h3>{participant.name}</h3>
                </div>
                : //else string
                <h3>{participant}</h3>
            }
            {deleteFunction &&
                <div onClick={() => deleteFunction(participant)} >
                    {isParticipantTypeofPlayer(participant) ? <CloseIcon color="error" fontSize="large" /> : <DeleteIcon color="error" />}
                </div>
            }
            {reviveParticipant &&
                <div onClick={() => reviveParticipant(participant)}>
                    <ArrowUpwardIcon fontSize="large" className="revive-icon" />
                </div>}
        </div>
    )
}

export default Participant
