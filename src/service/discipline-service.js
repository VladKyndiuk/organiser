import axios from "../axios";

export const getDisciplines = async (semesterId) => {
  try {
    let response = await axios.get("/disciplines", {
      params: { semesterId: semesterId },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const createDisciplineQuery = async (semesterId, name) => {
  var bodyFormData = new FormData();

  bodyFormData.append("semesterId", semesterId);
  bodyFormData.append("name", name);
  try {
    let response = await axios({
      method: "post",
      url: "/disciplines",
      data: bodyFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteDisciplineQuery = async (disciplineId) => {
  var bodyFormData = new FormData();

  bodyFormData.append("disciplineId", disciplineId);
  try {
    let response = await axios({
      method: "post",
      url: "/disciplines/delete",
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
