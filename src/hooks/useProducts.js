import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://hidden-plains-93695.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return { products };
}

export default useProducts;