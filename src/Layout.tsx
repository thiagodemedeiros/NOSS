import Footer from "./feature/Footer/Footer";
import Header from "./feature/Header/Header";

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
};