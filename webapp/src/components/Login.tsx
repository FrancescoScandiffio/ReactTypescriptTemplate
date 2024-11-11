import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

import '../assets/styles/authentication.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // This would be where you handle login logic
        navigate('/projects');
    };

    return (
        <div className="login-component p-d-flex p-jc-center p-ai-center p-p-4">
            <Card title="Login" className="p-p-4">
                <div className="p-fluid">
                    <label htmlFor="email" className="p-mb-2">Email</label>
                    <InputText
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="p-mb-3"
                    />

                    <label htmlFor="password" className="p-mb-2">Password</label>
                    <Password
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        toggleMask
                        feedback={false}
                        className="p-mb-4"
                    />

                    <Button label="Login" onClick={handleLogin} className="p-button-primary p-mb-3" />
                    <Link to="/signup" className="p-d-block p-mt-2">Don't have an account? Sign up</Link>
                </div>
            </Card>
        </div>
    );
};
