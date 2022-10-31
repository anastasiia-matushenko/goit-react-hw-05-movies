import styled from 'styled-components';

const Container = styled.div`
  width: 1110px;
  margin: 0 auto;
  background-color: aqua;
`;

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 38px;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  width: 300px;
`;

const Title = styled.h2`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 20px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.03em;
  background: rgba(94, 92, 92, 0.34);
  color: #ffffff;
  box-shadow: inset 11.9px -11.9px 11.9px rgba(165, 165, 165, 0.051),
    inset -11.9px 11.9px 11.9px rgba(255, 255, 255, 0.051);
  backdrop-filter: blur(11.305px);
`;

export { Container, Item, Gallery, Title };
