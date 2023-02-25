import { Link,useNavigate  } from 'react-router-dom';
import '../../styles/Registration.scss';
import { regist } from '../../service/auth-service';
import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import SuccessLogo from'../../icons/Success.png';
function Registration() {
    document.title = "Реєстрація";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess,setSuccess] = useState(false);
    const [error,setError] = useState('');
    let navigate = useNavigate();
    return (
        <div className="body">
            <div className='card'>
                <form className='container' onSubmit={(e)=>{
                    e.preventDefault();
                    setIsLoading(true);
                    setError("");
                    regist(email,password).then(res =>{
                        console.log(res);
                        switch(res){
                            case 400:
                                setError("Користувач с таким емейлом вже існує");
                                setIsLoading(false);
                                break;
                            case 401:
                                setError("Користувач с таким емейлом вже існує");
                                setIsLoading(false);
                                break;
                            case 403:
                                setError("Користувач с таким емейлом вже існує");
                                setIsLoading(false);
                                break;
                            case 404:
                                setError("Користувач с таким емейлом вже існує");
                                setIsLoading(false);
                                break;
                            default:
                                setSuccess(true);
                                break;
                        };

                        
                    });

                }} >
                    <div className='title'>Реєстрація</div>
                        <div className='inputs_div'>
                            <input value={email} onInput={(e)=>{setEmail(e.target.value)}} placeholder='Емейл' type="email" className="form-input" required/>
                            <input value={password} onInput={(e)=>{setPassword(e.target.value)}} placeholder='Пароль' type="password" className="form-input" required/>
                        </div>
                    <div className={error ? 'warning show' : 'warning'}>{error} &#160;</div>
                    <input type="submit" className='btn' value="Зареєструватись" />
                    <Link className='link' to="/authorization">Вже зареєстровані? Вхід тут</Link>

                </form>
                <div className={isLoading ? 'loader_container show' : 'loader_container'}>
                    <Loader></Loader>
                </div>

                <div className={isSuccess ? 'loader_container show' : 'loader_container'}>
                    <div className='container' >
                        <div className='image-container'> 
                            <img className='successImg' src={SuccessLogo} alt="fireSpot"/> 
                        </div>
                        <button className='btn' onClick={()=>navigate("/authorization")}>До авторизації</button>
                    </div>
                </div>
            </div> 
        </div> 
     );
}

export default Registration;