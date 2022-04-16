/* eslint-disable prettier/prettier */
import '../App.css'
import Navbar from 'renderer/Utils/Navbar';
import Topbar from 'renderer/Utils/Topbar';

function Task() {
    return (
        <div className='main'>
            <Navbar currentPage="profile"/>
        <div style={{display: 'block'}}>
            <Topbar/>
            <h1 style={{marginLeft: '1vw'}}>Invites</h1>
        </div>
        </div>
    );
}

export default Task;