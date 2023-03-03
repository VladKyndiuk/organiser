import axios from "../axios";

export const getCourses = async (Token) => {
  try {
    let response = await axios.get("/courses", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const createNewCourse = async (courseNumber) => {
  var bodyFormData = new FormData();

  bodyFormData.append("courseNumber", courseNumber);

  try {
    // RABOTAET

    let response = await axios({
      method: "post",
      url: "/courses",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteCourseQuery = async (courseId) => {
  var bodyFormData = new FormData();

  bodyFormData.append("courseId", courseId);
  try {
    let response = await axios({
      method: "post",
      url: "/courses/delete",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
