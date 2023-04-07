import React, { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../api/ajaxHelpers';
import PlayerForm from './PlayerForm';
import Players from './Players';


const Main = () => {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        const getPuppies = async () => {
            const puppies = await fetchAllPlayers();
            console.log(puppies)
        }
        getPuppies();
      }, []);
    




    return (
        <>
        <PlayerForm />
        <Players />
        </>
    )
}

export default Main;