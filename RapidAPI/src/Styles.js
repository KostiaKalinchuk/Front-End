import styled, {css} from "styled-components";

export default styled.div`
  font-family: sans-serif;

  & > div {
    text-align: center;
    width: 900px;
    margin: 0 auto;
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
}`;
