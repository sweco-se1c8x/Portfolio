import { User } from "../interface/user";

const API_URL = import.meta.env.VITE_API_URL;

interface LoginData {
  usernameOrEmail: string;
  password: string;
}

const login = async (loginData: LoginData) => {
  try {
    console.log(API_URL)

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      const userData: User = {
        id: data.data.id,
        name: data.data.userName,
        email: data.data.email,
      };
      return userData;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
};

const checkAuthentication = async () => {
  try {
    const response = await fetch(`${API_URL}/authenticated`, {
      method: "GET",
      credentials: "include"
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Not authorize");
    }
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
};

export default { login, logout, checkAuthentication };
