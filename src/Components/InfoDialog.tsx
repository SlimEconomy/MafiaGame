import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import SupportedRole from './SupportedRole';
import { Player } from '../types';
const supportedRoles = require("../Data/supportedRoles");

interface Props {
    //whatToDisplay: string //either listing (supported) roles or describing role and player
    player?: Player
    title: string
}

const InfoDialog: React.FC<Props> = ({ title, player }) => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="text" color="primary" onClick={openDialog}>
                <InfoIcon className="info-icon" />
            </Button>
            <Dialog
                open={open}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {player ?
                            player.name
                            :
                            supportedRoles.map((supportedRole: string) => <SupportedRole key={supportedRole} role={supportedRole} />)
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary" autoFocus>
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InfoDialog
