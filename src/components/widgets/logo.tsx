import Link from "next/link";

export const Logo = () => {
    return (
        <Link
            href='/' className="uppercase font-black text-white flex items-center text-lg ">
            <span className="bg-white text-black w-6 h2 flex items-center justify-center rounded-bl-lg">M</span>iguel
            <span className="bg-white text-black w-6 h2 flex items-center justify-center rounded">C</span>astillo
        </Link>
    )
}