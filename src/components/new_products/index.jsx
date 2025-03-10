import React from "react"
import {useTranslation} from "react-i18next"

// img
import card1 from "../../assets/img/new/1.svg"
import card2 from "../../assets/img/new/2.svg"
import card3 from "../../assets/img/new/3.svg"

const NewProducts = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[50px] bg-[#1f2025]">
            <div className="container2 flex flex-col gap-[50px]">
                <h1 className="title">{t("newProductsTitle")}</h1>

                <div className="grid grid-cols-3 gap-[20px] max-[1055px]:grid-cols-2 max-[680px]:grid-cols-1">
                    {/* card 1 */}
                    <div className="flex flex-col gap-[5px] rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="h-[160px] flex justify-center items-center relative mb-4">
                            <p className="absolute left-0 top-0 text-[#bebebe] text-[12px] p-[2px_4px] rounded-lg border border-[#3d3d3d] bg-[#25262d]">
                                {t("soonLabel")}
                            </p>
                            <img
                                className="h-full w-full object-contain"
                                src={card1}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                            {t("newProduct1Title")}
                        </h1>
                        <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                            {t("newProduct1Desc")}
                        </p>
                    </div>

                    {/* card 2 */}
                    <div className="flex flex-col gap-[5px] rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="h-[160px] flex justify-center items-center relative mb-4">
                            <p className="absolute left-0 top-0 text-[#bebebe] text-[12px] p-[2px_4px] rounded-lg border border-[#3d3d3d] bg-[#25262d]">
                                {t("soonLabel")}
                            </p>
                            <img
                                className="h-full w-full object-contain"
                                src={card2}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                            {t("newProduct2Title")}
                        </h1>
                        <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                            {t("newProduct2Desc")}
                        </p>
                    </div>

                    {/* card 3 */}
                    <div className="flex flex-col gap-[5px] rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="h-[160px] flex justify-center items-center relative mb-4">
                            <p className="absolute left-0 top-0 text-[#bebebe] text-[12px] p-[2px_4px] rounded-lg border border-[#3d3d3d] bg-[#25262d]">
                                {t("soonLabel")}
                            </p>
                            <img
                                className="h-full w-full object-contain"
                                src={card3}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold text-[18px] text-[#f1f1f1]">
                            {t("newProduct3Title")}
                        </h1>
                        <p className="font-normal text-[16px] leading-[130%] text-[#bebebe] max-[360px]:text-[14px]">
                            {t("newProduct3Desc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewProducts
