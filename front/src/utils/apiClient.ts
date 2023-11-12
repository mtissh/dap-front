import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

export const apiClient = {
  async get<T>(url: string, config = {}): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.get<T>(url, config);
    if (!response) return Promise.reject();
    return response;
  },
  
  async post<T>(url: string, data: unknown, config = {}): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.post<T>(url, data, config);
    if (!response) return Promise.reject();
    return response;
  },

  async put<T>(url: string, data: unknown, config = {}): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.put<T>(url, data, config);
    if (!response) return Promise.reject();
    return response;
  },

  async delete<T>(url: string, config = {}): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.delete<T>(url, config);
    if (!response) return Promise.reject();
    return response;
  },
};