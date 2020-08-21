import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './Components/Input';
import Participants from './Components/Participants';
import ActiveGame from './Components/ActiveGame';
import Button from '@material-ui/core/Button';
import InfoDialog from './Components/InfoDialog';
import { Player, Role, RolesObject } from "./types"
import RoleInput from './Components/RoleInput';
import { initializeRoleObject } from './initializeRoleObject';
const supportedRoles = require("./Data/supportedRoles.json")


function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [roles, setRoles] = useState<RolesObject>({});
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const playersFromStorage = localStorage.getItem("players");
    const playersArray: Array<string> = playersFromStorage ? JSON.parse(playersFromStorage) : [];
    const rolesFromStorage = localStorage.getItem("roles");
    const rolesObject = rolesFromStorage ? JSON.parse(rolesFromStorage) : {};
    const initialRoleObject = initializeRoleObject();
    setPlayers(playersArray);
    if (Object.keys(rolesObject).length !== 0) {
      setRoles(rolesObject);
    }
    else {
      setRoles(initialRoleObject);
    }
  }, [])

  const toggleStart = () => {
    const amountOfParticipatingRoles = Object.values(roles).reduce((amount, total) => total + amount);
    console.log(players, amountOfParticipatingRoles);
    if (!players.length && !amountOfParticipatingRoles) return alert("Can't start a game with no participants.");
    if (players.length !== amountOfParticipatingRoles) return alert("Players and roles must be the same amount.");
    setGameStarted(!gameStarted);
    //save state in local storage when game is started
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  const addPlayer = (participant: string) => {
    if (players.includes(participant)) alert("Player already exists.")
    else setPlayers([...players, participant])
  }

  const deletePlayer = (participant: string | Player) => {
    if (typeof participant === "string") {
      const updatedArray = players.filter(player => player !== participant);
      localStorage.setItem("players", JSON.stringify(updatedArray));
      setPlayers(updatedArray);
    }
  }

  const rolesArray: Array<string> = Object.keys(roles).reduce((rolesArray, role) => {
    const amountOfCurrentRole = roles[role];
    for (let i = 0; i < amountOfCurrentRole; i++) {
      rolesArray.push(role);
    }
    return rolesArray;
  }, [] as Array<string>);

  const updateAmountOfRole = (role: Role, amount: number) => {
    setRoles({
      ...roles,
      [role]: amount
    })
  }

  return (
    <div className="App">
      <div className="info-and-title">
        <h1>MafiaGame</h1>
        <InfoDialog title="Supported roles" />
      </div>
      {gameStarted && <div className="go-back-button">
        <Button variant="contained" color="secondary" size="small" onClick={toggleStart}>New game/Go back</Button>
      </div>
      }
      {
        gameStarted ?
          <ActiveGame players={players} roles={rolesArray} /> :
          <>
            <div className="inputs">
              <div className="roles participants">
                {supportedRoles.map((role: Role) => <RoleInput role={role} amount={roles[role]} updateAmount={updateAmountOfRole} />)}
              </div>
              <div className="players participants">
                <Input label="Player" addParticipant={addPlayer} labelColor="blue" />
                <Participants participants={players} deleteParticipant={deletePlayer} />
              </div>
            </div>
            <Button variant="contained" color="primary" onClick={toggleStart}>Start game</Button>
          </>
      }
    </div>
  );
}

export default App;
