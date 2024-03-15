import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

export const useQueryData = (key: string[], path: string, params = "", enabled = true) => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: [key, params],
    queryFn: () =>
      axiosPrivate({
        url: path,
        method: "get",
        params: params,
      }).then((res) => res?.data && res?.data),
    enabled,
  });
};

export const useTeacherData = () =>
  useQueryData(["teacher"], `api/v3/teacher/list/`);
export const useCourseData = () =>
  useQueryData(["course"], `api/v3/course/list/`);
export const useCourseGroupData = () =>
  useQueryData(["course-group"], `api/v3/course-group/list/`);
export const useStudentData = () =>
  useQueryData(["student"], `api/v3/student/list/`);

