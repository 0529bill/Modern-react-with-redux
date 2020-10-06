import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { Link } from 'react-router-dom';
import { deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <>
        {/* <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          Delete
        </button> */}
        <Link
          to="/"
          className="ui button negative"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
        >
          Delete
        </Link>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (this.props.streams) {
      return `Are you sure you want to delete stream with title: ${this.props.streams.title}`;
    }

    return 'Are you sure you want to delete this stream?';
  }

  render() {
    return (
      <>
        <Modal
          onClick={(e) => e.stopPropogation}
          title="Delete Stream"
          content={this.renderContent()}
          action={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id],
    // streams: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
