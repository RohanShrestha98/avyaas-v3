import { Input } from '@/components/ui/input'

export default function InputField({ type, placeholder, classname, defaultValue, required, label }) {
    return (
        <div>
            {
                label ?
                    <div>
                        <div>{label}</div>
                        <Input type={type} className={classname} defaultValue={defaultValue} required={required} placeholder={placeholder} />
                    </div>
                    :
                    <Input type={type} className={classname} defaultValue={defaultValue} required={required} placeholder={placeholder} />
            }

        </div>
    )
}
