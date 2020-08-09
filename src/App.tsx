import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Participants from './Components/Participants';
import Participant from './Components/Participant';


function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);

  const addPlayer = (participant: string) => {
    if (players.includes(participant)) alert("Player already exists.")
    else setPlayers([...players, participant])
  }

  const addRole = (participant: string) => {
    if (players.includes(participant)) alert("Player already exists.")
    else setRoles([...roles, participant])
  }

  const deleteRole = (participant: string) => {
    setRoles(roles.filter(role => role !== participant))
  }

  const deletePlayer = (participant: string) => {
    setPlayers(players.filter(player => player !== participant))
  }

  return (
    <div className="App">
      <h1>Mafia</h1>
      <div className="inputs">
        <div className="roles">
          <Input label="Role" add={addRole} labelColor="green" />
          <Participants participants={roles} deleteFunction={deleteRole} />
        </div>
        <div className="players">
          <Input label="Player" add={addPlayer} labelColor="blue" />
          <Participants participants={players} deleteFunction={deleteRole} />
        </div>
      </div>
    </div>
  );
}

export default App;
