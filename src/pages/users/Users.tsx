import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/Table";
import CustomSelect from "../../ui/CustomSelect";
import InputField from "@/ui/InputField";
import Button from "@/ui/Button";
import Pagination from "@/components/Pagination";

export default function Users() {
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
                accessorFn: row => row?.destination,
                id: "destination",
                header: () => <span>Destination</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.duration,
                id: "duration",
                cell: info => info.getValue(),
                header: () => <span>Duration</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.price,
                id: "price",
                cell: info => {
                    return (
                        <p>
                            Rs. {info?.row?.original?.price}
                        </p>
                    )
                },
                // info.getValue(),
                header: () => <span>Price per person</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row?.vehicle,
                id: "vehicle",
                cell: info => info.getValue(),
                header: () => <span>Vehicle Type</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row,
                id: "action",
                cell: (info) => {
                    return (
                        <div className="flex gap-2 text-xl justify-center">
                            <div onClick={() => navigate("/detail")}>
                                {/* <ViewTableSvg className='cursor-pointer' /> */}
                            </div>
                            <div onClick={() => {
                                navigate("/addPackages", {
                                    state: {
                                        data: info?.row?.original,
                                    },
                                });
                            }}>
                                {/* <EditTableSvg className='cursor-pointer' /> */}
                            </div>
                            {/* <div onClick={() => setModalOpen(true)}> */}
                            {/* <DeleteTableSvg className='cursor-pointer' /> */}
                            {/* </div> */}
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
            <div className="flex items-center gap-2">
                <InputField placeholder={"Search courses"} type={"text"} classname={""} />
                <CustomSelect className={""} options={options} label={"Select Options"} placeholder={"Select Options 23"} />
                <Button buttonName={"Course"} />
                <Pagination />
            </div>
            <Table
                loading={false}
                error={false}
                columns={columns}
                data={trips ?? []}
                currentPage={1}
                totalPage={1}
            />
        </div>
    )
}
