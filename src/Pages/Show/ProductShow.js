import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import '../List/ProductList.css'
import CurrencyFormat from 'react-currency-format'
import { Link, useParams } from 'react-router-dom'
import './ProductShow.css'
import Loading from '../../components/Loading/loading'
import Comment from '../../components/Comment/Comment'
import NotFound from '../../components/Exceptions/404'
import xtype from 'xtypejs'
import * as myConstants from '../../constants'
import APICall from '../../API/ProductApi'
import {PRODUCT_PATH} from '../../constants'

const ProductShow = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [isLoaded, setisLoaded] = useState(true)
  const [value, setValue] = useState('')
  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '')

    setValue(result)
  }

  useEffect(() => {
    APICall(PRODUCT_PATH + `${id}`, setProduct, setisLoaded, null)
  })
  if (isLoaded) {
    return <Loading />
  } else {
    if (xtype.type(product) === myConstants.STRING) {
      return (
        <NotFound />
      )
    } else {
      return (
        <div className='con-w mt-4'>
          <div className='con-w'>
            <Container className='card-space'>
              <Card>
                <Card.Header>{product.name}</Card.Header>
                <Card.Title />
                <Card.Body>
                  <Card.Text>
                    {product.url.map((img) => (
                      <img key={img.key} src={img} alt='' className='product-img mr-2' />
                    ))}
                    <br />
                    <h5 className='mt-4'>
                      <CurrencyFormat
                        value={product.price.toFixed(2)}
                        displayType='text'
                        thousandSeparator
                        prefix='$'
                        className='price-t'
                      />
                    </h5>
                    <br />
                    <p className='desp-t'>{product.description}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <h6 className='mt-4'>
                Enter product quantity.
                <br />
              </h6>
              <input type='number' placeholder='1' value={value} onChange={handleChange} />
              <Link className='btn btn-primary ml-1' to='/'>
                Add to Cart
              </Link>
              <br />
              <Link className='btn btn-dark mt-4' to='/products'>
                Back
              </Link>
              <Link className='btn btn-dark float-right mt-4' to='/'>
                Add to Wishlist
              </Link>
              <br />
              <div className='comment-form'>
                <h5>Leave a comment...</h5>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter a comment'
                  className='form-control mr-sm-2 mb-2'
                />
                <input type='file' className='form-control mt-5' multiple />
                <input
                  type='submit'
                  value='Comment'
                  className='btn py-2 px-3 btn-outline-success mt-3 ml-1'
                />
              </div>
              <div className='comment-pane'>
                {product.comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </div>
            </Container>
          </div>
        </div>
      )
    }
  }
}

export default ProductShow
