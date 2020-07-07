import React from 'react'

import { Card } from 'react-bootstrap'
import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.jpg'

const CardText = () => {

    return(
        <div>
        <Card
            bg='primary'
            style={{ 
                display:'inline-block',
                width: '18rem',
                borderRadius:'23px',
                height:'400px',
                margin:'23px ',
                boxShadow:'5px 10px 7px 8px #D8EDF5 , 5px 5px #fff' 
            }}
            className="mb-2"
        >
            <Card.Img style={{
                borderRadius:'23px',
                height:'180px',
            }} variant="top" src={img1}/>
            {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
            <Card
            bg='primary'
            style={{ 
                display:'inline-block',
                width: '18rem',
                borderRadius:'23px',
                height:'400px',
                margin:'23px ',
                boxShadow:'5px 10px 7px 8px #D8EDF5 , 5px 5px #fff' 
            }}
            className="mb-2"
        >
            <Card.Img style={{
                borderRadius:'23px',
                height:'180px'
            }} variant="top" src={img2} />
            {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card
        bg='primary'
        style={{ 
            display:'inline-block',
            width: '18rem',
            borderRadius:'23px',
            height:'400px',
            margin:'23px ',
            boxShadow:'5px 10px 7px 8px #EBD1F0 , 5px 5px #fff' 
        }}
        // className="mb-2"
    >
        <Card.Img style={{
                borderRadius:'23px',
                height:'180px'
            }} variant="top" src={img3} />
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
        <Card.Title> Card Title </Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>

    </div>
    )

}

export default CardText