import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { apiClient } from '@/utils/apiClient';

// TODO
export const useApiGet = () => {
  const getRequest = async (url: string, config?: AxiosRequestConfig) => {
  };

  return { getRequest };
};

export const useApiPost = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const postRequest = async <T extends FieldValues, F>( // T: フォームデータの型、F: レスポンスで期待する型
    url: string,
    postData: unknown,
    setError?: UseFormSetError<T>,
    config?: AxiosRequestConfig
  ) => {
    setLoading(true);
    try {
      const res = await apiClient.post<F>(url, postData, config);
      return res;
    } catch (e) {
      if (e && setError) {
        for (const key of Object.keys((e as AxiosResponse).data)) {
          setError(key as `root.${string}`, {
            type: 'manual',
            message: (e as { data: {[key: string]: string[]} }).data[key]?.[0],
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return { postRequest, loading };
};

export const useApiPut = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const putRequest = async <T extends FieldValues, F>( // T: フォームデータの型、F: レスポンスで期待する型
    url: string,
    postData: unknown,
    setError?: UseFormSetError<T>,
    config?: AxiosRequestConfig
  ) => {
    setLoading(true);
    try {
      const res = await apiClient.put<F>(url, postData, config);
      return res;
    } catch (e) {
      // TODO: クエリパラメータ等、フィールドがないパラメータへのAPIバリデーションエラーの処置を考える
      if (e && setError) {
        for (const key of Object.keys((e as AxiosResponse).data)) {
          setError(key as `root.${string}`, {
            type: 'manual',
            message: (e as { data: {[key: string]: string[]} }).data[key]?.[0],
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return { putRequest, loading };
};

// TODO
export const useApiDelete = () => {
  const deleteRequest = async (url: string, config?: AxiosRequestConfig) => {
  };

  return { deleteRequest };
};