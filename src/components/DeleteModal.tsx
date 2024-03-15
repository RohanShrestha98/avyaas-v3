import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Button from "@/ui/Button"
import { useCourseMutation } from "@/hooks/useMutateData";
import 'react-quill/dist/quill.snow.css';


export default function DeleteModal({ asChild, children, title, desc }) {


    const instructorMutation = useCourseMutation()

    const handleDelete = async () => {
        const postData = {
            name: "name"
        }
        try {
            const response = await instructorMutation.mutateAsync(["delete", "", postData])
            console.log("response", response)
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
                <DialogTitle className="text-[#22244D] font-medium text-base">{title}</DialogTitle>
                <div>
                    <div className="grid grid-cols-2 w-full mt-10 gap-2">
                        <Button buttonName={"Clear"} className={"w-full "} danger handleButtonClick={""} icon={""} />
                        <Button type="submit" buttonName="Confirm" handleButtonClick={() => { handleDelete() }} className={"w-full"} icon={""} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
