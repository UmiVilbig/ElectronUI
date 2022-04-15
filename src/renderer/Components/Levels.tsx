/* eslint-disable prettier/prettier */
import { FaPlus, FaPlay, FaStop, FaTrash } from 'react-icons/fa'

function Tasks() {
    return (
        <>
            <h1 style={{margin: '0', marginLeft: '5vw'}}>Levels</h1>
            <p style={{marginTop: '1vh', marginLeft: '5vw', color: '#909590', fontSize: '1.5vmax'}}>Grind levels</p>
            <div style={{display: 'flex', marginLeft: '4.5vw', marginTop: '5vh'}}>
                <button type='button' style={{display: 'flex'}}>
                    <FaPlus style={{width: '2.5vw', height: '2.5vh', color: '#9AE19D'}}/>
                    <p style={{fontSize: '1.3vmax', color: 'white'}}>Create Task</p>
                </button>
                <button type='button' style={{display: 'flex', marginLeft: '7vw'}}>
                    <FaPlay style={{width: '2.5vw', height: '2.5vh', color: '#9AE19D'}}/>
                    <p style={{fontSize: '1.3vmax', color: 'white'}}>Start All</p>
                </button>
                <button type='button' style={{display: 'flex', marginLeft: '7vw'}}>
                    <FaStop style={{width: '2.5vw', height: '2.5vh', color: '#9AE19D'}}/>
                    <p style={{fontSize: '1.3vmax', color: 'white'}}>Stop All</p>
                </button>
                <button type='button' style={{display: 'flex', marginLeft: '7vw'}}>
                    <FaTrash style={{width: '2.5vw', height: '2.5vh', color: '#9AE19D'}}/>
                    <p style={{fontSize: '1.3vmax', color: 'white'}}>Delete All</p>
                </button>
            </div>
            <div style={{display: 'flex', marginLeft: '5vw', marginTop: '5vh', color: '#909590'}}>
                <p>Account</p>
                <p style={{marginLeft: '30vw'}}>Status</p>
                <p style={{marginLeft: '15vw'}}>Action</p>
            </div>
            <hr style={{width: '60vw', marginLeft: '5vw', borderColor: '#909590'}}/>
        </>
    );
}

export default Tasks;
