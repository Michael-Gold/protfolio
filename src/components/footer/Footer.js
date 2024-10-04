import '../../css/footer.css';
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="mainFooter">
            <div className="footerlayout">
                <div className="fooetrCopyright">
                    <p>Copyright Reserved Michael Protfolio {currentYear}.</p>
                </div>
            </div>
        </footer>
    )
}