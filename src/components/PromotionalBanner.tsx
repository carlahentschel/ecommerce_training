export function PromotionalBanner() {
    return (
        <section className="w-full h-[40px] p-2.5 bg-black text-white flex items-center justify-center opacity-100">
            <p className="text-[12px] font-semibold leading-[20px] tracking-[0.2em] text-center font-unitext">
                FRETE FIXO{' '}
                <span className="text-xs font-light leading-5 tracking-wide">
                    EM R$9,90 PARA REGIÕES SUL, SUDESTE E CAPITAIS DE NE E CO.
                </span>
            </p>
        </section>
    )
}