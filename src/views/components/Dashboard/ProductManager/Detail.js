import useProduct from "@api/useProduct";
import { useEffect, useState } from "react";

function Detail({id}) {
    const [product, setProduct] = useState({});

    console.log(id);
    const  {getAllById} = useProduct()
    const fetchData = async () => {
        const {success,data} = await getAllById(id)
        if(success && data.status != 'Error') {
            setProduct(data)
        } else {

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return ( <>
        <h1>{product.id}</h1>
    </> );
}

export default Detail;