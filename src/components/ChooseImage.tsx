import { RxCross2 } from "react-icons/rx";

export default function ChooseImage({ setSelectedImage, selectedImage }) {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-[#344054] font-medium text-sm">Image</h1>
            <div className="flex items-center rounded-[4px]">
                <div className="w-full border-l justify-between border-t border-b  h-8 rounded-l-[6px] flex items-center   px-2 text-sm text-gray-500 bg-white">{selectedImage?.[0]?.name ?? "Select a image"} {selectedImage?.[0]?.name && <RxCross2 className="text-red-600" onClick={() => setSelectedImage()} />}</div>
                <input id="chooseImg" onChange={(e) => setSelectedImage(e.target.files)} className="hidden" type="file" />
                <label htmlFor="chooseImg" className="whitespace-nowrap cursor-pointer text-sm text-[#4365A7] bg-white border-[#4365A7] border rounded-r-[6px]  h-8 flex items-center px-3 ">Browse File</label>
            </div>
        </div>
    )
}
