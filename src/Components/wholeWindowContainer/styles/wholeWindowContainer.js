import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90%;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  margin-top: 2em;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    height: auto;
  }
  }
`;
