// Gebruiker object zonder types
const user = {
    username: "johnDoe",
    email: "john@example.com",
    age: 25,
    isAdmin: false
  };
  
  // Functie om een nieuwe gebruiker aan te maken
  function createUser(username, email, age) {
    return {
      username,
      email,
      age,
      isAdmin: false
    };
  }
  
  // Functie om te controleren of de gebruiker een admin is
  function isAdmin(user) {
    return user.isAdmin ? `${user.username} is een admin.` : `${user.username} is geen admin.`;
  }
  
  // Testcode
  const newUser = createUser("janeDoe", "jane@example.com", 22);
  console.log(isAdmin(newUser));
  