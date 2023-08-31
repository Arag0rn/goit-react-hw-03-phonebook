import styled from 'styled-components';

export const StyledUl = styled.ul`
display: grid;
margin: 0 auto;
justify-items: center;
border: 1px solid black;
border-radius: 5px;
padding: 15px;
width: 400px;
column-gap: 8px;
row-gap: 8px;
list-style: none;
background: #f5f5dc;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`

export const NumberStyled = styled.span`
margin-left: 10px;
`

export const DeletBtn = styled.button`
border-radius: 40px;
margin-left: 10px;
height: 20px;
background-color: #30d5c8;
color: #f3f3f3;
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
border:none;
&:hover {
  scale: 105%;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
`