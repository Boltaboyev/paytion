import React from "react"
import {useTranslation} from "react-i18next"

// img
import img from "../../assets/img/oleg.png"
import sign from "../../assets/img/sign.png"

const Oleg = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[30px]">
            <div className="container2 grid grid-cols-3 max-[870px]:grid-cols-1 gap-[30px] max-[500px]:gap-[10px] max-[410px]:p-[15px] h-[fit] border border-[#3d3d3d] rounded-2xl bg-[linear-gradient(141deg,#202124_0%,#24252d_42.71%,#1c1d21_100%)] p-[30px]">
                <div className="h-[330px] flex justify-center items-center max-[870px]:h-fit">
                    <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover object-top rounded-2xl max-[870px]:rounded-full max-[870px]:h-[200px] max-[870px]:w-[200px] max-[630px]:h-[150px] max-[630px]:w-[150px]"
                    />
                </div>

                <div className="flex flex-col gap-[10px] items-start justify-between h-full relative col-span-2">
                    <div className="flex flex-col gap-[15px]">
                        <p className="font-light text-[24px] leading-[135%] text-[#f1f1f1] max-[630px]:text-[16px] max-[380px]:text-[15px]">
                            {t("olegQuote")}
                        </p>

                        <div className="flex flex-col">
                            <p className="font-semibold text-[20px] text-[#f1f1f1] max-[630px]:text-[15px]">
                                {t("olegName")}
                            </p>

                            <p className="font-light text-[#f1f1f1] opacity-60 max-[630px]:text-[13px]">
                                {t("olegTitle")}
                            </p>
                        </div>
                    </div>

                    <button className="btn max-[400px]:w-full">
                        {t("olegButton")}
                    </button>

                    <img
                        src={sign}
                        alt=""
                        className="absolute right-0 bottom-0 h-[100px] max-[400px]:h-[50px] max-[400px]:bottom-[50px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Oleg
