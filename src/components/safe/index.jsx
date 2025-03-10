import React from "react"
import {useTranslation} from "react-i18next"

// img
import safe from "../../assets/img/safe.png"

const Safe = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[50px]">
            <div className="container2 grid grid-cols-2 gap-[10px] max-[420px]:p-[15px] items-center max-[690px]:flex flex-col-reverse showcase border border-[#3d3d3d] rounded-2xl p-[40px]">
                <div className="flex flex-col gap-[20px]">
                    <h1
                        className="title"
                        dangerouslySetInnerHTML={{
                            __html: t("safeTitle").replace(/\n/g, "<br />"),
                        }}
                    />

                    <p className="font-normal text-[16px] leading-[130%] text-[#bebebe]">
                        {t("safeDescription")}
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={safe}
                        alt=""
                        className="max-[690px]:h-[300px] max-[420px]:h-[200px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Safe
