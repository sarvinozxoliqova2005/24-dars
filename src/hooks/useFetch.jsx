import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetch = ({ url, key }) => {
  const getData = async () => {
    const res = await axios.get(`https://fakestoreapi.com/${url}`);
    return res?.data; 
  };

  const { data, loading } = useQuery({
    queryKey: key,
    queryFn: getData,
  });

  return { data, loading: loading };
};

export default useFetch;
