import cl from './MyModal.module.css'
import {CSSTransition} from 'react-transition-group'
function MyModal({children, modalOpened, setModalOpened}) {
    const modalClasses = [cl.myModal]
    return ( 
        <CSSTransition
        in={modalOpened}
        timeout={200}
        classNames={{
            enterActive: cl.myModalEnter,
            enterDone: cl.myModalEnterDone,
            exitActive: cl.myModalExit,
            exitDone: cl.myModalExitActive         
        }}
        unmountOnExit
        >

        <div className={modalClasses} onClick={()=>setModalOpened(false)}>
            <div className={cl.myModalContent} onClick={e => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
        
        </CSSTransition>
     );
}

export default MyModal;