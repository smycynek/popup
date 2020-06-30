/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
const required = value => value ? undefined : 'Required'



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

function ToDoModal({formValues, invalid}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
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
            
          <div class="form-group">
              <label for="Description">Description</label>
                <Field validate={[required]} className="form-control" name="description" component="input" type="text" />
                <small id="descriptionHelp" class="form-text text-muted">What's going on?</small>
            </div> 
       
            <div class="form-group form-check">
              <Field className="form-check-input" name="tongs" component="input" type="checkbox" />
              <label className="form-check-label" for="tongs">Will require tongs?</label>
              <small id="descriptionTongs" class="form-text text-muted">Is it a sticky job?  Need to keep your distance?</small>

            </div>

            <div class="form-group">
              <label for="difficulty">Difficulty</label>
                <Field className="form-control-range" name="difficulty" component="input" type="range" min={1} max={10} />
                <small id="difficultyHelp" class="form-text text-muted">How hard is this? Scale of one to ten?</small>
              </div>
          
            <button disabled={invalid} className="btn btn-primary" onClick={closeModal}>OK</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  formValues: getFormValues('ToDoList')(state),
});

const mapDispatchToProps = (dispatch) => ({});

const ToDoReduxForm = reduxForm({
  // a unique name for the form
  form: 'ToDoList',
})(ToDoModal);

const ToDoForm = connect(mapStateToProps, mapDispatchToProps)(ToDoReduxForm);

export default ToDoForm;
