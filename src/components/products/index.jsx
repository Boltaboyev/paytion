import React from "react"
import {useTranslation} from "react-i18next"

// img
import card1 from "../../assets/img/products/1.svg"
import card2 from "../../assets/img/products/2.svg"
import card3 from "../../assets/img/products/3.png"

const Products = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[50px] bg-[#1f2025]">
            <div className="container2 flex flex-col gap-[50px]">
                <h1 className="title">{t("productsTitle")}</h1>

                <div className="grid grid-cols-1 gap-[20px]">
                    {/* card 1 */}
                    <div className="wave grid grid-cols-2 max-[880px]:flex flex-col-reverse gap-[20px] items-center rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="flex flex-col items-start gap-[20px] pl-[50px] max-[880px]:p-0 max-[880px]:w-full">
                            <h1 className="font-medium text-[35px] leading-[110%] text-[#f1f1f1] max-[550px]:text-[20px]">
                                {t("product1Title")}
                            </h1>

                            <p className="font-normal leading-[140%] text-[#bebebe] max-[550px]:text-[14px]">
                                {t("product1Desc")}
                            </p>

                            <button className="btn max-[550px]:text-[13px] max-[390px]:w-full">
                                {t("product1Btn")}
                            </button>
                        </div>

                        <img
                            className="max-[880px]:h-[200px] object-contain"
                            src={card1}
                            alt=""
                        />
                    </div>

                    {/* card 2 */}
                    <div className="grid grid-cols-2 max-[880px]:flex flex-col-reverse gap-[20px] items-center rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="flex flex-col items-start gap-[20px] pl-[50px] max-[880px]:p-0 max-[880px]:w-full">
                            <h1 className="font-medium text-[35px] leading-[110%] text-[#f1f1f1] max-[550px]:text-[20px]">
                                {t("product2Title")}
                            </h1>

                            <p className="font-normal leading-[140%] text-[#bebebe] max-[550px]:text-[14px]">
                                {t("product2Desc")}
                            </p>

                            <button className="btn max-[550px]:text-[13px] max-[390px]:w-full">
                                {t("product2Btn")}
                            </button>
                        </div>

                        <img
                            className="max-[880px]:h-[200px] object-contain"
                            src={card2}
                            alt=""
                        />
                    </div>

                    {/* card 3 */}
                    <div className="showcase grid grid-cols-2 max-[880px]:flex flex-col-reverse gap-[20px] items-center rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <div className="flex flex-col items-start gap-[20px] pl-[50px] max-[880px]:p-0 max-[880px]:w-full">
                            <h1 className="font-medium text-[35px] leading-[110%] text-[#f1f1f1] max-[550px]:text-[20px]">
                                {t("product3Title")}
                            </h1>

                            <p className="font-normal leading-[140%] text-[#bebebe] max-[550px]:text-[14px]">
                                {t("product3Desc")}
                            </p>

                            <button className="btn max-[550px]:text-[13px] max-[390px]:w-full">
                                {t("product3Btn")}
                            </button>
                        </div>

                        <img
                            className="max-[880px]:h-[200px] object-contain"
                            src={card3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
