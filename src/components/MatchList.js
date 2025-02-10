import { Temporal } from '@js-temporal/polyfill';
import React, {useState, useEffect} from 'react';
import MatchService from '../services/MatchService';
import PlayerService from '../services/PlayerService';

function MatchList() {
    const [matches, setMatches] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        MatchService.findAll()
            .then(response => { setMatches(response.data); })
            .catch(error => {
                console.error("Error fetching(findAll) matches: ", error);
            });
    }, []);

    useEffect(() => {
        PlayerService.findAll()
            .then(response => { setPlayers(response.data); })
            .catch(error => {
                console.error("Error fetching(findAll) players for id:player mappings", error);
            });
    }, []);

    const playerIdMap = new Map();
    players.forEach(player => {
        playerIdMap.set(player.id, player.name);
    })

    return (
        <div class="match-list">
            <h1>Matches</h1>
            <table>
            <thead>
                <tr>
                    <th>Players</th>
                    <th>Result</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {matches.map(match => (
                    <tr>
                        <td>
                            {playerIdMap.get(match.player1)} vs. {playerIdMap.get(match.player2)}
                        </td>
                        <td>{match.score}</td>
                        <td>{Temporal.PlainDate.from(match.matchDate).toString()}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default MatchList;