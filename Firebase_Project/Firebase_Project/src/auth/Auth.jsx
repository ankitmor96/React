
import { useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";

import { auth } from "../config/firebase";


const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const [user, setUser] = useState(null);

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });

        return () => unsubscribe();

    }, []);

    
    const handleChange = (e) => {

        const { name, value } = e.target;

        setInput((prev) => ({
            ...prev,
            [name]: value
        }));

        setError("");
    };

    
    const handleSignup = async (e) => {

        e.preventDefault();
        setError("");

        if (input.name.trim().length < 2) {
            setError("Name must contain at least 2 characters");
            return;
        }

        if (input.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        try {

            setLoading(true);

            const result = await createUserWithEmailAndPassword(
                auth,
                input.email.trim(),
                input.password
            );

            await updateProfile(result.user, {
                displayName: input.name.trim()
            });

            setUser(auth.currentUser);

            setInput({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);
        }
    };

    
    const handleLogin = async (e) => {

        e.preventDefault();
        setError("");

        try {

            setLoading(true);

            await signInWithEmailAndPassword(
                auth,
                input.email.trim(),
                input.password
            );

            setInput({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);
        }
    };

    
    const handleLogout = async () => {

        try {

            setLoading(true);

            await signOut(auth);

            setUser(null);

            setInput({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);
        }
    };

    
    if (authLoading) {
        return <p className="loading">Checking login...</p>;
    }

    
    if (user) {
        return (
            <div className="auth-container">

                <div className="auth-card">

                    <h2>Welcome!</h2>

                    <p>You are successfully logged in.</p>

                    <div className="user-info">
                        <p>
                            <strong>Name:</strong>{" "}
                            {user.displayName || "User"}
                        </p>

                        <p>
                            <strong>Email:</strong>{" "}
                            {user.email}
                        </p>
                    </div>

                    {error && (
                        <p className="error">{error}</p>
                    )}

                    <button
                        className="auth-button"
                        onClick={handleLogout}
                        disabled={loading}
                    >
                        {loading ? "Logging out..." : "Logout"}
                    </button>

                </div>

            </div>
        );
    }

    
    return (
        <div className="auth-container">

            <div className="auth-card">

                <h2>
                    {isLogin ? "Login" : "Create Account"}
                </h2>

                <p>
                    {isLogin
                        ? "Login to your account"
                        : "Create your new account"}
                </p>

                {error && (
                    <p className="error">{error}</p>
                )}

                <form onSubmit={isLogin ? handleLogin : handleSignup}>

                    {!isLogin && (
                        <div className="form-group">

                            <label>Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={input.name}
                                onChange={handleChange}
                                required
                            />

                        </div>
                    )}

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={input.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={input.password}
                            onChange={handleChange}
                            minLength={6}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Please wait..."
                            : isLogin
                                ? "Login"
                                : "Signup"}
                    </button>

                </form>

                <div className="auth-toggle">

                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}

                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError("");
                            setInput({
                                name: "",
                                email: "",
                                password: ""
                            });
                        }}
                    >
                        {isLogin ? "Signup" : "Login"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Auth;
