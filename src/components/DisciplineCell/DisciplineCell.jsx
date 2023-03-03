import "../CourseCell/CourseCell.scss"
import { useNavigate } from 'react-router-dom';
function DisciplineCell(props) {
    let navigate = useNavigate();
    return ( 
        <div className="course-card">
            <div className="courseTitleContainer">
                <div className="courseName">{props.DisciplineName}</div>
                <button className="courseDeleteButton" onClick={()=>{
                    // console.log(props.discipline);
                    props.deleteDiscipline(props.Discipline)

                    }}> <i class="fa-solid fa-xmark"></i></button>
            </div>


            <button className="btn" onClick={()=>{console.log(props.DisciplineName)}}>Переглянути</button>


            </div>
            

            

    
     );
}

export default DisciplineCell;