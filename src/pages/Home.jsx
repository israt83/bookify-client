
import TabCategories from '../components/TabCategories'; // Default import
import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  const books = useLoaderData()
  console.log(books);
  return (
    <div>
      <Carousel />
      <TabCategories books={books} />
    </div>
  );
};

export default Home;
