import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import '../assets/styles/authentication.css'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        // This would be where you handle signup logic
        navigate('/login');
    };

    return (
        <div className="signup-component p-d-flex p-jc-center p-ai-center">
            <Card title="Sign Up" className="p-p-4">
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

                    <Button label="Sign Up" onClick={handleSignup} className="p-button p-mb-3" />
                    <Link to="/login" className="p-d-block p-mt-2">Already have an account? Log in</Link>
                </div>
            </Card>
        </div>
    );
};

export default Signup;
