import CustomSelect from "@/ui/CustomSelect";
import InputField from "@/ui/InputField";

export default function Pagination({ totalPage = "5" }) {
    const options = [
        {
            value: "10",
            label: "10 items"
        },
        {
            value: "20",
            label: "20 items"
        },
        {
            value: "30",
            label: "30 items"
        },
        {
            value: "40",
            label: "40 items"
        },
    ]
    return (
        <div className="flex items-center gap-3 text-[#344054] font-normal text-sm">
            <CustomSelect className={"w-[100px] h-7"} options={options} label={""} placeholder={"10 items"} />
            <p>Page</p>
            <InputField type={"number"} placeholder={""} classname={"w-[60px] h-7"} defaultValue={undefined} required={undefined} label={undefined} />
            <p>of  {totalPage}</p>

        </div>
    )
}
