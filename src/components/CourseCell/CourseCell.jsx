import "./CourseCell.scss"
import { deleteCourse } from '../../service/course-service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDisciplines,createDiscipline } from '../../service/discipline-service';
import { useNavigate } from 'react-router-dom';
function CourseCell(props) {
    let navigate = useNavigate();
    return ( 
        <div className="course-card">
            <div className="courseTitleContainer">
                <div className="courseName">{props.CourseName}</div>
                <button className="courseDeleteButton" onClick={()=>{
                    props.deleteCourse(props.course)
                    }}> <i class="fa-solid fa-xmark"></i> </button>

                
            </div>
            <div className="courseButtonsContainer">
                <button className="courseButton" onClick={()=>{navigate(`/disciplines/${props.course.semesters[0].id}`)}}>1 семестр</button>
                <button className="courseButton" onClick={()=>{navigate(`/disciplines/${props.course.semesters[1].id}`)}}>2 семестр</button>
            </div>
            
                {/* <button className="btn" onClick={()=>{navigate(`/disciplines/${props.course.semesters[0].id}`)}}>1 семестр</button>
                <button className="btn" onClick={()=>{
                    createDiscipline(props.course.semesters[0],localStorage.getItem('user'))}}>2 семестр</button> */}

        </div>
     );
}

export default CourseCell;