import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import firebase from "firebase/app";
import '../styles/index.css';
import '../styles/header.css';

// const FlashcardHeader = styled.h1`
//   font-size: 36px;
//   text-align: center;
//   color: red;
//   `;

// const HeaderGrid = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
//   grid-template-rows: 15vh;
//   // background-color: blue;
// `;

// const ParagraphStyles = styled.p`
//   display: inline;
// `;

function Header(){

  const auth = firebase.auth(); // variable auth is called in the if statement, not the auth method of firebase
  let currentlyVisibleLink = null;
  if (auth.currentUser != null) {
    currentlyVisibleLink = <Link to="/logout"> Log out</Link>
  } else {
    currentlyVisibleLink = <Link to="/signin"> Sign in</Link>
  }

  return (
    <React.Fragment>
      <div className="header-grid-layout">
        <h1>The Flash</h1>
        <p><button><Link to="/">Home</Link></button></p>
        <p><button>{currentlyVisibleLink}</button></p>
      </div>
      {/* <hr/> */}
    </React.Fragment>
  );
}

export default Header;