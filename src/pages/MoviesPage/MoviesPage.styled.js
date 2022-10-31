import styled from 'styled-components';

const Container = styled.div`
  width: 1110px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 288px;
  height: 40px;

  border: 1px solid #e10914;
  border-radius: 6px;

  font: inherit;
  font-size: 20px;
  outline: none;
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 97px;
  height: 44px;

  background: #e10914;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
`;

const Title = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-weight: 500;
`;

export { Container, SearchForm, SearchInput, SearchButton, Title };
