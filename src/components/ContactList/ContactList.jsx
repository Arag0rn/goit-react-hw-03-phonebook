import { StyledUl, NumberStyled, DeletBtn } from "./ContactList.styled"

export const ContactList  = ({items, onDelete}) =>{

    return <>
        <StyledUl>
           { 
           items.map(({name, number, id})=>(
           <li key={id}>{name}:
           <NumberStyled>{number}</NumberStyled><DeletBtn onClick={()=>onDelete(id)}>Delete</DeletBtn></li>))}

        </StyledUl>
       </>

  
}