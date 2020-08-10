import React from 'react'

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
        <div className={`participant ${role ? "participant-in-game" : ""}`} style={{ backgroundImage: bgImage ? `url("${bgImage}")` : "" }}>
            <h3>{participant}</h3>
            {deleteFunction &&
                <div onClick={() => deleteFunction(participant, role)}>
                    <i className="fas fa-trash"></i>
                </div>}
        </div>
    )
}

export default Participant
