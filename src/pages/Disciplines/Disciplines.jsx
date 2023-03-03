import UpBar from "../../components/UpBar/UpBar";
import Loader from "../../components/Loader/Loader";
import MyModal from "../../components/MyModal/MyModal";
import "../../styles/Courses.scss";
import DisciplineList from "../../components/DisciplineList/DisciplineList";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDisciplines,createDisciplineQuery,deleteDisciplineQuery } from "../../service/discipline-service";

function Disciplines({ id }) {
  const [disciplines, setDisciplines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [modalError, setModalError] = useState("");
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [addDisciplineName, setAddDisciplineName] = useState("");

  const params = useParams();

  const [modalOpened, setModalOpened] = useState(false);

  useLayoutEffect(() => {
    getDisciplines(params.id)
      .then((res) => {
        setDisciplines(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("GET DISCIPLINES ERROR", err);
        setIsLoading(false);
      });
  }, []);

  const createDiscipline = (addDisciplineName) => {
    setModalError("");
    createDisciplineQuery(params.id , addDisciplineName).then(res=>{
      setDisciplines([...disciplines, res.data]);
      setIsModalLoading(false);
    }).catch(err => {
      console.log("CREATE DISCIPLINE ERROR", err);
      setModalError("Помилка створення дисципліни");
      setIsModalLoading(false);
    });

  }
  const deleteDiscipline = (discipline) => {
    deleteDisciplineQuery(discipline.id)
      .then((res) => {
        setDisciplines(disciplines.filter((p) => p.id !== discipline.id));
      })
      .catch((err) => {
        console.log("DELETE COURSE ERROR", err);
      });
  };
 

  return (
    <>
      <UpBar setModalOpened={() => [setModalOpened(true)]} />
      <MyModal modalOpened={modalOpened} setModalOpened={setModalOpened}>
        <form
          className="modal_container"
          onSubmit={(e) => {
            e.preventDefault();
            createDiscipline(addDisciplineName);
          }}
        >
          <div className="Title">Додати дисципліну</div>
          <div className="inputs_div">
            <input
              value={addDisciplineName}
              onInput={(e) => {
                setAddDisciplineName(e.target.value);
              }}
              placeholder="Назва дисципліни"
              type="text"
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
            <DisciplineList
              deleteDiscipline={deleteDiscipline}
              disciplines={disciplines}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Disciplines;
