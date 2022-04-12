/* eslint-disable prettier/prettier */
import { useState } from "react";
import '../Styles/Navbar.css'
import { FaUserAlt, FaClipboardList, FaCog, FaDiscord } from 'react-icons/fa'
import Logo from '../../../assets/logo.png'

function Navbar() {
    const [task, setTask] = useState('#9AE19D')
    const [taskT, setTaskT] = useState('white')
    const [profile, setProfile] = useState('grey')
    const [profileT, setProfileT] = useState('grey')
    const [settings, setSettings] = useState('grey')
    const [settingsT, setSettingsT] = useState('grey')
    const [discord, setDiscord] = useState('grey')
    const [discordT, setDiscordT] = useState('grey')

    function clear(){
        setTask('grey')
        setTaskT('grey')
        setProfile('grey')
        setProfileT('grey')
        setSettings('grey')
        setSettingsT('grey')
        setDiscord('grey')
        setDiscordT('grey')
    }
    function taskClick(){
        clear()
        setTask('#9AE19D')
        setTaskT('white')
    }
    function profileClick(){
        clear()
        setProfile('#9AE19D')
        setProfileT('white')
    }
    function settingsClick(){
        clear()
        setSettings('#9AE19D')
        setSettingsT('white')
    }
    function discordClick(){
        clear()
        setDiscord('#9AE19D')
        setDiscordT('white')
    }

    return (
        <div className="navbar" style={{textAlign: 'center'}}>
            <img src={Logo} style={{width: '10vw', marginTop: '5vh'}} alt="logo"/>
            <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '17vh', cursor: 'pointer'}} onClick={taskClick}>
                <FaClipboardList style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: task}}/>
                <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: taskT}} className="navbarText">Tasks</p>
            </button>
            <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '7vh', cursor: 'pointer'}} onClick={profileClick}>
                <FaUserAlt style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: profile}}/>
                <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: profileT}} className="navbarText">Profiles</p>
            </button>
            <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '7vh', cursor: 'pointer'}} onClick={discordClick}>
                <FaDiscord style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: discord}}/>
                <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: discordT}} className="navbarText">Discord</p>
            </button>
            <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '7vh', cursor: 'pointer'}} onClick={settingsClick}>
                <FaCog style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: settings}}/>
                <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: settingsT}} className="navbarText">Settings</p>
            </button>
            <p style={{marginTop: '25vh', fontSize: '12px'}}>Connected</p>
            <p style={{marginTop: '1vh', fontSize: '12px'}}>Version 0.0.1</p>
        </div>
    );
}

export default Navbar;
