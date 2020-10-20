import React from 'react';

import Form from '../../Components/Form';

import FormGroup from '../../Components/FormGroup';
import Button from '../../Components/Button';

export default props => (
  <>
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Forms</li>
      </ol>
    </nav>

    <section className="forms">
      <div className="card card_border py-2 mb-4">
        <div className="cards__heading">
          <h3>Forms <span></span></h3>
        </div>
        <div className="card-body">
          <Form>
            <FormGroup id='exampleInputEmail1' place='Enter email' allClass='form-control input-style' tp='email' divClass='form-group' textLabel='Email address' labelClass='input__label'>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with
            anyone else.</small>
            </FormGroup>
            <FormGroup id='exampleInputPassword1' place='Password' allClass='form-control input-style'
              tp='password' divClass='form-group' textLabel='Password' labelClass='input__label' />
            <FormGroup id='exampleInputPassword1' place='Password' allClass='form-check-input checkbox'
              tp='checkbox' divClass='form-check check-remember check-me-out' textLabel='Check me out' labelClass='form-check-input checkbox'>
            </FormGroup>
            <Button tp='submit' allClass='btn btn-primary btn-style mt-4' title='Submit' />
          </Form>
        </div>
        <div className="card card_border py-2 mb-4">
          <div className="card-body">
            <Form>

            <div className="form-row">
              <FormGroup divClass='form-group col-md-6' id='inputEmail4' labelClass='input__label' textLabel='Email' tp='email' allClass='form-control input-style' place='Email' />
              <FormGroup divClass='form-group col-md-6' id='inputPassword4' labelClass='input__label'  textLabel='Password' tp='password' allClass='form-control input-style' place='Password' />

            </div>
            <FormGroup divClass='form-group' id='inputAddress' labelClass='input__label'  textLabel='Address' tp='text' allClass='form-control input-style' place='1234 Main St' />
            <FormGroup divClass='form-group' id='inputAddress2' labelClass='input__label' textLabel='Address 2' tp='text' allClass='form-control input-style' place='Apartment, studio, or floor' />

        <div className="form-row">
        <FormGroup divClass='form-group col-md-6' id='inputCity' labelClass='input__label' textLabel='City' tp='text' allClass='form-control input-style'  />
        <FormGroup divClass='form-group col-md-4' id='inputState' labelClass='input__label' textLabel='State' tp='text' allClass='form-control input-style' hasInput={false}>
            <select id="inputState" className="form-control input-style">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
        </FormGroup>
        <FormGroup divClass='form-group col-md-2' id='inputZip' labelClass='input__label' textLabel='Zip' tp='text' allClass='form-control input-style'/>
        <FormGroup divClass='form-check check-remember check-me-out' id='gridCheck' labelClass='form-check-label checkmark' textLabel='Check me out' tp='text' allClass='form-check-input checkbox'/>
        </div> 
          <Button tp='submit' allClass='btn btn-primary btn-style mt-4' title='Sign in'/>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </>
);