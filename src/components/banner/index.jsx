import React from "react"
import {useTranslation} from "react-i18next"

// img
import banner from "../../assets/img/banner.png"
import logo from "../../assets/img/logo.png"
import qr from "../../assets/img/qr.png"
import google from "../../assets/img/googlePlay.png"
import apple from "../../assets/img/appStore.png"

const Banner = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[50px]">
            <div className="container2 grid grid-cols-2 gap-[10px] max-[420px]:p-[15px] items-center max-[690px]:flex flex-col-reverse showcase border border-[#3d3d3d] rounded-2xl p-[40px]">
                <div className="flex flex-col gap-[20px]">
                    <img src={logo} alt="" className="!w-[120px]"/>

                    <p className="font-normal text-[16px] leading-[130%] text-[#bebebe]">
                        {t("banner")}
                    </p>

                    <div className="flex justify-start items-center gap-[10px]">
                        <img src={qr} alt="" />
                        <div className="flex flex-col gap-[10px]">
                            <img src={google} alt="" />
                            <img src={apple} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center max-[775px]:hidden">
                    <img src={banner} alt="" className="h-[440px] object-contain" />
                </div>
            </div>
        </section>
    )
}

export default Banner
