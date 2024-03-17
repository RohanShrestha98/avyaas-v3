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
import { useSubjectMutation } from "@/hooks/useMutateData";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useCourseData } from "@/hooks/useQueryData";
import { convertToSelectOptions } from "@/utils/convertToSelectOptions";


export default function AddSubjectModal({ asChild, children, edit, editData }) {
    const [open, setOpen] = useState(false)
    const { data } = useCourseData()
    const [selectedCourse, setSelectedCourse] = useState()
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
            subjectid: editData?.subjectID,
            title: editData?.title,
        }
    });
    const courseOptions = convertToSelectOptions(data?.data)

    const subjectMutation = useSubjectMutation()

    const onSubmitHandler = async (data) => {
        const postData = {
            ...data,
            file: selectedImage,
            courseid: selectedCourse,
            description: value,
        }
        try {
            const response = await subjectMutation.mutateAsync([edit ? "patch" : "post", edit ? `update/${editData?.id}` : "create/", postData])
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
                <DialogTitle className="text-[#22244D] font-medium text-base">{edit ? "Edit" : "Add"} Subject</DialogTitle>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-col gap-4">
                        <ChooseImage setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
                        <div className="grid grid-cols-2 gap-2">
                            <CustomSelect options={courseOptions} placeholder={edit ? editData?.courseGroup?.title : "Select category"} className={"w-full text-sm text-gray-500"} labelName={"Category"} required={true} setSelectedField={setSelectedCourse} />
                            <InputField register={register} name="subjectid" placeholder="Enter Subject id" className="w-full text-sm text-gray-500" defaultValue="" required label="Subject ID" />
                        </div>
                        <div className="grid grid-cols-1">
                            <InputField register={register} name="title" placeholder="Enter Subject" className="w-full text-sm text-gray-500" defaultValue="" required label="Subject Name" />

                        </div>
                        <ReactQuill theme="snow" className="h-[100px] mb-10" value={value} onChange={setValue} />

                    </div>
                    <div className="grid grid-cols-2 w-full mt-14 gap-2">
                        <Button buttonName={"Clear"} className={"w-full "} danger handleButtonClick={""} icon={""} />
                        <Button type="submit" buttonName={`${edit ? "Edit" : "Add"} Subject`} handleButtonClick={() => { }} className={"w-full"} icon={""} />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
