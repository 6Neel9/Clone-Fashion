import {  useEffect } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

function Products() {
    const dispatch = useDispatch()
    // const [products, setProducts] = useState([]);
    const { data:products,status } = useSelector(state=>state.product)

    useEffect(() => {
        dispatch(fetchProducts())
        // dispatch(fetchProducts());
        // https://fakestoreapi.com/products
        // const fetchProducts = async () => {
        //     const res = await fetch('https://api.escuelajs.co/api/v1/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, [dispatch]);

    const handleAdd = (product)=>{
        dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
        return <h2>Loading....</h2>
    }

    if(status === STATUSES.ERROR){
        return <h2>Something Went Wrong</h2>
    }


    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.images[0]} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={()=>handleAdd(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}


export default Products