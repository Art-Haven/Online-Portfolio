'use client'
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from "react";
import { supabase } from '../../supabase-client';
import Image from 'next/image';

const AuthPage = () => {
    const [isSigningUp, setIsSigningUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (isSigningUp) {
            const { error: signUpError } = await supabase.auth.signUp({ email, password });
            if (signUpError) {
                setError(signUpError.message);
                return;
            }
            setError("Successfully signed up! Please check your email to confirm your account.");
        } else {
            const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
            if (signInError) {
                setError(signInError.message);
                return;
            }
            router.push('/Home');
        }
    };

    return (
        <div className="login-container">
            <div className="form-content">
                <div className="logo-section">
                    <Image src="/LOGO.jpg" alt="Art-Haven Logo" className="logo-image" width={100} height={100} />
                    <div className="logo">
                        <h1>Art-Haven</h1>
                    </div>
                </div>
                <p className="subtitle">Access your creative sanctuary</p>
                <div className="test-info">
                    <strong>Warning:</strong> Make sure to enter a strong password and remember it
                </div>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} id="loginForm">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter any valid email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Enter any password (6+ chars)"/>
                    </div>

                    <button type="submit" className="login-btn" id="loginBtn">
                        <span id="btnText">{isSigningUp ? "Sign Up to Art-Haven" : "Sign In to Art-Haven"}</span>
                    </button>
                </form>
                <div className="divider"></div>
                <div className="signup-link">
                    {isSigningUp ? (
                        <>Already have an account? <button type="button" className="link-button" onClick={() => setIsSigningUp(false)}>Sign In</button></>
                    ) : (
                        <>Don&apos;t have an account? <button type="button" className="link-button" onClick={() => setIsSigningUp(true)}>Sign Up</button></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;