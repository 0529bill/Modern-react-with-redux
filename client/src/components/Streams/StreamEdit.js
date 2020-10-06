import React, { Component } from 'react';
import { fetchStream } from '../../actions';
import _ from 'lodash';

import StreamForm from './StreamForm';
import { editStream } from '../../actions';
import { connect } from 'react-redux';

// class StreamEdit extends Component {
//   componentDidMount() {
//     this.props.fetchStream(this.props.match.params.id);
//   }

//   // reloading data using componentDidMount so that we can access this page anywhere!(without worry about losing data)

//   streamui = () => {
//     return (
//       <div>
//         <div>StreamEdit</div>
//         {this.props.stream ? (
//           <div>{this.props.stream.title}</div>
//         ) : (
//           <div>loading</div>
//         )}
//       </div>
//     );
//   };

//   render() {
//     console.log(this.props.stream);
//     return <div>{this.streamui()}</div>;
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   console.log(state.streams);
//   return {
//     stream: state.streams[ownProps.match.params.id], // try to get the right streams from ownprops's match( url info) in order to edit it !
//   };
// };

// export default connect(mapStateToProps, { fetchStream })(StreamEdit);

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // reloading data using componentDidMount so that we can access this page anywhere!(without worry about losing data)

  // streamui = () => {
  //   return (
  //     <div>
  //       <div>StreamEdit</div>
  //       {this.props.stream ? (
  //         <div>{this.props.stream.title}</div>
  //       ) : (
  //         <div>loading</div>
  //       )}
  //     </div>
  //   );
  // };

  // onSubmit = (id, formValues) => this.props.editStream(id, formValues);
  onSubmit = (formValues) =>
    this.props.editStream(this.props.match.params.id, formValues);

  render() {
    // return <div>{this.streamui()}</div>;

    return (
      <>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(
            this.props.stream,
            'title',
            'descriptionn',
            'userId'
          )}
          onSubmit={this.onSubmit}
        />

        {/* //initialValues is a specific values from redux form */}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id], // try to get the right streams from ownprops's match( url info) in order to edit it !
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
