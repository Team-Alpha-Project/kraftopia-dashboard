import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: ${({ theme }) => theme.colors.first};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  border-radius: 1rem;
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;