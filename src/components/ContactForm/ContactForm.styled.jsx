import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';



export  const StyledForm = styled(Form)`
display: grid;
margin: 0 auto;
justify-items: center;
border: 1px solid black;
border-radius: 5px;
padding: 15px;
width: 400px;
gap: 8px;
background: #f5f5dc;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ErMsg = styled(ErrorMessage )`
 font-size: 12px;  
color: red;
`;

export const StyledField = styled(Field)`
border: solid 1px black;
border-radius: 10px;
width: 70%;
height: 30px;
padding-left: 15px;

`

export const Styledlabel = styled.label`
font-weight: bold;

`

export const FormBtnStyled = styled.button`
border-radius: 40px;
width: 70%;
height: 50px;
margin-top: 24px;
background-color: #30d5c8;
color: #f3f3f3;
font-size: 16px;
font-weight: 700;
line-height: 1.13;
letter-spacing: -0.16px;
text-transform: uppercase;
border:none;
&:hover {
  scale: 105%;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
`