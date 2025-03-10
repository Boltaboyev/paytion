import React, {useState, useEffect} from "react"

// i18next
import {useTranslation} from "react-i18next"
import i18n from "../../locales/i18nConfig"

// img
import logo from "../../assets/img/fav.png"

// icons
import {FiMenu} from "react-icons/fi"

const Header = () => {
    const {t} = useTranslation()

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "ru"
    )

    useEffect(() => {
        localStorage.setItem("language", language)
        i18n.changeLanguage(language)
    }, [language, i18n])

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value)
    }

    return (
        <header className="bg-[#1f2025] py-[15px] border-b border-[#3d3d3d] !z-[999]">
            <div className="container2 flex justify-between items-center gap-[10px]">
                <nav className="flex justify-start items-center gap-[40px]">
                    <img src={logo} alt="logo" className="h-[35px]" />

                    <ul className="flex justify-center items-center gap-[30px] *:cursor-pointer text-white max-[690px]:hidden">
                        <li>{t("products")}</li>
                        <li>{t("reviews")}</li>
                        <li>{t("aboutUs")}</li>
                    </ul>
                </nav>

                <nav className="flex justify-center items-center gap-[30px] z-[999]">
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="text-white border border-gray-500 rounded-[8px] p-[9px_20px] max-[690px]:hidden">
                        <option className="text-black" value="ru">
                            Русский
                        </option>
                        <option className="text-black" value="en">
                            English
                        </option>
                        <option className="text-black" value="uz">
                            O'zbek
                        </option>
                    </select>

                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="text-white border border-gray-500 rounded-[5px] p-[3px_10px] hidden max-[690px]:block z-[999]">
                        <option className="text-black" value="ru">
                            pу
                        </option>
                        <option className="text-black" value="en">
                            en
                        </option>
                        <option className="text-black" value="uz">
                            o'z
                        </option>
                    </select>

                    <button className="btn max-[690px]:hidden">
                        {t("becomeClient")}
                    </button>

                    <FiMenu className="text-[30px] text-white hidden max-[690px]:block" />
                </nav>
            </div>
        </header>
    )
}

export default Header
