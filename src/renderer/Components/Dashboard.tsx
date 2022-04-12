/* eslint-disable prettier/prettier */
import '../App.css'
import { VscChromeMinimize, VscClose } from 'react-icons/vsc'
import logo from '../../../assets/logo.png'

function Dashboard() {
    return (
        <div className='main'>
            <div style={{display: 'flex'}}>
                <div style={{backgroundColor: 'green', width: '10vw', height: '100vh'}}>
                    <img src={logo} alt="logo" style={{width: '7vw', height: '10vh'}}/>
                </div>
                <div className='drag' style={{width: '90vw', height: '5vh'}}>
                    <button type='button' style={{float: 'right'}}>Yo</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;