import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: orange;
  &.active {
    color: red;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 30px;
  gap: 50px;
`;

export { Link, Container };
