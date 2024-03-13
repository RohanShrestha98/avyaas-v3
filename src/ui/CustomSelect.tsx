
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CustomSelect({ options, label, placeholder, className }) {
    return (
        <Select>
            <SelectTrigger className={`w-[180px] border rounded-lg ${className}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-white">
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {
                        options?.map((item) => {
                            return <SelectItem value={item?.value}>{item?.label}</SelectItem>
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

