import { TransitionGroup,CSSTransition } from "react-transition-group";
import CourseCell from "../../components/CourseCell/CourseCell";
import '../../styles/Courses.scss'
import Loader from "../Loader/Loader";



function CoursesList({courses,deleteCourse}) {

    // if(courses.length <= 0){
    //     return(
    //         <div className="Title">Курсів не знайдено</div>         
    //     )
    // }
    
    return (
        <>
            <TransitionGroup className="coursesCellContainer">
            {courses.map((el,index) => 
            
            <CSSTransition
            key={el.id}
            timeout={500}
            classNames="coursesCellInner"
            >
            <div className="coursesCellInner">
                <CourseCell deleteCourse={deleteCourse} course={el} key={el.id} CourseName={"Курс " + el.number}/>
            </div> 
            </CSSTransition>
            )}
            </TransitionGroup>
        </>
     );
}

export default CoursesList;