import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\d+$/, 'Must only contain digits') 
    .required('Required'),
});


export const ContactForm  = ( {onAdd}) =>{

    return <>
        <div>
        <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        onAdd(values);
        action.resetForm();
      }}
    >
      <StyledForm>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledField id="name" name="name" 
        placeholder="Jane" 
        />
        <ErMsg component="span" name="name" />

        <Styledlabel htmlFor="number">Number</Styledlabel>
        <StyledField id="number" 
            name="number"   
            type="tel"
            placeholder="555-55-55"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErMsg component="span" name="number" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </div>
       </>

  
}