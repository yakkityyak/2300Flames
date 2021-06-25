import Link from 'next/link'
import Image from 'next/image'

const Navigationbar = () => {
    return (
        <nav>
            <Link href="/">
            <a className="logo">
                <Image src="/Sticker4.png" alt="site logo" width={200} height={150} />
            </a>
            </Link>
            <Link href="/"><a>Forside</a></Link>
            <Link href="/nyheder"><a>Nyheder</a></Link>
            <Link href="/trup/"><a>Trup</a></Link>
            <Link href="/galleri/"><a>Galleri</a></Link>
            <Link href="/omOs/"><a className="nav-om-os">Om os</a></Link>
        </nav>
    );
}
export default Navigationbar;