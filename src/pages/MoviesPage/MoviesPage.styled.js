import styled from 'styled-components';

const Container = styled.div`
  width: 1110px;
  margin: 0 auto;
  background-color: azure;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 288px;
  height: 40px;

  background: #f4f4f4;
  border: 1px solid #e10914;
  border-radius: 6px;

  font: inherit;
  font-size: 20px;
  outline: none;
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 97px;
  height: 40px;

  background: #e10914;
  box-shadow: 2px 2px 4px rgba(126, 147, 255, 0.2);
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
`;

// const SearchLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

export { Container, SearchForm, SearchInput, SearchButton };
