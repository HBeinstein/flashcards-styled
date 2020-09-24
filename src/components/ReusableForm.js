import React from "react";
import PropTypes from "prop-types";
import '../styles/index.css';
import '../styles/forms.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className='form-styles'>
        <form onSubmit={props.formSubmissionHandler}>
          <input 
            type='text'
            name='term'
            placeholder='term' />
            <br/>
          <input 
            type='text'
            name='definition'
            placeholder='definition' />
            <br/>
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;