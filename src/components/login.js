import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

function loginForm() {
    return(
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">        
            <Form inline>
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Ingreso</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                />
                </InputGroup>
                </Form>
                <Form inline>
                <FormControl type="password" placeholder="Password" className=" mr-sm-2" />
                <Button variant="success" type="submit">Ingresar</Button>
            </Form>
        </NavDropdown>
    );
}
export default loginForm;