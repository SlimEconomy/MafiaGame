import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
    participant: string,
    deleteFunction?: (participant: string, role?: string) => void;
    role?: string
}

const Participant: React.FC<Props> = ({ participant, deleteFunction, role }) => {
    let bgImage: string = "";
    if (role) {
        try {
            bgImage = require(`../Images/${role.toLowerCase()}.png`);
        }
        catch (err) {
            //default case: notfound
        }
    }
    return (
        <div className={`participant ${role ? "participant-in-game" : ""}`} style={{ backgroundImage: `url("${bgImage}")` }}>
            <h3>{participant}</h3>
            {deleteFunction && //need to check because deleteFunction is optional
                <div onClick={() => deleteFunction(participant, role)}>
                    {role ? <CloseIcon color="error" fontSize="large" /> : <DeleteIcon color="error" />}
                </div>}
        </div>
    )
}

export default Participant
