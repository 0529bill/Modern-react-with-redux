import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form'; //field is a component, where as reduxForm is a function

class StreamForm extends Component {
  renderError({ touched, error }) {
    return touched && error ? (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    ) : null;
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => this.props.onSubmit(formValues); //this.props.onSubmit is passed from upper component, which is StreamCreate

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} //redux form's internal function: 'handleSubmit'
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'you must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'you must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);
