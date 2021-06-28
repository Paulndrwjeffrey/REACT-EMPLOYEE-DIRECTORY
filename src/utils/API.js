import axios from 'axios';

const getEmployees = async () => {
  const results = await axios.get('https://randomuser.me/api/?results=100');
  return results;
};

export default getEmployees;