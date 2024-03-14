import Image from "next/image";
import './style.css';
const Header = () => {
    return (
        <>
            <header className="flex">
                <Image className="logo" src="/logo.png" alt="Logo com dois bilhetes dourados de cinema" width={180} height={200} />
                <h1>Os melhores filmes estão aqui</h1>
            </header>
        </>
    );
};
export default Header;