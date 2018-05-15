import styled, { css } from "styled-components";

export default styled.div`
  font-family: sans-serif;

  & > div {
    text-align: center;
  }
  
  select {
   width: 400px;
   height: 30px;
   margin: 15px 0 15px 0;
  }
  
  table {
   padding: 20px;
  }
  
  .container {
    text-align: center;
    background-color: #EEF1F2;
    width: 700px;
    height: 230px;
    margin: 0 auto;
    padding: 20px;
    align-items: flex-start;

    & > button {
      width: 88px;
      height: 29px;
      border-radius: 10px;
      background: #26b74d;
      color: #fff;
      text-align: center;
      border: none;
      margin: 30px;
    
    }
  }
  
  .flex-container {
   display: flex;
   justify-content: space-around;
   
   & > select {
    width: 205px;
    height: 30px;
    margin: 0;
   }

    & > input {
    width: 200px;
    height: 25px;
   }
}


  
  
  
  
  
----------------
  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type="checkbox"] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }

`;
