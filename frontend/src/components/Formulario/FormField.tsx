/* eslint-disable @typescript-eslint/no-unused-vars */
import { FiUser, FiCalendar, FiMail, FiPhone, FiBriefcase, FiCheckSquare, FiFileText, FiMessageSquare } from 'react-icons/fi';

interface FormFieldProps {
  label: string;
  type: string;
  value: string | number | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon: React.ReactNode;
  options?: { value: string; label: string }[];
}

export default function FormField({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  icon,
  options,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        {icon} {label}
      </label>
      {type === 'select' ? (
        <select
          value={value as string}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required={required}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value as string | number}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}