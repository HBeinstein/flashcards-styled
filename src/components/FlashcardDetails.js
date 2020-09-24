import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import '../styles/index.css';
import '../styles/details.css';

function FlashcardDetails(props) {
  const { flashcard, onClickingDelete } = props;

  

  return (
    <div className='details-content-container'>
      <div className='details-content'>
    <React.Fragment>
      {/* <h2>Flashcard Details</h2> */}
      <h3>{flashcard.term}</h3>
      <p>{flashcard.definition}</p>
      <button onClick={ props.onClickingEdit }>Edit Flashcard</button> 
      <button onClick={()=> onClickingDelete(flashcard.id) }>Delete Flashcard</button>
      {/* <hr/> */}
    </React.Fragment>
      </div>
    </div>
  );
}

FlashcardDetails.propTypes = {
  flashcard: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default FlashcardDetails;