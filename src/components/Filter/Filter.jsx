import { StyledDiv, InputFilter } from "./Filter.styled"

export const Filter  = ({onChangeFilter, filter}) =>{

    return <StyledDiv>
        <InputFilter type="text" 
        value={filter} 
        placeholder="Search"
        onChange={event => onChangeFilter(event.target.value)}/>
       </StyledDiv>

  
}