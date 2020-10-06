import React, { Component } from 'react';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import streams from '../../apis/streams';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="streams/new">
            Create Stream
          </Link>
        </div>
      );
    } else {
      return null;
    }
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button content">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
          {/* <button className="ui button negative">Delete</button> */}
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <h2>streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div>{this.renderCreate()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
