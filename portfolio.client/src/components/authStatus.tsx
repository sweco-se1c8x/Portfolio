import { useEffect, useState } from "react";
import authService from "../services/authService";
import { User } from "../interface/user";

const authStatus = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const checkSignedInStatus = async () => {
      try {
        const response = await authService.checkAuthentication();
        if (response) {
          setIsSignedIn(true);
          setUser(response);
        } else {
          setIsSignedIn(false);
          setUser(undefined);
        }
      } catch (error) {
        console.error("Error checking signed-in status:", error);
        setIsSignedIn(false);
        setUser(undefined);
      }
    };
    checkSignedInStatus();
  }, []);

  const logout = async () => {
    try {
      await authService.logout();
      setIsSignedIn(false);
      setUser(undefined);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { logout, isSignedIn, user };
};


export default authStatus;