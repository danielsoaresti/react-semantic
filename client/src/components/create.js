import React, { Component } from 'react';

import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './../actions';

const form = reduxForm({
  form: 'Create'
});

const renderField = field => (
  <div>
    <label>{field.input.label}</label>
    <input {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

const renderSelect = field => (
  <div>
    <label>{field.input.label}</label>
    <select {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

class Create extends Component {
  componentDidMount() {
    //this.handleInitialize();
  }

  handleInitialize() {
    /*
    const initData = {
      "firstName": this.props.currentUser.firstName,
      "lastName": this.props.currentUser.lastName,
      "sex": this.props.currentUser.sex,
      "email": this.props.userEmail,
      "phoneNumber": this.props.currentUser.phoneNumber
    };
    */

    const initData = {
      "firstName": this.props.user.firstName,
      "lastName": this.props.user.lastName,
      "sex": this.props.user.sex,
      "email": this.props.user.userEmail,
      "phoneNumber": this.props.user.phoneNumber
    };

    this.props.initialize(initData);
  }

  handleFormSubmit(formProps) {
    console.log('submit');
    this.props.submitFormAction(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit }>

          <Field name="firstName" type="text" component="input" placeholder="First Name"/>
          <Field name="lastName" type="text" component="input" placeholder="Last Name"/>
          {/*<Field name="sex" component={renderSelect} label="Gender">
            <option></option>
            <option name="male">Male</option>
            <option name="female">Female</option>
          </Field>
          <Field name="email" type="email" component={renderField} label="Email" />
          <Field name="phoneNumber" type="tel" component={renderField} label="Phone Number"/>*/}

          <button action="submit">Save changes</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  console.log('validate');

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.phoneNumber) {
    errors.phoneNumber = 'Please enter a phone number'
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, actions)(form(Create));