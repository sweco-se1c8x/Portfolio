import { Skill } from "../interface/skills";

const API_URL = import.meta.env.VITE_API_URL;

const getAllSkills = async () => {
  try {
    const response = await fetch(`${API_URL}/Skills`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const skills = await response.json();

      return skills;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw error;
  }
};

const addSkill = async (skill: Skill) => {
  try {
    const response = await fetch(`${API_URL}/Skills`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skill),
    });
    if (response.ok) {
      const skills = await response.json();

      return skills;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw error;
  }
};

const deleteSkill = async (id: number): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/Skills/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (response.ok) {
        return true; 
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      return false; 
    }
  };

export default { getAllSkills, addSkill, deleteSkill };
