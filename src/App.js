import './App.css';
import Category from './Category';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProducts, setFinalProducts] = useState([]);
  let [categoryName, setCategoryName] = useState(null);

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      })
  }

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
      })
  }

  useEffect(() => {
    getCategory();
    getProducts();
  }, [])

  useEffect(() => {
    if (categoryName !== "") {
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((res) => res.data)
        .then((finalRes) => {
          setFinalProducts(finalRes.products)
        })
    }
  }, [categoryName])

  let pItems = finalProducts.map((products, index) => {
    return (
      <ProductItems key={index} pData={products} />
    )
  })
  return (
    <>
      <div className='mainDiv'>
        <div className='secondDiv'>
          <h1 className='text-center fw-bold mb-5'>Our Products</h1>
          <Row>
            <Col xs={4}>
                <Category finalCategory={finalCategory} setCategoryName={setCategoryName} />
            </Col>
            <Col xs={8}>
              <Row>
                {pItems}
              </Row>
            </Col>
          </Row>
        </div>
      </div >
    </>
  );
}

export default App;

let ProductItems = ({ pData }) => {
  return (
    <Col lg={4} sm={6} xs={6} className='mt-5'>
      <div className='productItemShadow text-center pb-4'>
        <img className='productImages' src={pData.thumbnail} alt={pData.title || "product image"}/>
        <h4 className='productTitle'>{pData.title}</h4>
        <b>$ {pData.price}</b>
      </div>
    </Col>
  )
}