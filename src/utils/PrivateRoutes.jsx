import { Outlet,Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect,useContext, useState ,useLayoutEffect} from "react";
import { AuthProvider } from "../context/AuthProvider";
import Authorization from '../pages/Authorization/Authorization';
import { auth,isAuthenticated } from '../service/auth-service';


const PrivateRoutes=()=>{
    const { auth } = useAuth();
    const {setAuth} = useAuth();
    const location = useLocation();
    const [isLoaded,setIsLoaded] = useState(false);
    useLayoutEffect(()=>{
        const userData = localStorage.getItem("user");
        if(userData===null){
            setAuth(false)
        }else{
            setAuth({userData})
        }
        setIsLoaded(true);
    },[])
    return(
        <>
        {isLoaded ? <>
            {auth ? <Outlet/> : <Navigate to="/authorization" state={{ from: location }} replace />}
            </> : <></>}
        </>
        
    )
}

export default PrivateRoutes;