import { useState } from "react";
import Button from "../../shared/Button/Button";
import Layout from "../../components/layout";
import Input from "../../shared/Input/Input";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await authService.login({usernameOrEmail: email, password})
      return navigate(`/dashboard`);
    }catch (error){
      setError("Login functionality not yet implemented.");
    }
  };

  return (
    <>
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full p8 border bg-background p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Admin Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground"
                >
                  password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="bg-primary">Log In</Button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
