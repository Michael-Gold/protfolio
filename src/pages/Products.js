import React, { useEffect, useState } from "react";
import '../css/productList.css';
import StarRating from "./commonCompontes/StarRating";
import Pagination from "./commonCompontes/Pagination";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(true);
    let perPage = 9;
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        try {            
            const res = await fetch('https://dummyjson.com/products');
            if(!res.ok){
                console.error(`Http error status ${res.status}`)
            }
            const resData = await res.json();
            setProducts(resData.products);
            setLoader(false);
        } catch (error) {
            console.log('Error: ',error)            
        }
    }

    const discountCalculate = (orginal,discount) => {
        const discountPercent = orginal - (orginal * discount / 100);
        return Math.round(discountPercent);
    }

    let lastIndex = perPage * currentPage;
    let firstIndex = lastIndex - perPage;
    
    let productList = products.slice(firstIndex,lastIndex);

    return (
        <section className="productsListSection">
            <div className="productsListLayout">
                <div className="mainTitle">
                    <h1>Product Lists</h1>
                </div>
                {loader ? (
                    <div className="loaderSection">
                        <div className="loader">
                            <img src="/images/profile.png" alt="Logo" className="loaderLogo" />
                            <div className="spinner"></div>
                        </div>
                    </div>
                ) : (
                <div className="productsListContainer">
                    {products && products.length > 0 && 
                        <ul className="gridLayout">
                            {productList.map((product,index) => (
                                <li key={index} className="productList">
                                    <figure className="figureLayout">
                                        {product.thumbnail ? (
                                        <img src={product.thumbnail} alt={product.title} className="productImage" />
                                        ) : (<img src='https://placehold.co/500x300?text=Product+Image' alt='Product' className="productImage" />)}
                                        
                                    </figure>
                                    <div className="productListContent px-14">
                                        <h3 className="productTitle">{product.title}</h3>
                                        <div className="productTags">
                                            {product.tags.map((tag,index) => (
                                                <span key={index}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className="productDesc">
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                    <div className="priceLayout px-14">
                                        <span className="discountOff">{discountCalculate(product.price,product.discountPercentage)}% OFF</span>
                                        <div className="priceSection">
                                            <span className="orginalPrice">
                                                <span class="material-symbols-rounded">attach_money</span>
                                                {product.price}
                                            </span>
                                            <span className="discountPrice">
                                                <span class="material-symbols-rounded">attach_money</span>
                                                {product.discountPercentage}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="starRating px-14">
                                        <StarRating rating={product.rating}/>
                                    </div>
                                    <div className="btnGroup px-14">
                                        <button className="buyNowBtn">Buy Now</button>
                                        <button className="addToCartBtn">Add to Cart</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                )}
                <div className="pagination">
                    <Pagination currentPage = {currentPage} totalPage = {products.length} perPage = {perPage} setCurrentPage = {setCurrentPage} />
                </div>
            </div>
        </section>
    )
}

export default Products