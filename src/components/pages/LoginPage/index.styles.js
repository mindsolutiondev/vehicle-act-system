import styled from 'styled-components'

export const ContainBox = styled.div`
  font-family: 'Noto Sans Thai UI', 'Noto Sans';
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .boxSpin {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`
export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  width: 360px;
  margin: auto;
  border-radius: 0.5em;
  flex-direction: column;

  .header {
    display: flex;
    margin: 20px;
    padding: 5% 0;
    justify-content: center;
    font-size: x-large;
    font-weight: bold;
  }

  .boxWrap {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .buttonWrap {
    margin: 20px;

    .buttonLogin {
      width: 100%;
      height: 50px;
      border-radius: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
      color: white;
      border: none;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
    }

    .buttonLogin:hover {
      background-color: #4caf50;
      color: white;
    }
  }
`