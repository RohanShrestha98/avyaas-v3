import { Button as ShadcnButton } from "@/components/ui/button"

export default function Button({ buttonName }) {
    return (
        <div>
            <ShadcnButton className="bg-blue-600 text-white h-8 rounded">{buttonName}</ShadcnButton>
        </div>
    )
}
