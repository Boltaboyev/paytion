import React from "react"
import {useTranslation} from "react-i18next"

// img
import card1 from "../../assets/img/task/1.png"
import card2 from "../../assets/img/task/2.png"
import card3 from "../../assets/img/task/3.png"

const Task = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[50px] bg-[#1f2025]">
            <div className="container2 flex flex-col gap-[50px]">
                <h1 className="title">{t("taskTitle")}</h1>

                <div className="grid grid-cols-3 gap-[20px] max-[915px]:grid-cols-2 max-[590px]:grid-cols-1">
                    <div className="flex flex-col gap-[5px] rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <img src={card1} alt="" />

                        <p className="font-medium text-[16px] text-[#ecebeb]">
                            {t("task1")}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[5px] rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <img src={card2} alt="" />

                        <p className="font-medium text-[16px] text-[#ecebeb]">
                            {t("task2")}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[5px] rounded-xl border border-[#3d3d3d] p-[15px] bg-gradient-to-br from-[#202124] via-[#24252d] to-[#1c1d21]">
                        <img src={card3} alt="" />

                        <p className="font-medium text-[16px] text-[#ecebeb]">
                            {t("task3")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Task
