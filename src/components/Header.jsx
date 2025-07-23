import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from "react-icons/fa6";

export default function Header() {
    const [language, setLanguage] = useState([]);
    const [listShow, setListShow] = useState(false);
    const { t } = useTranslation(); 

    useEffect(() => {
        fetch("/languages.json")
            .then(res => res.json())
            .then(data => setLanguage(data))
            .catch((err) => console.log("Error loading languages.json:", err));
    }, []);

    const toggleList = () => setListShow(!listShow);

    const listSelected = (code) => {
        i18n.changeLanguage(code);
        document.documentElement.setAttribute("dir", i18n.dir(code));
        setListShow(false); 
    };
      useEffect(() => {
        // Set dir attribute on load based on current language
        document.documentElement.setAttribute("dir", i18n.dir());
    }, []);
    return (
        <div className='w-full bg-[#303589] text-white relative'>
            <div className='flex justify-between px-20 py-4 items-center'>
                <div className='text-2xl font-bold'>
                    {t("logoName")}
                </div>
                <div className='relative' >
                    <div className='flex items-center gap-2'> 
                   {i18n.language.toLocaleUpperCase()} 
                    <FaGlobe onClick={toggleList} className='cursor-pointer text-3xl' />
                    </div>
                    {listShow && (
                        <ul className='absolute right-0 px-4 mt-2 bg-white text-black rounded shadow-md z-10'>
                            {language.map((lang) => (
                                <li key={lang.code} onClick={() => listSelected(lang.code)} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                    {lang.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
