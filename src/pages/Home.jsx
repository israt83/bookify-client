
import TabCategories from '../components/TabCategories'; // Default import
import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel';
import FAQ from '../components/Faq';
import UserTestimonials from '../components/UserTestimonials ';


const Home = () => {
  const books = useLoaderData()
  console.log(books);
  return (
    <div>
      <Carousel />
      <TabCategories books={books} />
      <FAQ></FAQ>
      <UserTestimonials></UserTestimonials>
      
     
      
    </div>
  );
};

export default Home;
