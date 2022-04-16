/* eslint-disable array-callback-return */
/* eslint-disable prettier/prettier */
import { FaPlus, FaPlay, FaStop, FaTrash } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import '../Styles/Levels.css'

function Tasks() {

    const [popup, setPopup] = useState('none')
    const [notFilled, setnotFilled] = useState('none')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        window.electron.ipcRenderer.getTasks('levels')
    },[])

    window.electron.ipcRenderer.replyTasks('get-tasks', (args) => {
        setTasks(args)
    })
    
    window.addEventListener("click", (event) => {
        const target = event.target as HTMLTextAreaElement
        if(target.className === "modal"){
            setPopup('none')
        }
    })

    function clearForm() {
        (document.getElementById('name') as HTMLInputElement).value = '';
        (document.getElementById('discordToken') as HTMLInputElement).value = '';
        (document.getElementById('channelID') as HTMLInputElement).value = '';
        (document.getElementById('delay') as HTMLInputElement).value = '';
    }

    function createTask(){
        const name = (document.getElementById('name') as HTMLInputElement).value
        const token = (document.getElementById('discordToken') as HTMLInputElement).value
        const id = (document.getElementById('channelID') as HTMLInputElement).value
        const delay = (document.getElementById('delay') as HTMLInputElement).value
        const payload = {
            "name": name,
            "token": token,
            "id": id,
            "delay": delay,
        }
        if(name === '' || token === '' || id === '' || delay === '') {
            setnotFilled('block')
            setPopup('block')
        } else {
            window.electron.ipcRenderer.createTask(payload, name)
            setPopup('none')
            clearForm()
            setTimeout(() => {
                window.electron.ipcRenderer.getTasks('levels')
            }, 500)
        }
    }
    return (
        <>
            <h1 style={{margin: '0', marginLeft: '5vw'}}>Levels</h1>
            <p style={{marginTop: '1vh', marginLeft: '5vw', color: '#909590', fontSize: '1.5vmax'}}>Grind levels</p>
            <div style={{display: 'flex', marginLeft: '4.5vw', marginTop: '5vh'}}>
                <button type='button' style={{display: 'flex'}} onClick={() => {setPopup('block')}}>
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
            <button type='button' onClick={() => {window.electron.ipcRenderer.runLevels()}}>Yo</button>
            <div className='modal' style={{display: popup}}>
                <div className='modal-content'>                    
                    <h1 style={{textAlign: 'center'}}>Create Task</h1>
                    <form>
                        <p className='labels'>Name:</p>
                        <input className='inputBox' id="name" type="text" placeholder='My task' />
                        <p className='labels'>Discord Token:</p>
                        <input className='inputBox' id="discordToken" type="input" placeholder="ABCEFGHIJK" />
                        <p className='labels'>Channel ID:</p>
                        <input className='inputBox' id="channelID" type="number" placeholder="1234567890" />
                        <p className='labels'>Delay:</p>
                        <input className='inputBox' id="delay" type="number" placeholder="30" required/><br/>
                        <button className='submitBtn' type='button' onClick={() => {createTask()}}>Create</button>
                    </form>
                    <h3 style={{display: notFilled, color: '#537A5A', fontWeight: 'bolder'}}>Please fill in all fields</h3>
                </div>
            </div>
            {Object.keys(tasks).length > 0? tasks.map((taskArray) => {
                return(
                <h1>{taskArray}</h1>
                )
            }): <></>}
        </>
    );
}

export default Tasks;
