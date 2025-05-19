import React from 'react';

export default function ProductDetails() {
    return (
        <div>
            {finalProducts.map((value, index) => {
                return (
                    <div key={index}>
                        <img src={value.thumbnail}/>
                    </div>
                )
            })}
        </div>
    )
}
