/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import ToDoForm from './ToDoModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoAppCore({ formValues }) {
  const [lastSubmitted, setLastSubmitted] = React.useState(false);

  const lastCallHandler = () => {
    setLastSubmitted((new Date()).toString());
  };
  return (
    <div>
      <h1 className="text-primary">ReduxForm Fun</h1>
      <ToDoForm
        initialValues={{ difficulty: 5, tongs: false }}
        onSubmitCallback={lastCallHandler}
      />

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
            {formValues && (
            <span>
              {' '}
              {formValues.tongs.toString()}
              {' '}
            </span>
            )}
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
      <div className="row">
        <div className="col-sm">
          <small id="lastSubmittedNote" className="form-text text-muted">
            {' '}
            Modal last submitted?
            {' '}
            {lastSubmitted}
          </small>
        </div>
      </div>

      <hr />
      <a href="https://github.com/smycynek/popup">
        https://github.com/smycynek/popup
      </a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  formValues: getFormValues('ToDoList')(state),
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const ToDoApp = connect(mapStateToProps, mapDispatchToProps)(ToDoAppCore);

export default ToDoApp;
