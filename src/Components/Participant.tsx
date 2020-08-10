import React from 'react'
import getImageOfRole from '../ImageOfRole'

interface Props {
    participant: string,
    deleteFunction: (participant: string, role?: string) => void;
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
            bgImage = require(`../Images/notfound.png`);
        }
    }
    return (
        <div className="participant" style={{ backgroundImage: bgImage ? `url("${bgImage}")` : "" }}>
            <h3>{participant}</h3>
            <div onClick={() => deleteFunction(participant, role)}>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default Participant
