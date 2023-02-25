import axios from '../axios'

export const auth = async (email,password) => {
    try {
       let response = await axios.post('/auth/sign_in', 
        {email:email,
        password:password
     });
     localStorage.setItem('user', JSON.stringify(response.data));
     return response;
        
    } catch (error) {
        return error.response.status;
    }
}

export const regist = async (email,password) => {
    try {
        let response = await axios.post('/auth/sign_up', 
         {email:email,
         password:password,
         roles: 
            ["USER"]
      });
      return response;
         
     } catch (error) {
        return error.response.status;
         
     }
}
export const isAuthenticated = () => {
	const user = localStorage.getItem('user');
	if (!user) {
		return {}
	}
	return JSON.parse(user);
};

