import axios from "../axios";

export const auth = async (email, password) => {
  try {
    let response = await axios.post("/auth/sign_in", {
      email: email,
      password: password,
    });
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.token).replace(/"/gi, "")
    );
    return response;
  } catch (error) {
    throw error.response.status;
  }
};

export const regist = async (email, password) => {
  try {
    let response = await axios.post("/auth/sign_up", {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    throw error.response.status;
  }
};
