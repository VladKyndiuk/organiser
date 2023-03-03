import { TransitionGroup,CSSTransition } from "react-transition-group";
import '../../styles/Courses.scss'
import DisciplineCell from "../DisciplineCell/DisciplineCell";
function DisciplineList({disciplines,deleteDiscipline}) {
    return ( 
        <>
        <TransitionGroup className="coursesCellContainer">
        {disciplines.map((el,index) =>
            <CSSTransition
            key={el.id}
            timeout={500}
            classNames="coursesCellInner"
            >
            <div className="coursesCellInner">
                <DisciplineCell deleteDiscipline={deleteDiscipline} Discipline={el} key={el.id} DisciplineName={el.name}/>
            </div> 
            </CSSTransition>
        )


        }
        </TransitionGroup>
        </>
     );
}

export default DisciplineList;