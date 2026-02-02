// Generate or retrieve a unique user ID from localStorage
export const getUserId = () => {
  let userId = localStorage.getItem("thinkboard_userId");

  if (!userId) {
    // Generate a unique ID: timestamp + random string
    userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem("thinkboard_userId", userId);
  }

  return userId;
};
