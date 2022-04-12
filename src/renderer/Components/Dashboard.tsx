/* eslint-disable prettier/prettier */
import '../App.css'
import Navbar from 'renderer/Utils/Navbar';
import { VscChromeMinimize, VscClose } from 'react-icons/vsc'
import logo from '../../../assets/logo.png'

function Dashboard() {
    return (
        <div className='main'>
            <Navbar/>
        </div>
    );
}

export default Dashboard;