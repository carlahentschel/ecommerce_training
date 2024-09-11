import Image from "next/image";

export function SecondaryBanner() {
    return (
        <section className="relative w-full h-[720px] flex items-center justify-center">
            <div className="absolute w-[1096px] h-[592px]">
                <div className="relative w-[877px] h-[592px] flex flex-col justify-between items-center">
                    <div className="absolute w-full text-left">
                        <p className="font-commissioner text-[12px] font-normal leading-[16px] text-left">NOVA COLEÇÃO</p>
                        <p className="font-commissioner text-[24px] font-light leading-[32px] tracking-[0.2em] text-left">#LIVIAAREZZO</p>
                    </div>
                    <div className="flex items-end self-start overflow-hidden">
                        <div className="flex-shrink-0">
                            <Image 
                                src="/assets/image 17.png" 
                                alt="Foto do coturno 1"
                                width={438}
                                height={400}
                                priority
                                className="object-contain"
                            />

                        </div>
                        <div className="flex-shrink-0">
                            <Image 
                                src="/assets/Rectangle 1281.png" 
                                alt="Foto do coturno 2"
                                width={437}
                                height={592}
                                priority
                                className="object-cover"
                            />
                        </div>  
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[203px] h-[104px] flex flex-col justify-end items-start">
                    <p className="font-commissioner text-[16px] font-normal leading-[16px]">Conheça o novo coturno</p>
                    <p className="font-commissioner text-[16px] font-normal leading-[16px]">Livia Arezzo</p>
                    <button 
                        className="font-commissioner text-[12px] w-[105px] h-[48px] bg-black hover:bg-opacity-20 text-white py-3 px-5 rounded-[32px] mt-2"
                    >
                        Ver coleção
                    </button>
                </div>
            </div>
        </section>
    )
}