const getUser = (): string | null => {
  const username = localStorage.getItem('username');
  if (!username) {
    return null;
  }
  return username;
};

const setUser = (username: string): void => {
  localStorage.setItem('username', username);
};

const deleteUser = (): void => {
  localStorage.removeItem('username');
};

export { getUser, setUser, deleteUser };
