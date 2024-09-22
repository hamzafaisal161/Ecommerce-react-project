import '../../Pages/Show/ProductShow.css'
import { Container, Card } from 'react-bootstrap'
import React from 'react'

function Comment (props) {
  const { id, description, user_name, stamp, url } = props.comment
  return (
    <Container key={id} className='comment-show'>
      <Card className='card-w'>
        <Card.Header>
          {url.map((img) => (
            <img
              src={img}
              key={img.key}
              alt='comment-img'
              className='product-img mr-2'
            />
          ))}
          <Card.Body>
            <Card.Text>
              <p>{description}</p>
              <p>{user_name}</p>
              <p>{stamp}</p>
            </Card.Text>
          </Card.Body>
        </Card.Header>
      </Card>
    </Container>
  )
}
export default Comment
