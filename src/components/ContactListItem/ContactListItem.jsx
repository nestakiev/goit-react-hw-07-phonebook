import PropTypes from "prop-types";
import { P, Li, DelButton } from "./ContactListItem.styled";
import { useDeleteContactMutation } from "redux/contactsAPI";
import { toast } from 'react-toastify';

export const ContactListItem = ({id, name, number}) => {
    const [deleteContact, {isLoading, isSuccess, data}] = useDeleteContactMutation();
    
    if(isSuccess) {
        toast(`${data.name} delete from contacts successfully`)
    };
    
    return (
    <Li>
        <P>{name}: {number}</P>
        <DelButton type="button" onClick={() => deleteContact(id)} disabled={isLoading}>Delete</DelButton> 
    </Li>
    )

};

ContactListItem.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    };
