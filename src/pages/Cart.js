import { useSelector,useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"


function Cart() {

    const products = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const handleRemove = (productsId)=>{
        dispatch(remove(productsId))
    }


    return (
        <div>
            <div className="cartWrapper">
                {
                        products.map(product=>(
                            <div key={product.id} className="cartCard">
                                <img src={product.images[0]} alt="" />
                                <h5>{product.title}</h5>
                                <h5>{product.price}</h5>
                                <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Cart