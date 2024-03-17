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
export const useCourseData = (searchText = "", selectedField = "", pageSize = "10", page = 1) =>
  useQueryData(["course", searchText, selectedField, pageSize, page], `api/v3/course/list/?page=${page}&&search=${searchText}&&pageSize=${pageSize}&&courseGroupID=${selectedField}`);
export const useSubjectData = (searchText = "", selectedField = "", pageSize = "10", page = 1) =>
  useQueryData(["subject", searchText, selectedField, pageSize, page], `api/v3/subject/list/?page=${page}&&search=${searchText}&&pageSize=${pageSize}&&courseID=${selectedField}`);
export const useCourseGroupData = () =>
  useQueryData(["course-group"], `api/v3/course-group/list/`);
export const useStudentData = () =>
  useQueryData(["student"], `api/v3/student/list/`);

