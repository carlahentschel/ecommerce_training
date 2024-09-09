export function ProductItemCard() {
    return (
        <section className="relative w-full w-[286px] h-[440px] mr-2">
            <div className="w-full h-[392px]  bg-slate-100">
                {/* aqui deve inserir a imagem do produto */}
            </div>
            <div className="flex items-center justify-center h-[48px] w-[254px] mx-auto">
                <h3 className="text-[12px] font-[400] leading-[16px] text-left truncate flex-1">
                    Sandália Colorida Salto Fino Multitiras Amarração
                </h3>
                <h3 className="text-[12px] font-[700] leading-[16px] text-right">
                    R$ 229,90
                </h3>
            </div>
        </section>
    )
}