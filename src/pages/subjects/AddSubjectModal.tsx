import ChooseImage from "@/components/ChooseImage"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Button from "@/ui/Button"
import CustomSelect from "@/ui/CustomSelect"
import InputField from "@/ui/InputField"
import { useForm } from "react-hook-form";
import { useCourseMutation } from "@/hooks/useMutateData";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useCourseGroupData } from "@/hooks/useQueryData";
import { convertToSelectOptions } from "@/utils/convertToSelectOptions";


export default function AddCourseModal({ asChild, children, edit, editData }) {
    const [open, setOpen] = useState(false)
    const { data } = useCourseGroupData()
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedImage, setSelectedImage] = useState()
    const [value, setValue] = useState(edit ? editData?.description : "")

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            courseid: editData?.courseID,
            title: editData?.title,
        }
    });
    const categoryOptions = convertToSelectOptions(data?.data)

    const instructorMutation = useCourseMutation()

    const onSubmitHandler = async (data) => {
        const postData = {
            ...data,
            file: selectedImage,
            available: true,
            coursegroupid: selectedCategory,
            description: value,
        }
        try {
            const response = await instructorMutation.mutateAsync([edit ? "patch" : "post", edit ? `update/${editData?.id}` : "create/", postData])
            console.log("response", response)
            setOpen(false)
            reset()
        } catch (err) {
            console.log("err", err)
        }

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild={asChild}>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  min-w-[500px] bg-[#FAFAFA]">
                <DialogTitle className="text-[#22244D] font-medium text-base">{edit ? "Edit" : "Add"} Course</DialogTitle>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-col gap-4">
                        <ChooseImage setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
                        <div className="grid grid-cols-2 gap-2">
                            <CustomSelect options={categoryOptions} placeholder={edit ? editData?.courseGroup?.title : "Select category"} className={"w-full text-sm text-gray-500"} labelName={"Category"} required={true} setSelectedField={setSelectedCategory} />
                            <InputField register={register} name="courseid" placeholder="Enter Course ID" className="w-full text-sm text-gray-500" defaultValue="" required label="Course ID" />
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <InputField register={register} name="title" placeholder="Enter Course Name" className="w-full text-sm text-gray-500" defaultValue="" required label="Course Name" />
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">Is Available ?</p>
                            <Switch className="bg-gray-300" />
                        </div>
                        <ReactQuill theme="snow" className="h-[100px] mb-10" value={value} onChange={setValue} />

                    </div>
                    <div className="grid grid-cols-2 w-full mt-10 gap-2">
                        <Button buttonName={"Clear"} className={"w-full "} danger handleButtonClick={""} icon={""} />
                        <Button type="submit" buttonName={`${edit ? "Edit" : "Add"} Course`} handleButtonClick={() => { }} className={"w-full"} icon={""} />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
