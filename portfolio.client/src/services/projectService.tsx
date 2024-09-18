const API_URL = import.meta.env.VITE_API_URL;

const getAllProject = async () => {
  try {
    const response = await fetch(`${API_URL}/Project`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const projects = await response.json();

      return projects;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw error;
  }
};

export default { getAllProject };
