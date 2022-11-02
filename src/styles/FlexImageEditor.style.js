import Styled from 'styled-components';

export const PR = Styled.div`
`;

export const Zoom = Styled.div`
  position: absolute;
  right: 20rem;
  top: 5.4rem;
  color: black;
  z-index: 1000;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
    font-size: 1rem;
    margin: 0 0.7rem;
  }
`;

export const disable = Styled.div`
  opacity: 0.5;
  pointer-events: none;
`;
