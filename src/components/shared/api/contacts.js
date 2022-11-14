import axios from 'axios';

const instanceContacts = axios.create({
    baseURL: 'https://636d3f0d91576e19e323f410.mockapi.io/api/contacts',
    params: {_limit:20,}
});

export const getContacts = async () => { 
    const { data } = await instanceContacts.get('/');
    return data;
}
export const addContact = async (data) => { 
  
    const { data: result } = await instanceContacts.post('/', data);
    
    return result;
}

export const removeContact = async (id) => { 
    const { data } = await instanceContacts.delete(`/${id}`);
    return data;
}