
export default function ChooseImage() {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-[#344054] font-medium text-sm">Image</h1>
            <div className="flex items-center rounded-[4px]">
                <div className="w-full border-l border-t border-b  h-8 rounded-l-[6px] flex items-center  px-2 text-sm text-gray-500 bg-white">Select a image</div>
                <input id="chooseImg" className="hidden" type="file" />
                <label htmlFor="chooseImg" className="whitespace-nowrap cursor-pointer text-sm text-[#4365A7] bg-white border-[#4365A7] border rounded-r-[6px]  h-8 flex items-center px-3 ">Browse File</label>
            </div>
        </div>
    )
}
