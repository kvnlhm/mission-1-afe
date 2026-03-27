import api from './api';

const API_ENDPOINT = '/courses';

export const courseService = {
  getAll: async () => {
    try {
      const response = await api.get(API_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`${API_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      throw error;
    }
  },

  create: async (courseData) => {
    try {
      const response = await api.post(API_ENDPOINT, courseData);
      return response.data;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  },

  update: async (id, courseData) => {
    try {
      const response = await api.put(`${API_ENDPOINT}/${id}`, courseData);
      return response.data;
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await api.delete(`${API_ENDPOINT}/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  }
};

export default courseService;
