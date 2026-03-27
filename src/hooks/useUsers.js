import { useState, useEffect } from 'react';
import courseService from '../services/api/userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await courseService.getAll();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await courseService.create(userData);
      setUsers(prev => [...prev, newUser]);
      return newUser;
    } catch (err) {
      setError(err.message || 'Failed to add user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, userData) => {
    setLoading(true);
    setError(null);
    try {
      const updatedUser = await courseService.update(id, userData);
      setUsers(prev => prev.map(user => user.id === id ? updatedUser : user));
      return updatedUser;
    } catch (err) {
      setError(err.message || 'Failed to update user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await courseService.delete(id);
      setUsers(prev => prev.filter(user => user.id !== id));
      return true;
    } catch (err) {
      setError(err.message || 'Failed to delete user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    fetchUsers,
    addUser,
    updateUser,
    deleteUser
  };
};
