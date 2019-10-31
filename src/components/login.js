import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import DropdownButton from 'react-bootstrap/DropdownButton';

import FormGroup from 'react-bootstrap/FormGroup';

function loginForm() {
    return(
        <DropdownButton title="Ingreso" variant="success" id="basic-nav-dropdown">        
            <Form>  
                <Form.Group>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        className="col-md-10 offset-1"
                    />
                </Form.Group>

                <FormGroup>
                    <Form.Control 
                    type="password" 
                    placeholder="Contraseña" 
                    className="col-md-10 offset-1"
                    /> 
                </FormGroup>

                <FormGroup>
                    <Form.Check 
                        type="checkbox" 
                        label="Recordarme" 
                        className="text-muted col-md-10 offset-1"
                    />
                </FormGroup>

                <Button 
                    variant="success" 
                    type="submit" 
                    className="col-md-8 offset-2"
                    >Ingresar
                </Button>


            </Form>




        </DropdownButton>
    );
}
export default loginForm;