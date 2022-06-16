function Card (props) {
    let badgeText 
        if (props.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.location === "Online") {
            badgeText = "ONLINE"
        }
    return (
        <div className="card">
            {
            badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`./images/${props.coverImg}`} 
                className="card--img" alt="cover pic" 
            />
            <div className="card--rating flex aic">
                <img className="card--star" src="../images/Star-1.png" alt="*" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p className="card--descr">{props.title}</p>
            <div className="card--price">
                <a className="bold">From $ {props.price}</a><a> / person</a>
            </div>
        </div>
    )
}

export default Card

