/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import ToDoForm from './ToDoModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoAppCore({ formValues }) {
  return (
    <div>
      <h1 className="text-primary">ToDo Item</h1>
      <h2 className="text-secondary">Fun with ReduxForm</h2>
      <ToDoForm />

      <div className="row">
        <div className="col-sm">
          <span className="text-dark">
            Description:
            {' '}
            {formValues && formValues.description}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="text-dark">
            Requires Tongs:
            {' '}

            {
            formValues && 
            <span> {formValues.tongs ? 'true' : 'false'} </span>
            }
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="text-dark">
            Difficulty:
            {' '}
            {formValues && formValues.difficulty}
          </span>
        </div>
      </div>
      <hr/>
      <a href='https://github.com/smycynek/popup'>https://github.com/smycynek/popup</a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  formValues: getFormValues('ToDoList')(state),
});

const mapDispatchToProps = (dispatch) => ({});

const ToDoApp = connect(mapStateToProps, mapDispatchToProps)(ToDoAppCore);

export default ToDoApp;
