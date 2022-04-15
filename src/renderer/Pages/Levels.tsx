/* eslint-disable prettier/prettier */
import '../App.css'
import Navbar from 'renderer/Utils/Navbar';
import Topbar from 'renderer/Utils/Topbar';
import Levels from 'renderer/Components/Levels';

function Task() {
    return (
        <div className='main'>
            <Navbar currentPage="tasks"/>
        <div style={{display: 'block'}}>
            <Topbar/>
            <Levels />
        </div>
        </div>
    );
}

export default Task;