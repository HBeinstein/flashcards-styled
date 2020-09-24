import React from "react";
import PropTypes from "prop-types";

function FlashcardDetails(props) {
  const { flashcard, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Flashcard Details</h2>
      <h3>{flashcard.term}</h3>
      <p>{flashcard.definition}</p>
      <button onClick={ props.onClickingEdit }>Edit Flashcard</button> 
      <button onClick={()=> onClickingDelete(flashcard.id) }>Delete Flashcard</button>
      {/* <hr/> */}
    </React.Fragment>
  );
}

FlashcardDetails.propTypes = {
  flashcard: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default FlashcardDetails;