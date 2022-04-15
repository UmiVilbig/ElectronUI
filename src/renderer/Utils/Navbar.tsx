/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
import { useState, useEffect } from "react";
import '../Styles/Navbar.css'
import { FaUserPlus, FaCog } from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'

function Navbar(props: { currentPage: string; }) {
    const [task, setTask] = useState('grey')
    const [taskT, setTaskT] = useState('grey')
    const [profile, setProfile] = useState('grey')
    const [profileT, setProfileT] = useState('grey')
    const [settings, setSettings] = useState('grey')
    const [settingsT, setSettingsT] = useState('grey')
    const [discord, setDiscord] = useState('grey')
    const [discordT, setDiscordT] = useState('grey')

    useEffect(() => {
        if(props.currentPage === "tasks"){
            setTask("#9AE19D")
            setTaskT('white')
        } else if(props.currentPage === "profile"){
            setProfile("#9AE19D")
            setProfileT("white")
        }
    }, [props.currentPage])

    return (
        <div className="navbar" style={{textAlign: 'center'}}>
            <img src={Logo} style={{width: '10vw', marginTop: '5vh'}} alt="logo"/>
            <div>
                <Link to="/">
                    <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '17vh', cursor: 'pointer'}}>
                        <GiProgression style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: task}}/>
                        <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: taskT}} className="navbarText">Levels</p>
                    </button>
                </Link>
                <Link to="/profiles">
                    <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '7vh', cursor: 'pointer'}}>
                        <FaUserPlus style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: profile}}/>
                        <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: profileT}} className="navbarText">Invites</p>
                    </button>
                </Link>
                <button type="button" style={{display: 'flex', marginLeft: '2vw', marginTop: '7vh', cursor: 'pointer'}}>
                    <FaCog style={{width: '3vw', height: '3vh', transition: 'ease-in-out 0.15s', color: settings}}/>
                    <p style={{fontSize: '1.5vw', transition: 'ease-in-out 0.15s', color: settingsT}} className="navbarText">Settings</p>
                </button>
            </div>
            <p style={{marginTop: '25vh', fontSize: '12px'}}>Connected</p>
            <p style={{marginTop: '1vh', fontSize: '12px'}}>Version 0.0.1</p>
        </div>
    );
}

export default Navbar;
