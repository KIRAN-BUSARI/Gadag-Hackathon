
export function PasswordInputBox({ label, placeholder, onChange, type, value, name }) {
    return <>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <div className="">
            <input onChange={onChange} placeholder={placeholder} name={name} value={value} type={type} className="w-full px-2 py-1 border rounded border-slate-200 text-slate-900" />
        </div>
    </>
}