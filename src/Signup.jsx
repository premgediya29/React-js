import React, { useState } from 'react';
import { signInWithPopup, fetchSignInMethodsForEmail, linkWithCredential, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './config';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('/');
    } catch (err) {
      console.error(err);
      navigate('/login');
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setValue(result.user.email);
      localStorage.setItem('email', result.user.email);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData.email;
        const pendingCredential = GithubAuthProvider.credentialFromError(error);
        try {
          const methods = await fetchSignInMethodsForEmail(auth, email);
          if (methods.length > 0) {
            alert(`You already have an account with ${methods[0]}. Please sign in with ${methods[0]} first and then link your GitHub account.`);
            if (methods.includes(GoogleAuthProvider.PROVIDER_ID)) {
              const googleResult = await signInWithPopup(auth, googleProvider);
              await linkWithCredential(googleResult.user, pendingCredential);
              setValue(googleResult.user.email);
              localStorage.setItem('email', googleResult.user.email);
              navigate('/');
            }
          }
        } catch (err) {
          console.error(err);
          navigate('/login');
        }
      } else {
        console.error(error);
        navigate('/login');
      }
    }
  };

  return (
    <div className="container">
      <button onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
      <button className="github" onClick={handleGitHubSignIn}>
        Sign in with GitHub
      </button>
    </div>
  );
}

export default Signup;