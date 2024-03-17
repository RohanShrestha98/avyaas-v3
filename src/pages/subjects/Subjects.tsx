import SearchPagination from "@/components/SearchPagination";
import { ReactTable } from "../../components/Table";
import { useMemo, useState } from "react";
import TopButton from "@/components/TopButton";
import { useCourseGroupData, useSubjectData } from "@/hooks/useQueryData";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { ConvertHtmlToPlainText } from "@/utils/convertHtmlToPlainText";
import AddSubjectModal from "./AddSubjectModal";
import { convertToSelectOptions } from "@/utils/convertToSelectOptions";

export default function Subjects() {
    const [searchText, setSearchText] = useState("")
    const [selectedField, setSelectedField] = useState("")
    const [pageSize, setPageSize] = useState("10")
    const [page, setPage] = useState(1)
    const { data, isLoading, isError } = useSubjectData(searchText, selectedField, pageSize, page)
    const { data: courseGroupData } = useCourseGroupData()
    const courseGroupOptions = convertToSelectOptions(courseGroupData?.data)
    const columns = useMemo(
        () => [
            {
                accessorFn: row => row?.subjectID,
                id: "destination",
                cell: info => {
                    return (
                        <p >
                            {info?.row?.original?.subjectID}
                        </p>
                    )
                },
                header: () => <span>ID</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.name,
                id: "course",
                cell: info => {
                    return (
                        <div className="flex items-center gap-1">
                            {
                                info?.row?.original?.thumbnail ? <img className="h-8 w-8 object-cover rounded-full" src={info?.row?.original?.image} alt="" />
                                    : <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            }
                            <p className="flex items-center gap-1">
                                {info?.row?.original?.title}
                            </p>
                        </div>

                    )
                },
                header: () => <span>Subject Name</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.courseTitle,
                id: "destination",
                header: () => <span>Course</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.description,
                id: "duration",
                cell: info => {
                    return (
                        <p className="flex items-center gap-1">
                            {ConvertHtmlToPlainText(info?.row?.original?.description?.slice(0, 50))}
                        </p>
                    )
                },
                header: () => <span>Description</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row,
                id: "action",
                cell: (info) => {
                    return (
                        <div className="flex gap-2 text-base justify-center">
                            <AddSubjectModal asChild edit editData={info?.row?.original}>
                                <FiEdit2 className="text-[#4365A7] cursor-pointer" />
                            </AddSubjectModal>
                            <FaRegTrashCan className="text-red-600 cursor-pointer" />
                        </div>
                    );
                },
                header: () => <span className='flex justify-center'>Action</span>,
                footer: props => props.column.id,
            },
        ],
        [],
    );

    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-end">
                <AddSubjectModal asChild>
                    <div>
                        <TopButton buttonName={"Add Subject"} className={""} handleButtonClick={() => { }} />
                    </div>
                </AddSubjectModal>
            </div>
            <div>
                <SearchPagination totalPage={data?.totalPage} setPage={setPage} page={page} setPageSize={setPageSize} setSelectedField={setSelectedField} options={courseGroupOptions} inputPlaceholder={"Search Subject"} setSearchText={setSearchText} selectPlaceholder={"Select Course"} />
                <ReactTable
                    isLoading={isLoading}
                    isError={isError}
                    columns={columns}
                    data={data?.data ?? []}
                />
            </div>
        </div>
    )
}
