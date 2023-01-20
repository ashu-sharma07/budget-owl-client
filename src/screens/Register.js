import React, { useState } from 'react'
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Register = () => {
    const [fullName,setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = async () => {
        console.log(fullName,email,password)
        try {
            const res = await api.post("/register",{
                name:fullName,
                email,
                password
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AuthComponent
            forgot={{ display: 'none' }}
            title={"register"}
            dont="Login"
            route="/login" 
            fullName={fullName}
            setFullName={(e)=>setFullName(e.target.value)}
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            password={password}
            setPassword={(e) => setPassword(e.target.value)}
            handleClick={handleClick}
            />
    )
}

export default Register