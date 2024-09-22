import './ProductList.css'
import APICall from '../../API/ProductApi'
import { Container, Card } from 'react-bootstrap'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/loading'
import NotFound from '../../components/Exceptions/404'
import React, { useEffect, useState } from 'react'
import {PRODUCTS_PATH} from '../../constants'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [isError, setisError] = useState(false)
  useEffect(() => {
    setisLoaded(true)
    APICall(PRODUCTS_PATH, setProducts, setisLoaded, setisError)
  }, [])
  if (isLoaded) {
    return <Loading />
  } else {
    if (isError) {
      return (
        <NotFound />
      )
    } else {
      if (products.length === 0) {
        return (
          <div className='ml-5 mt-5'>
            <h3 className='heading'>View All Products</h3>
            <h5>Products are empty</h5>
          </div>
        )
      } else {
        return (
          <div className='con-w'>
            <div>
              <h3 className='heading'>View All Products</h3>
            </div>
            <div className='con-w'>
              {products.map((product) => (
                <Container key={product.id} className='card-space'>
                  <Card>
                    <Card.Header>
                      <img
                        src={product.url[0]}
                        alt={product.title}
                        className='product-img'
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          <CurrencyFormat
                            className='text-w'
                            value={product.price.toFixed(2)}
                            displayType='text'
                            thousandSeparator
                            prefix='$'
                          />
                          <br />
                          <p className='text-w mt-3'>
                            {product.comments.length} Comments
                          </p>
                        </Card.Text>
                        <Link
                          className='btn btn-secondary'
                          to={`/product/${product.id}`}
                        >
                          Show
                        </Link>
                      </Card.Body>
                    </Card.Header>
                  </Card>
                </Container>
              ))}
            </div>
          </div>
        )
      }
    }
  }
}

export default Products
