import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormWrapper, AddButton, InputForm } from "./ContactForm.styled";
import shortid from "shortid";
import { useAddContactMutation, useGetContactsQuery } from "redux/contactsAPI";
import { toast } from 'react-toastify';


const schema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`).required(),
    number: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

export const ContactForm = () => {
    const [addContact, {isLoading}] = useAddContactMutation();
    const {data: contacts} = useGetContactsQuery();
    const initialValues = {
        name: '',
        number: '',
    };
    
    const handleSubmit = async (data, {resetForm}) => {
        const isDuplicate = contacts.map(a => a.name).includes(data.name);
        if (isDuplicate) {
        toast(`${data.name} is already in your contacts`)
        return
        };
        
        const newContactId = shortid.generate();
        const newContact = {
        id: newContactId,
        ...data,
        };
        const response = await addContact(newContact);
        if(response.data?.name === data.name) {
            toast(`${data.name} added to your contacts successfully`)
        };
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} 
        validationSchema={schema} 
        onSubmit={handleSubmit}> 
        
            <FormWrapper>
                <label htmlFor="name"> Name</label>
                    <InputForm type="text" name="name"/>
                    <ErrorMessage name='name' component='div' />
                <label htmlFor="number"> Number</label>
                    <InputForm type='tel' name="number"/>
                    <ErrorMessage name='number' component='div' />
                <AddButton type="submit" disabled={isLoading}>Add contact</AddButton>
            </FormWrapper>
        </Formik>
    )
}
