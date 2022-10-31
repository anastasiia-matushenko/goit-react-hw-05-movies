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

export { Link };
