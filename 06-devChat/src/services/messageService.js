const API_URL = "https://192.168.0.116:5000/api/Messages";

export const getMessages = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }
  return response.json();
};

export const addMessage = async (message) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  if (!response.ok) {
    throw new Error("Failed to add message");
  }
  return response.json();
};
