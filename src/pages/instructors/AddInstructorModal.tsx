import ChooseImage from "@/components/ChooseImage"
import * as Yup from "yup";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Button from "@/ui/Button"
import CustomSelect from "@/ui/CustomSelect"
import InputField from "@/ui/InputField"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useInstructorMutation } from "@/hooks/useMutateData";


export default function AddInstructorModal({ asChild, children }) {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onChange",
    });
    const instructorMutation = useInstructorMutation()

    const onSubmitHandler = async () => {
        const response = await 
    }

    console.log("watch", watch())
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

    return (
        <Dialog>
            <DialogTrigger asChild={asChild}>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  min-w-[500px] bg-[#FAFAFA]">
                <DialogTitle className="text-[#22244D] font-medium text-base">Add instructor</DialogTitle>
                <form onSubmit={handleSubmit((data) => console.log("data", data))}>
                    <div className="flex flex-col gap-4">
                        <ChooseImage />
                        <div className="grid grid-cols-2 gap-2">
                            <CustomSelect options={options} label={""} placeholder={"Select course"} className={"w-full text-sm text-gray-500"} labelName={"Course"} required={true} />
                            <CustomSelect options={options} label={""} placeholder={"Select subject"} className={"w-full text-sm text-gray-500"} labelName={"Subject"} required={true} />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <InputField register={register} name="firstName" placeholder="Enter First Name" className="w-full text-sm text-gray-500" defaultValue="" required label="First Name" />
                            <InputField register={register} name="middleName" placeholder="Enter Middle Name" className="w-full text-sm text-gray-500" defaultValue="" required={false} label="Middle Name" />
                            <InputField register={register} name="lastName" placeholder="Enter Last Name" className="w-full text-sm text-gray-500" defaultValue="" required label="Last Name" />
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <CustomSelect options={options} label={""} placeholder={"Select gender"} className={"w-full text-sm text-gray-500"} labelName={"Gender"} required={true} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <InputField register={register} name={"email"} type="email" placeholder={"Enter email"} classname={"w-full  text-sm text-gray-500"} defaultValue={""} required={false} label={"Email"} />
                            <InputField register={register} name="phone" type="number" placeholder={"Enter phone number"} classname={"w-full text-sm text-gray-500"} defaultValue={""} required={false} label={"Phone Number"} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 w-full mt-10 gap-2">
                        <Button buttonName={"Clear"} className={"w-full "} danger handleButtonClick={""} icon={""} />
                        <Button type="submit" buttonName={"Add instructor"} handleButtonClick={() => { }} className={"w-full"} icon={""} />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
