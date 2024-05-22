// import katieZaferes from '../assets/katieZaferes.png';
// import star from '../assets/star.png';
// export default function Experiences() {
//     return (
//         <div className="card">
//             <img src={katieZaferes} alt="Katie Zaferes" />
//             <div className="card-stats">
//                 <img src={star} alt="Rating" className="star" />
//                 <span> 5.0 </span>
//                 <span className="grey">(6)•</span>
//                 <span className="grey">USA</span>
//             </div>
//             <p>Life lessons with Katie Zaferes</p>
//             <p><span className="bold">From $136 </span>/ person</p>

//         </div>
//     )
// }


// import star from '../assets/star.png';
// export default function Experiences(props) {
//     return (
//         <div className="card">
//             <div className='card-image'>
//             <img src={props.img} alt="Katie Zaferes" />
//             </div>
//             <div className="card-stats">
//                 <img src={star} alt="Rating" className="star" />
//                 <span>{props.rating}</span>
//                 <span className="grey">{props.viewers}•</span>
//                 <span className="grey">{props.location}</span>
//             </div>
//             <p>Life lessons with Katie Zaferes</p>
//             <p><span className="bold">From $136 </span>/ person</p>
//         </div>
//     )
// }




export default function Experiences(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if(props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card-section">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            {/* {props.openSpots === 0 ? <div className="card-badge">SOLD OUT</div> : <div className="card-badge">ONLINE</div>} */}
            {/* If we pass the props as item={item} then the below syntax is used to access the elements */}
            {/* <img src={props.experience.img} alt="Katie Zaferes" className="card-image" /> */}
            <img src={props.img} alt="Katie Zaferes" className="card-image" />
            <img src="../../assets/star.png" alt="Rating" className="star" />
            <span>{props.rating}</span>
            <span className="grey">{props.viewers}•</span>
            <span className="grey">{props.location}</span>
            <p>{props.courseName}</p>
            <p><span className="bold">From {props.price} </span>/ person</p>
        </div>
    )
}


// export default function Experiences(props) {
//     return (
//         <div className="scrollable">
//             <div className="card">
//                 {props.openSpots === 0 ? <div className="card-badge">SOLD OUT</div> : <div className="card-badge">ONLINE</div>}
//                 <img src={props.img} alt="Katie Zaferes" className="card-image" />
//                 <div className="card-content">
//                     <div className="additinal-info">
//                     <img src="../../assets/star.png" alt="Rating" className="star" />
//                         <span>{props.rating}</span>
//                         <span className="grey">{props.viewers}•</span>
//                         <span className="grey">{props.location}</span>
//                     </div>
//                     <p>{props.courseName}</p>
//                     <p><span className="bold">From {props.price} </span>/ person</p>
//                 </div>
//             </div>
//         </div>
//     )
// }