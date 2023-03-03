import UpBar from "../../components/UpBar/UpBar";
import "../../styles/Courses.scss";
import CourseCell from "../../components/CourseCell/CourseCell";
import Loader from "../../components/Loader/Loader";
import CoursesList from "../../components/CoursesList/CoursesList";
import {
  getCourses,
  deleteCourseQuery,
  createNewCourse,
} from "../../service/course-service";
import { useLayoutEffect, useState, useEffect } from "react";
import MyModal from "../../components/MyModal/MyModal";

function Courses() {
  document.title = "Курси";
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);

  const [modalError, setModalError] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [addCourseNumber, setAddCourseNumber] = useState("");

  useLayoutEffect(() => {
    getCourses()
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log("GETCOURSES ERROR", err);
      });
    setIsLoading(false);
    setIsCoursesLoading(false);
  }, []);

  const createCourse = (courseNumber) => {
    setModalError("");
    createNewCourse(courseNumber)
      .then((res) => {
        setCourses([...courses, res.data]);
        setIsModalLoading(false);
      })
      .catch((err) => {
        console.log("CREATE NEW COURSE ERROR", err);
        setModalError("Помилка створення курсу");
      });
  };
  const deleteCourse = (course) => {
    deleteCourseQuery(course.id)
      .then((res) => {
        setCourses(courses.filter((p) => p.id !== course.id));
      })
      .catch((err) => {
        console.log("DELETE COURSE ERROR", err);
      });
  };

  return (
    <>
      <UpBar setModalOpened={() => [setModalOpened(true)]}></UpBar>
      <MyModal modalOpened={modalOpened} setModalOpened={setModalOpened}>
        <form
          className="modal_container"
          onSubmit={(e) => {
            e.preventDefault();
            createCourse(addCourseNumber);
          }}
        >
          <div className="Title">Додати курс</div>
          <div className="inputs_div">
            <input
              value={addCourseNumber}
              onInput={(e) => {
                setAddCourseNumber(e.target.value);
              }}
              placeholder="Номер курсу"
              type="number"
              className="form-input"
              required
            />
          </div>

          <div className={modalError ? "warning show" : "warning"}>
            {modalError} &#160;
          </div>
          <input type="submit" className="btn" value="Створити курс" />
        </form>
      </MyModal>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="courses-body">
          {isLoading ? (
            <Loader />
          ) : (
            <CoursesList deleteCourse={deleteCourse} courses={courses} />
          )}
        </div>
      )}
    </>
  );
}

export default Courses;
