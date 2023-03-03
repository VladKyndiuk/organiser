import './UpBar.css'
function UpBar({setModalOpened}) {
    return ( 
        <header className="up_bar">
            <nav className='nav'>
                <button className='openMenuButton roundButton'><i class="icon fa-solid fa-bars"></i></button>
                <button className='addButton roundButton' onClick={setModalOpened}> <i class="icon fa-solid fa-plus"></i></button>
            </nav>
        </header>
     );
}

export default UpBar;