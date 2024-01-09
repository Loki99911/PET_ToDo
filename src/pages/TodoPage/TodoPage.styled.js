import styled from "styled-components";

export const TodoPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
`;

export const TodoPageBtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const TodoPageListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;