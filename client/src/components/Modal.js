// import React from 'react';
// import history from '../history';
// import ReactDOM from 'react-dom';

// const Modal = (props) => {
//   return ReactDOM.createPortal(
//     <div
//       className="ui dimmer modals visible active"
//       onClick={() => history.push('/')}
//     >
//       <div
//         className="ui standard modal visible active"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="header">Delete Stream</div>
//         <div className="content">
//           Are you sure you want to delete this stream?
//         </div>
//         <div className="actions">
//           <button className="ui primary button">Delete</button>
//           <button className="ui button">Cancel</button>
//         </div>
//       </div>
//     </div>,

//     document.querySelector('#modal')
//   );
//   //creatPortal takes two argurments=> 1. jsx (something we want to display on screen), 2. reference to the container html
// };

// export default Modal;

import React from 'react';

import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.action}</div>
      </div>
    </div>,

    document.querySelector('#modal')
  );
  //creatPortal takes two argurments=> 1. jsx (something we want to display on screen), 2. reference to the container html
};

export default Modal;

//props.onClick
//props.title
//props.content
//props.button1
//props.button2
