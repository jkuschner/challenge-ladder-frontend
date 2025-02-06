import React, { useState, useEffect } from 'react';
import PlayerService from "../services/PlayerService";

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        PlayerService.findAll()
            .then(response => { setPlayers(response.data); })
            .catch(error => {
                console.error("Error fetching(findAll) players: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;