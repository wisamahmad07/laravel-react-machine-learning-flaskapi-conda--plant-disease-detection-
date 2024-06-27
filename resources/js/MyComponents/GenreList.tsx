import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const GenreList = () => {
  return (
    <HStack>
      
          <Link to="/" className="link">Home</Link>
       
          <Link to="/information" className="link">Information</Link>
        
          <Link to="/prediction" className="link">Prediction</Link>
        
      </HStack>
  )
}

export default GenreList;


// nothing


