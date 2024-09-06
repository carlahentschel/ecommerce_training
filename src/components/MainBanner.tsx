import Image from "next/image";

export function MainBanner() {
    return (
        <section className="relative w-full flex items-center justify-center">
            <Image 
                src="/assets/SnapInsta_277051709_862524961814466_3973340754104546427_n_AdobeCreativeCloudExpress 1.png" 
                alt="Banner"
                layout="responsive"
                width={1440}
                height={720}
                priority
                className="object-cover"
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button 
                    className="bg-transparent hover:bg-opacity-20 text-white py-3 px-5 rounded-[32px] border border-white"
                    style={{ width: '106px', height: '56px' }}
                >
                        CONFIRA
                </button>
            </div>
        </section>
    )
}