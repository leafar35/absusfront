import { FooterStyled } from "./styled";

export function Footer(){
    return (
        <FooterStyled className="page-footer footer footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow">
            <div className="footer-copyright">
                <div className="container">
                    <span>&copy; 2025<a href="#" target="_blank"> ABSUS</a> Todos os direitos reservados.</span>
                    <span className="right hide-on-small-only">Design e desenvolvimento por <a href="https://pixinvent.com/">ABSUS</a></span>
                </div>
            </div>
        </FooterStyled>
    )
}