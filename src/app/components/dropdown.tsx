"use client"
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface DropdownItem {
    language: string;
    flag: StaticImageData;
    path: string
}

interface DropdownProps {
    label: any;
    items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [flag, setFlag] = useState("");

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left bg-black">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-custom-yellow text-sm font-medium text-white focus:outline-none"
            >
                {label}
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-custom-yellow ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1 bg-white" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {items.map((item, index) => (
                            <Link href={item.path} key={index} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Image src={item.flag} alt={item.language} width={20} height={20} className="mr-2" />
                                {item.language}
                            </Link>

                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
