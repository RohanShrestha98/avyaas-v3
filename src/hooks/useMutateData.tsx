import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

export const useMutate = (
  queryKey: string[],
  basePath: string,
  contentType = "application/json"
) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (params: string[]) => {
      const requestData = {
        method: params?.[0],
        url: basePath + params?.[1],
        data: params?.[2],
        headers: {
          "Content-Type": contentType,
        },
      };
      const response = await axiosPrivate(requestData);
      return response?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
    },
    onError: (err) => {
      return err?.response?.data;
    },
  });
  return mutation;
};

export const useAuthMutation = () => useMutate(["auth"], "auth/v3/login/");

export const useAuthSignupMutation = () =>
  useMutate(["signup"], "auth/v3/register");
export const useInstructorMutation = () =>
  useMutate(["teacher"], "api/v3/teacher/create/", "multipart/form-data");
export const useCourseMutation = () =>
  useMutate(["course"], "api/v3/course/", "multipart/form-data");
