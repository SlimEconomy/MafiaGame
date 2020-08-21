import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { Role, Player } from "../types"
import InfoDialog from './InfoDialog';

const isParticipantTypeofPlayer = (participant: Player | string) => {
    return !(typeof participant === "string");
}

interface Props {
    participant: string | Player,
    deleteFunction?: (participant: Player | string) => void;
    role?: string
}

const Participant: React.FC<Props> = ({ participant, deleteFunction }) => {
    let bgImage: string = "";
    if (!(typeof participant === "string")) {
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
            {deleteFunction && //need to check because deleteFunction is optional
                <div onClick={() => deleteFunction(participant)} >
                    {isParticipantTypeofPlayer(participant) ? <CloseIcon color="error" fontSize="large" /> : <DeleteIcon color="error" />}
                </div>
                //TODO: add revert button for dead players
            }
        </div>
    )
}

export default Participant
