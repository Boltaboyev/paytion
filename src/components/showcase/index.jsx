import React from "react"
import {useTranslation} from "react-i18next"

// img
import logo from "../../assets/img/logo.png"
import icn1 from "../../assets/img/showcase/1.png"
import icn2 from "../../assets/img/showcase/2.png"
import icn3 from "../../assets/img/showcase/3.png"
import phone from "../../assets/img/showcase/showcase-phone.png"
import mobile from "../../assets/img/showcase/mobile-showcase.png"

const Showcase = () => {
    const {t} = useTranslation()

    return (
        <section className="showcase py-[100px] max-[800px]:py-[20px] bg-[#1f2025]">
            <div className="container2 flex flex-col gap-[20px] justify-center items-start relative z-[1] max-[800px]:items-center">
                <img src={logo} alt="" className="max-[350px]:w-[150px]" />

                <p className="font-normal leading-[140%] text-[#f1f1f1] max-[800px]:text-center">
                    {t("financialServices")}
                </p>

                <img
                    src={mobile}
                    alt=""
                    className="h-[300px] hidden max-[800px]:block"
                />

                <button className="btn max-[325px]:w-full">
                    {t("learnMore")}
                </button>

                <div className="grid grid-cols-3 gap-[15px] max-[800px]:grid-cols-1">
                    <div className="flex flex-col justify-between items-start gap-[10px] p-[15px] rounded-xl border w-[250px] max-[800px]:w-full border-[#3d3d3d] backdrop-blur-[10px] shadow-[0_4px_20px_0_rgba(15,15,15,0.2)] bg-gradient-to-br from-[rgba(37,37,37,0.3)] via-[rgba(51,52,58,0.3)] to-[rgba(26,26,26,0.3)]">
                        <img src={icn1} alt="" className="h-[50px]" />

                        <p className="font-normal text-[16px] leading-[130%] text-[#f1f1f1]">
                            {t("offices")}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between items-start gap-[10px] p-[15px] rounded-xl border w-[250px] max-[800px]:w-full border-[#3d3d3d] backdrop-blur-[10px] shadow-[0_4px_20px_0_rgba(15,15,15,0.2)] bg-gradient-to-br from-[rgba(37,37,37,0.3)] via-[rgba(51,52,58,0.3)] to-[rgba(26,26,26,0.3)]">
                        <img src={icn2} alt="" className="h-[50px]" />

                        <p className="font-normal text-[16px] leading-[130%] text-[#f1f1f1]">
                            {t("cryptoOperations")}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between items-start gap-[10px] p-[15px] rounded-xl border w-[250px] max-[800px]:w-full border-[#3d3d3d] backdrop-blur-[10px] shadow-[0_4px_20px_0_rgba(15,15,15,0.2)] bg-gradient-to-br from-[rgba(37,37,37,0.3)] via-[rgba(51,52,58,0.3)] to-[rgba(26,26,26,0.3)]">
                        <img src={icn3} alt="" className="h-[50px]" />

                        <p className="font-normal text-[16px] leading-[130%] text-[#f1f1f1]">
                            {t("happyClients")}
                        </p>
                    </div>
                </div>

                <img
                    src={phone}
                    alt=""
                    className="absolute z-[-1] h-[180%] right-0 max-[1040px]:h-[130%] max-[800px]:hidden"
                />
            </div>
        </section>
    )
}

export default Showcase
