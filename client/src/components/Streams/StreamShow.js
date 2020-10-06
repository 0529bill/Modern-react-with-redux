import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    console.log(this.props.stream);
  }

  render() {
    if (!this.props.stream) {
      return 'loading';
    }
    return (
      <>
        <h1>{this.props.stream.title}</h1>
        <h3>{this.props.stream.description}</h3>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
