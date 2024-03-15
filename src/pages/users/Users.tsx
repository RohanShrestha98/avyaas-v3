import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTable } from "../../components/Table";
import SearchPagination from "@/components/SearchPagination";
import { useStudentData } from "@/hooks/useQueryData";

export default function Users() {
    const { data } = useStudentData()
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
    const trips = [
        {
            destination: "Paris",
            duration: "5 days",
            price: 1200,
            vehicle: "Plane"
        },
        {
            destination: "Tokyo",
            duration: "10 days",
            price: 2500,
            vehicle: "Train"
        },
        {
            destination: "New York",
            duration: "7 days",
            price: 1800,
            vehicle: "Plane"
        },
        {
            destination: "Tokyo",
            duration: "10 days",
            price: 2500,
            vehicle: "Train"
        },
        {
            destination: "New York",
            duration: "7 days",
            price: 1800,
            vehicle: "Plane"
        },
        {
            destination: "Tokyo",
            duration: "10 days",
            price: 2500,
            vehicle: "Train"
        },
        {
            destination: "New York",
            duration: "7 days",
            price: 1800,
            vehicle: "Plane"
        },
        {
            destination: "Tokyo",
            duration: "10 days",
            price: 2500,
            vehicle: "Train"
        },
        {
            destination: "New York",
            duration: "7 days",
            price: 1800,
            vehicle: "Plane"
        },
        {
            destination: "London",
            duration: "3 days",
            price: 900,
            vehicle: "Bus"
        }
    ];

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
                header: () => <span>Name</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.id,
                id: "id",
                header: () => <span>ID</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.email,
                id: "email",
                header: () => <span>Email</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.phone,
                id: "phone",
                cell: info => info.getValue(),
                header: () => <span>Phone</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.verified,
                id: "verified",
                cell: info => {
                    return (
                        <p className={`inline-block text-sm px-3 rounded-full py-[2px] font-medium ${info?.row?.original?.verified ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FEF3F2] text-[#B42318]"}`}>
                            {info?.row?.original?.verified ? "Verified" : "Not verified"}
                        </p>
                    )
                },
                // info.getValue(),
                header: () => <span>Verified</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row,
                id: "action",
                cell: (info) => {
                    return (
                        <div className="flex gap-2  justify-center">
                            <div className="border border-[#4365A7] text-xs font-medium px-4 py-1 rounded-full cursor-pointer text-[#4365A7]">
                                Add Payment
                            </div>
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
        <div className="flex flex-col gap-4 p-6">
            <div>
                <SearchPagination options={options} inputPlaceholder={"Search User"} selectPlaceholder={"Select Course"} />
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
