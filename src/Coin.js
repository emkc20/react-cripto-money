import React from 'react'

export default function Coin({ name, image, price, symbol, marketcap, priceChange, volume }) {
    return (
        <div className="money-section">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span>${price}</span>
            {
                priceChange < 0 ? (<span className="red">{priceChange.toFixed(2)}%</span>) :

                    (<span className="green">{priceChange}%</span>)
            }
        </div>
    )
}
