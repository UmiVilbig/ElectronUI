/* eslint-disable prettier/prettier */
import { VscChromeMinimize, VscClose } from 'react-icons/vsc'
import '../App.css'

function Topbar() {
    function minimize(){
        window.electron.ipcRenderer.minimize()
    }
    function close(){
        window.electron.ipcRenderer.close()
    }
    return(
        <div className="drag" style={{width: '100vw', height: '5vh', borderTopRightRadius: '10px'}}>
            <button type='button' className='noDrag' style={{float: 'right'}} onClick={close}>
                <VscClose style={{height: '4vh', width: '3vw', cursor: 'pointer', color: 'white', marginTop: '0.5vh', marginRight: '1vw'}}/>
            </button>
            <button type='button' className='noDrag' style={{float: 'right'}} onClick={minimize}>
                <VscChromeMinimize style={{height: '4vh', width: '3vw', cursor: 'pointer', color: 'white', marginTop: '0.5vh'}}/>
            </button>
        </div>
    );
}

export default Topbar;