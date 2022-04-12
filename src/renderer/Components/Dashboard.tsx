/* eslint-disable prettier/prettier */
import '../App.css'
import Navbar from 'renderer/Utils/Navbar';
import Topbar from 'renderer/Utils/Topbar';

function Dashboard() {
    return (
        <div className='main'>
            <Navbar/>
            <Topbar/>
        </div>
    );
}

export default Dashboard;