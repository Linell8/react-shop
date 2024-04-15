// function GoodsItem(props) {
//     const { id, name, description, price, full_background } = props;

//     return (
//         <div className="card id={id}">
//             <div className="card-image">
//                 <img src="{full_background}" alt="{name}" />
//                 <span className="card-title">{name}</span>
//             </div>
//             <div className="card-content">
//                 <p>{description}</p>
//             </div>
//             <div className="card-action">
//                 <button className="btn">Buy</button>
//                 <span className="right">{price}</span>
//             </div>
//         </div>
//     )
// }

// export {GoodsItem};

import React from 'react';
import s from './GoodsItem.module.css';

function GoodsItem(props) {
    const { 
        offerId, 
        displayName, 
        finalPrice, 
        displayAssets,
        displayDescription, 
        addToBasket = Function.prototype,
    } = props;

   

    return (
       
        <div key={offerId} className={s.card} id={offerId}>
             <img src={displayAssets[0]?.background} className={s.card_img_top} alt={displayName}/>
            <div className={s.card_body}>
                <h5 className="card-title">{displayName}</h5>
                <p className={s.card_text}>{displayDescription}</p>
                
                <span className={s.right}>{finalPrice}</span>
                <button 
                    className="btn btn-dark col-6"
                    onClick={() => 
                        addToBasket({
                            offerId,
                            displayName,
                            finalPrice,
                        })
                    }
                >
                    Buy
                </button>
                
            </div>
        </div>
    );
}

export { GoodsItem };
