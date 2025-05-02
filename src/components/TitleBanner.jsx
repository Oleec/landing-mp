import React from "react";
import {useTranslation} from "react-i18next";

const TitleBanner = () => {
    const { t } = useTranslation();

    return (
        <section className="flex justify-center items-center py-16 bg-white">
            <div className="bg-[#757575] text-white px-10 py-12 w-full max-w-5xl text-center rounded-s">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 uppercase">{t('titleBanner.titleBannerText')}</h2>
                <div className="flex justify-start">
                    <button className="bg-black text-white px-4 py-3 text-sm tracking-widest font-semibold uppercase rounded hover:bg-gray-800 transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>


    );

}



export default TitleBanner;