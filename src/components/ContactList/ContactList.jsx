import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useGetContactsQuery } from "redux/contactsAPI";
import PropTypes from 'prop-types';


export const ContactList = ({filter}) => {
    const {data, isFetching, error} = useGetContactsQuery();
   
    const getFiltredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return data?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    };

    const filteredContacts = getFiltredContacts();

    const isAnyContactsToShow = filteredContacts?.length > 0;
    const isNoMatches = filteredContacts?.length === 0;
    
    return (
    <>
    {isFetching && (<p>Loading your contacts, please wait</p>)}
    {error && (<p>Sorry, something went wrong. Please refresh page</p>)}
    {isAnyContactsToShow &&
        <ul>
            { filteredContacts.map( contact => { 
            const {id, name, phone} = contact;
            return <ContactListItem key={id} id={id} name={name} number={phone}/>;})
            }
        </ul>}
    {isNoMatches && <p>You dont have any contacts or matches</p>}
    </>
    );

};

ContactList.propTypes = {
        filter: PropTypes.string.isRequired,
};

