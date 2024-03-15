import ChooseImage from "@/components/ChooseImage"

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Button from "@/ui/Button"
import InputField from "@/ui/InputField"
import { useForm } from "react-hook-form";
import { useCourseMutation } from "@/hooks/useMutateData";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function AddCourseGroupModal({ asChild, children, edit = false }) {
    const [value, setValue] = useState()
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const instructorMutation = useCourseMutation()

    const onSubmitHandler = async (data) => {
        const postData = {
            ...data,
            description: value,
        }
        try {
            const response = await instructorMutation.mutateAsync(["post", "", postData])
            console.log("response", response)
            reset()
        } catch (err) {
            console.log("err", err)
        }

    }

    return (
        <Dialog>
            <DialogTrigger asChild={asChild}>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  min-w-[500px] bg-[#FAFAFA]">
                <DialogTitle className="text-[#22244D] font-medium text-base">{edit ? "Edit" : "Add"} Category</DialogTitle>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-col gap-4">
                        <ChooseImage />
                        <div className="grid grid-cols-2 gap-2">
                            <InputField register={register} name="courseid" placeholder="Enter Course Id" className="w-full text-sm text-gray-500" defaultValue="" required label="Course ID" />
                            <InputField register={register} name="title" placeholder="Enter Category Name" className="w-full text-sm text-gray-500" defaultValue="" required label="Category Name" />
                        </div>
                        <ReactQuill theme="snow" className="h-[100px] mb-10" value={value} onChange={setValue} />

                    </div>
                    <div className="grid grid-cols-2 w-full mt-10 gap-2">
                        <Button buttonName={"Clear"} className={"w-full "} danger handleButtonClick={""} icon={""} />
                        <Button type="submit" buttonName={`${edit ? "Edit" : "Add"} Category`} handleButtonClick={() => { }} className={"w-full"} icon={""} />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
