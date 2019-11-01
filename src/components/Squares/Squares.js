import React from 'react';
import Icon from "react-icons-kit";
import styles from "./Squares.module.css"; 

function Square(props) {
    const { icon, heading, content, link } = props.square;
    return (
      <div className={styles.squares}>
        <Icon icon={icon} size={30} />
        <h5 style={{ fontSize: "20px" }}>{heading}</h5>
        <p style={{ fontSize: "15px" }}>{content}</p>
        <a href="#">{link}</a>
      </div>
    );
  }
  
  function Squares({ squares }) {
    return (
      <div className={styles.content}>
        {squares.map(square => (
          <Square key={square.heading} square={square} />
        ))}
      </div>
    );
  }

  export default Squares;