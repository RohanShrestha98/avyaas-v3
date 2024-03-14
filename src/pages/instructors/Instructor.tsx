import SearchPagination from "@/components/SearchPagination";
import { ReactTable } from "../../components/Table";
import { useMemo } from "react";
import AddInstructorModal from "./AddInstructorModal";
import TopButton from "@/components/TopButton";
import { useTeacherData } from "@/hooks/useQueryData";
import { useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Instructor() {
    const { data } = useTeacherData()
    console.log("data", data)
    const navigate = useNavigate()
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
                accessorFn: row => row?.name,
                id: "price",
                cell: info => {
                    return (
                        <div className="flex items-center gap-1">
                            {
                                info?.row?.original?.image ? <img className="h-8 w-8 object-cover rounded-full" src={info?.row?.original?.image} alt="" />
                                    : <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                            }
                            <p className="flex items-center gap-1">
                                {info?.row?.original?.firstName}
                                {info?.row?.original?.middleName}
                                {info?.row?.original?.lastName}
                            </p>
                        </div>

                    )
                },
                // info.getValue(),
                header: () => <span>Instructor Name</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.email,
                id: "destination",
                header: () => <span>Email</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.phone,
                id: "duration",
                cell: info => info.getValue(),
                header: () => <span>Phone</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.subject,
                id: "price",
                // info.getValue(),
                header: () => <span>Subject</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.course,
                id: "vehicle",
                cell: info => info.getValue(),
                header: () => <span>Course</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row,
                id: "action",
                cell: (info) => {
                    return (
                        <div className="flex gap-2 text-base justify-center">
                            <FiEdit2 className="text-[#4365A7] cursor-pointer" />
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
                <AddInstructorModal asChild>
                    <div>
                        <TopButton buttonName={"Add Instructor"} className={""} handleButtonClick={() => console.log(("Hello"))} />
                    </div>
                </AddInstructorModal>
            </div>
            <div>
                <SearchPagination options={options} inputPlaceholder={"Search Instructors"} selectPlaceholder={"Select Course"} />
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
