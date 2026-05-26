import { Link } from "react-router-dom";
import "./style/Footer.css";

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="FooterContent">
                <div className="FooterContentColuna">
                    <FooterLink text="Sobre nós" href="#"/>
                    <FooterLink text="Início" href="#"/>
                    <FooterLink text="Palestrantes" href="lectures"/>
                </div>
                <div className="FooterContentColuna">
                    <FooterLink text="Youtube" href="#"/>
                    <FooterLink text="Github" href="#"/>
                    <FooterLink text="Instagram" href="#"/>
                </div>
                <div className="FooterContentColuna">
                    <FooterLink text="Código de conduta" href="#"/>
                </div>
            </div>
        </footer>
    )
}

interface FooterLinkProps {
    href: string;
    text: string;
}

function FooterLink({ href , text }: FooterLinkProps) {
    return (
        <Link to={`${href}`} className="FooterLink">
            {text}
        </Link>
    );
}