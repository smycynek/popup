/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import {
  reduxForm, Field, getFormValues,
} from 'redux-form';

const required = (value) => (value ? undefined : 'Required Field');
const tooShort = (value) => (value && value.length < 5 ? 'Write more!' : undefined);

const modalStyles = {
  content: {
    top: '50%',
    left: '25%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-25%',
    transform: 'translate(-50%, -50%)',
  },
};

const EnhancedInput = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={`Enter ${label}`} type={type} />
      <small id="descriptionTongs" className="form-text text-danger">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</small>
    </div>
  </div>
);

function ToDoModal({ formValues, invalid, reset }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const handleSubmit = () => {
    closeModal(true);
    return new Promise(() => {});
  };

  function closeModal(fromOkay) {
    if (!(fromOkay === true)) {
      reset();
    }
    setIsOpen(false);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>Edit item...</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Todo item"
      >
        <h2 className="text-primary">Todo Item</h2>
        <form>
          <div>

            <div className="form-group">
              <Field label="Description" validate={[required, tooShort]} className="form-control" name="description" component={EnhancedInput} type="text" />
              <small id="descriptionTongs" className="form-text text-muted">What's going on?</small>

            </div>

            <div className="form-group form-check">
              <Field className="form-check-input" name="tongs" component="input" type="checkbox" />
              <label className="form-check-label" htmlFor="tongs">Will require tongs?</label>
              <small id="descriptionTongs" className="form-text text-muted">Is it a sticky job?  Need to keep your distance?</small>

            </div>

            <div className="form-group">
              <label className="form-check-label" htmlFor="difficultt">Difficulty</label>
              <Field className="form-control-range" name="difficulty" component="input" type="range" min={1} max={10} />
              <small id="difficultyHelp" className="form-text text-muted">How hard is this? Scale of one to ten?</small>
            </div>

            <button disabled={invalid} className="btn btn-primary" onClick={handleSubmit}>OK</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  formValues: getFormValues('ToDoList')(state),
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const ToDoReduxForm = reduxForm({
  // a unique name for the form
  form: 'ToDoList',
})(ToDoModal);

const ToDoForm = connect(mapStateToProps, mapDispatchToProps)(ToDoReduxForm);

export default ToDoForm;

// TODO

// CANCEL VS OK
