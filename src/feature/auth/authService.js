import axios from 'axios';
// Register user
const register = async (userData) => {
  const response = await axios.post(
    'https://mockup-binar-be-production.up.railway.app/users/register',
    userData,
  );
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    'https://mockup-binar-be-production.up.railway.app/users/login',
    userData,
  );
  if (response.status === 200) {
    const userAccount = response.data.auth;
    localStorage.setItem('username', userAccount.username);
    localStorage.setItem('email', userAccount.email);
    localStorage.setItem('kode unik', userAccount.kodeunik);
    localStorage.setItem('userId', userAccount.id);
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  localStorage.removeItem('email');
  localStorage.removeItem('user');
  window.location.reload();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
