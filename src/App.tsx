import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Participants from './Components/Participants';
import Participant from './Components/Participant';
import StartGame from './Components/StartGame';


function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  const toggleStart = () => {
    setStarted(!started);
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
            <button onClick={toggleStart}>Start game</button>
          </>
      }
    </div>
  );
}

export default App;
