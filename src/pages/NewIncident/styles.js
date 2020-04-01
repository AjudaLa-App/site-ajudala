import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px;
  background: #f0f0f5;
  border-radius: 4px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    width: 100%;
    max-width: 450px;

    input,
    textarea {
      margin-top: 8px;
    }
  }
`;

export const Description = styled.section`
  width: 100%;
  max-width: 380px;

  img {
    width: 500px;
  }

  h1 {
    margin: 0 32px 32px 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
`;
