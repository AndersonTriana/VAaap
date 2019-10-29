import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer () {
return(   
    <footer >    
        <Card bg="dark" text="white" style={{ width: '18rem' } } className="mr-auto" >
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />
    </footer>
);
}

export default Footer;