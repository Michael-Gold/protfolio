export default function Banner({userBanner}){
    return(
        <div className="bannerLayout">
            <div className="imageLayout">
                {!userBanner ? (
                    <img src="/images/home-banner.png" alt="Michael UI Developer Banner" className="bannerImage" />
                ) : (
                    <img src="/images/user-info.png" alt="Michael UI Developer Banner" className="bannerImage" />
                )
               }
            </div>
        </div>
    )
}