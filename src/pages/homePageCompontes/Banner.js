export default function Banner({bannerText}){
    let bannerSrc = '';
    
    switch (bannerText) {
        case 'aboutBanner':
            bannerSrc = '/images/about-banner.png';
            break;
        case 'userBanner':
            bannerSrc = '/images/user-info.png';
            break;
        default:
            bannerSrc = '/images/home-banner.png'; // default image if no match
            break;
    }
    return(
        <div className="bannerLayout">
            <div className="imageLayout">
                <img src={bannerSrc} alt="Michael UI Developer Banner" className="bannerImage" />
            </div>
        </div>
    )
}