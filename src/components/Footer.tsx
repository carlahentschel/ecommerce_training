import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full h-40 bg-black px-1 py-1 flex flex-col items-center justify-evenly">
            <Image
                src="/assets/Vector 81.png" 
                alt="Linha"
                width={1142}
                height={0}
            />
            <p className="text-white text-xs text-center px-4">© 2024, Arezzo. Todos os direitos reservados. ZZAB Comércio de Calçados Ltda. | Rua África do Sul, 2280. Padre Mathias, Cariacica/ES. CEP: 29157-900 | CNPJ: 07.900.208/0077-04</p>

        </footer>
    )
}