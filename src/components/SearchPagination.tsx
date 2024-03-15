import CustomSelect from "@/ui/CustomSelect";
import InputField from "@/ui/InputField";
import Pagination from "./Pagination";

export default function SearchPagination({ options, inputPlaceholder, selectPlaceholder, select = true }) {
    return (
        <div className="flex items-center justify-between border-t border-l border-r bg-white p-2 px-3 rounded-t-xl">
            <div className="flex items-center gap-2">
                <InputField placeholder={inputPlaceholder} classname={"w-[220px]"} defaultValue={undefined} required={undefined} label={undefined} />
                {select && <CustomSelect className={"w-[220px]"} options={options} label={""} placeholder={selectPlaceholder} />}
            </div>
            <Pagination />
        </div>
    )
}
