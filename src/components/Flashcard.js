import React, { useState } from "react";
import PropTypes from "prop-types";

function Flashcard(props){

  const [hidden, setHidden] = useState(true);

  return (
    <React.Fragment>
      <div>
        <div onClick = {() => setHidden(!hidden)}>
          <h3>{props.term}</h3>
          {hidden ? <h4></h4> : <h4>{props.definition}</h4> }
        </div>
        <p><button onClick = {() => props.whenDetailsClicked(props.id)}>Details</button></p>
      </div>
    </React.Fragment>
  );
}

Flashcard.propTypes = {
  term: PropTypes.string,
  definition: PropTypes.string,
  whenDetailsClicked: PropTypes.func
}

export default Flashcard;