import SearchPagination from "@/components/SearchPagination";
import { ReactTable } from "../../components/Table";
import { useMemo } from "react";
import TopButton from "@/components/TopButton";
import { useCourseData } from "@/hooks/useQueryData";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { ConvertHtmlToPlainText } from "@/utils/convertHtmlToPlainText";
import AddCourseModal from "./AddCourseModal";

export default function Courses() {
    const { data } = useCourseData()
    const options = [
        {
            value: "ijsd2",
            label: "Hello"
        },
        {
            value: "ijsd3",
            label: "Hello1"
        },
        {
            value: "ijsd45",
            label: "Hello2"
        },
        {
            value: "ijsd4523",
            label: "Hello3"
        },
        {
            value: "ijsd234",
            label: "Hell4"
        },
    ]
    const columns = useMemo(
        () => [
            {
                accessorFn: row => row?.courseID,
                id: "destination",
                cell: info => {
                    return (
                        <p >
                            {info?.row?.original?.courseGroup?.courseGroupID}
                        </p>
                    )
                },
                header: () => <span>Category</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.name,
                id: "course",
                cell: info => {
                    return (
                        <div className="flex items-center gap-1">
                            {
                                info?.row?.original?.image ? <img className="h-8 w-8 object-cover rounded-full" src={info?.row?.original?.image} alt="" />
                                    : <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            }
                            <p className="flex items-center gap-1">
                                {info?.row?.original?.title}
                            </p>
                        </div>

                    )
                },
                header: () => <span>Course Name</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.courseID,
                id: "destination",
                header: () => <span>Course ID</span>,
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
                            <AddCourseModal asChild edit editData={info?.row?.original}>
                                <FiEdit2 className="text-[#4365A7] cursor-pointer" />
                            </AddCourseModal>
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
                <AddCourseModal asChild>
                    <div>
                        <TopButton buttonName={"Add Course"} className={""} handleButtonClick={() => { }} />
                    </div>
                </AddCourseModal>
            </div>
            <div>
                <SearchPagination options={options} inputPlaceholder={"Search Courses"} selectPlaceholder={"Select Course Group"} />
                <ReactTable
                    columns={columns}
                    data={data?.data ?? []}
                    currentPage={1}
                    totalPage={1}
                />
            </div>
        </div>
    )
}
