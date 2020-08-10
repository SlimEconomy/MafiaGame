import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './Components/Input';
import Participants from './Components/Participants';
import StartGame from './Components/StartGame';
import { Button } from '@material-ui/core';


function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const playersFromStorage: null | string = localStorage.getItem("players");
    const playersArray: Array<string> = playersFromStorage ? JSON.parse(playersFromStorage) : [];
    const rolesFromStorage: string | null = localStorage.getItem("roles");
    const rolesArray: Array<string> = rolesFromStorage ? JSON.parse(rolesFromStorage) : [];
    setPlayers(playersArray);
    setRoles(rolesArray);
  }, [])

  const toggleStart = () => {
    if (players.length !== roles.length) return alert("Players and roles must be the same amount.");
    setStarted(!started);
    //save state in local storage
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  const addPlayer = (participant: string) => {
    if (players.includes(participant)) alert("Player already exists.")
    else setPlayers([...players, participant])
  }

  const addRole = (participant: string) => {
    setRoles([...roles, participant])
  }

  const deleteRole = (participant: string) => {
    setRoles(roles.filter(role => role !== participant))
  }

  const deletePlayer = (participant: string) => {
    setPlayers(players.filter(player => player !== participant))
  }

  return (
    <div className="App">
      <h1>MafiaGame</h1>
      {
        started ?
          <StartGame startGame={toggleStart} players={players} roles={roles} /> :
          <>
            <div className="inputs">
              <div className="roles participants">
                <Input label="Role" add={addRole} labelColor="green" />
                <Participants participants={roles} deleteFunction={deleteRole} />
              </div>
              <div className="players participants">
                <Input label="Player" add={addPlayer} labelColor="blue" />
                <Participants participants={players} deleteFunction={deletePlayer} />
              </div>
            </div>
            <Button variant="contained" color="primary" onClick={toggleStart}>Start game</Button>
          </>
      }
    </div>
  );
}

export default App;
