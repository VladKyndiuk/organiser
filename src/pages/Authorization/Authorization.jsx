import { Link, redirect,Navigate,useNavigate } from 'react-router-dom';
import { auth } from '../../service/auth-service';
import '../../styles/Registration.scss';
import {useContext, useState} from 'react'
import Loader from '../../components/Loader/Loader';

import useAuth from '../../hooks/useAuth';
import AuthContext from '../../context/AuthProvider'


function Registration() {
    document.title = "Авторизація";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState('');
    let navigate = useNavigate();

    const {setAuth} = useAuth();
    
    return (
        
        <div className="body">
            <div className='card'>
                <form className='container' onSubmit={async (e)=>{
                    e.preventDefault();
                    setIsLoading(true);
                    setError("");
                    auth(email,password).then(res =>{
                        switch(res){
                                case 401:
                                    console.log(401);
                                    setError("Невірний емейл або пароль");
                                    setIsLoading(false);
                                    break;
                                case 403:
                                    setError("Невірний емейл або пароль");
                                    setIsLoading(false);
                                    break;
                                case 404:
                                    setError("Невірний емейл або пароль");
                                    setIsLoading(false);
                                    break;
                                default:
                                    setAuth({email});
                                    navigate("/main_page");
                                    break;
                }});
                }}>

                    <div className='title'>Авторизація</div>

                        <div className='inputs_div'>
                            <input value={email} onInput={(e)=>{setEmail(e.target.value)}} placeholder='Емейл' type="email" className="form-input" required/>
                            <input value={password} onInput={(e)=>{setPassword(e.target.value)}} placeholder='Пароль' type="password" className="form-input" required/>
                            
                        </div>
                    <div className={error ? 'warning show' : 'warning'}>{error} &#160;</div>
                    <input type="submit" className='btn' value="Увійти" />
                    <Link className='link' to="/registration">Немає аккаунту? Зареєструйтесь тут</Link>

                </form>

                <div className={isLoading ? 'loader_container show' : 'loader_container'}>
                    <Loader></Loader>
                </div>
            </div>
        </div> 
     );
}

export default Registration;