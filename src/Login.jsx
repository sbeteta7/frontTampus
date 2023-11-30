import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./components/Context";

function Login() {

  return (
    <>
      <div>
        <GoogleOAuthProvider clientId="788968571780-fl919dgmr5ndh3ggh64mn33i42h4lc2c.apps.googleusercontent.com">
          <AuthProvider>
            <LoginForm/>
          </AuthProvider>
        </GoogleOAuthProvider>
      </div>
    </>
  )
}

export default Login;