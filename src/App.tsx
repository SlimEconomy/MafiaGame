import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './Components/Input';
import Participants from './Components/Participants';
import StartGame from './Components/StartGame';
import Button from '@material-ui/core/Button';
import InfoDialog from './Components/InfoDialog';


function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const playersFromStorage = localStorage.getItem("players");
    const playersArray: Array<string> = playersFromStorage ? JSON.parse(playersFromStorage) : [];
    const rolesFromStorage = localStorage.getItem("roles");
    const rolesArray: Array<string> = rolesFromStorage ? JSON.parse(rolesFromStorage) : [];
    setPlayers(playersArray);
    setRoles(rolesArray);
  }, [])

  const toggleStart = () => {
    if (!players.length && !roles.length) return alert("Can't start a game with no participants.")
    if (players.length !== roles.length) return alert("Players and roles must be the same amount.");
    setGameStarted(!gameStarted);
    //save state in local storage when game is started
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
      <div className="info-and-title">
        <h1>MafiaGame</h1>
        <InfoDialog />
      </div>
      {gameStarted && <div className="go-back-button">
        <Button variant="contained" color="secondary" size="small" onClick={toggleStart}>New game/Go back</Button>
      </div>
      }
      {
        gameStarted ?
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
