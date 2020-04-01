import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 30px auto 0;

  img.logo {
    width: 500px;
    margin-top: 0;
  }

  form {
    h1 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    input {
      margin: 5px 0;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #ffffff;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      svg {
        margin-right: 8px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
