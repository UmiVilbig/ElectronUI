/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
import { FaPlus, FaPlay, FaStop, FaTrash, FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import '../Styles/Levels.css'

function Tasks() {

    const [popup, setPopup] = useState('none')
    const [notFilled, setnotFilled] = useState('none')
    const [tasks, setTasks] = useState('')

    useEffect(() => {
        window.electron.ipcRenderer.getTasks('levels')
    },[])

    window.electron.ipcRenderer.replyTasks('get-tasks', (args) => {
        setTasks(JSON.stringify(args))
    })
    
    window.addEventListener("click", (event) => {
        const target = event.target as HTMLTextAreaElement
        if(target.className === "modal"){
            setPopup('none')
        }
    })

    function startHandle(taskName: string) {
        window.electron.ipcRenderer.startLevel(taskName)
    }

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
            }, 300)
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
                <button type='button' style={{display: 'flex', marginLeft: '7vw'}} onClick={() => {window.electron.ipcRenderer.runLevels()}}>
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
                <p>Name</p>
                <p style={{position: 'absolute', marginLeft: '34vw'}}>Status</p>
                <p style={{position: 'absolute', marginLeft: '53vw'}}>Action</p>
            </div>
            <hr style={{width: '60vw', marginLeft: '5vw', borderColor: '#909590'}}/>
            {Object.keys(tasks).length > 0? JSON.parse(tasks).map((taskArray: string) => {
                const mappingItem = JSON.parse(taskArray)
                return(
                <div style={{display: 'flex', position: 'relative', marginTop: '10px'}}>
                    <p style={{marginLeft: '5vw'}}>{mappingItem.name}</p>
                    <p style={{position: 'absolute', marginLeft: '38.5vw'}}>Stopped</p>
                    <p style={{position: 'absolute', marginLeft: '57vw'}}>
                        <FaPlay style={{marginLeft: '1w', color: '#9AE19D'}} onClick={() => startHandle(mappingItem.name)}/>
                        <FaStop style={{marginLeft: '1vw', color: '#9AE19D'}}/>
                        <FaEdit size="19px" style={{marginLeft: '1vw', color: '#9AE19D'}}/>
                    </p>
                </div>
                )
            }): <></>}
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
        </>
    );
}

export default Tasks;
