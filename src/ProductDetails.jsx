export default function ProductDetails({finalProducts}) {
    return (
        <div>
            {finalProducts.map((value, index) => {
                return (
                    <div key={index}>
                        <img src={value.thumbnail} alt={value.title || "product images"}/>
                    </div>
                )
            })}
        </div>
    )
}
