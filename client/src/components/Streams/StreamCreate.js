import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createStream } from '../../actions';

import StreamForm from './StreamForm';

// class StreamCreate extends Component {
//   renderError({ touched, error }) {
//     return touched && error ? (
//       <div className="ui error message">
//         <div className="header">{error}</div>
//       </div>
//     ) : null;
//   }

//   renderInput = ({ input, label, meta }) => {
//     const className = `field ${meta.touched && meta.error ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} />
//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => this.props.createStream(formValues);

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "you must enter a title";
//   }
//   if (!formValues.description) {
//     errors.description = "you must enter a description";
//   }
//   return errors;
// };

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate: validate,
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
