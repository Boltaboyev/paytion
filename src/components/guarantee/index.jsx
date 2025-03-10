import React from "react"
import {useTranslation} from "react-i18next"

// img
import card1 from "../../assets/img/guarantee/1.png"
import card2 from "../../assets/img/guarantee/2.png"
import card3 from "../../assets/img/guarantee/3.png"
import card4 from "../../assets/img/guarantee/4.png"

const Guarantee = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[40px]">
            <div className="container2 flex flex-col gap-[20px]">
                <h1 className="title mb-10">{t("guaranteeTitle")}</h1>

                <div className="grid grid-cols-3 gap-[20px] max-[1140px]:grid-cols-1">
                    <div className="col-span-1 rounded-xl flex flex-col gap-[5px] border border-[#3d3d3d] p-[20px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="flex justify-center items-center">
                            <img src={card1} alt="" />
                        </div>
                        <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                            {t("licenseExchangeTitle")}
                        </h1>
                        <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                            {t("licenseExchangeDescription")}
                        </p>
                    </div>

                    <div className="col-span-2 max-[1140px]:col-span-1 rounded-xl flex flex-col justify-end items-end gap-[5px] border border-[#3d3d3d] p-[20px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21] bg-[url(assets/img/guarantee/2.png)] bg-cover bg-no-repeat bg-center">
                        <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                            {t("internationalPaymentsTitle")}
                        </h1>
                        <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                            {t("internationalPaymentsDescription")}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-[20px] max-[1140px]:grid-cols-1">
                    <div className="col-span-2 max-[1140px]:col-span-1 rounded-xl flex flex-col justify-between items-center gap-[5px] border border-[#3d3d3d] p-[20px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="flex justify-center items-center">
                            <img src={card3} alt="" />
                        </div>

                        <div className="flex justify-between items-center max-[740px]:flex-col max-[740px]:items-start gap-[10px] w-full">
                            <div className="flex flex-col gap-[5px]">
                                <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                                    {t("happyClientsTitle")}
                                </h1>
                                <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                                    {t("happyClientsDescription")}
                                </p>
                            </div>

                            <button className="btn text-nowrap max-[420px]:w-full">
                                {t("viewReviewsButton")}
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-xl flex flex-col justify-between items-end text-end gap-[5px] border border-[#3d3d3d] p-[20px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="flex justify-center items-center">
                            <img src={card4} alt="" />
                        </div>
                        <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                            {t("licenseExchangeTitle")}
                        </h1>
                        <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                            {t("licenseExchangeDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guarantee
