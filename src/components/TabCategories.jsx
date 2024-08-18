

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const TabCategories = ({books}) => {
  

  return (
    <Tabs>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
          Browse books By Categories
        </h1>
        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          Four categories available for the time being. They are Arts & Music, Entertainment, Science & Math, and Hobbies & Craft. Browse them by clicking on the tabs below.
        </p>
        <div className='flex items-center justify-center'>
          <TabList className='flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800'>
            <Tab className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-300 dark:text-gray-600">Arts & Music</Tab>
            <Tab className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-300 dark:text-gray-600">Entertainment</Tab>
            <Tab className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-300 dark:text-gray-600">Science & Math</Tab>
            <Tab className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-300 dark:text-gray-600">Hobbies & Craft</Tab>
          </TabList>
        </div>

        
 
          <>
            <TabPanel>
              <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {books. filter(b => b.category === 'Arts & Music') .slice(0, 6).map(book => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {books.filter(b => b.category === 'Entertainment') .slice(0, 6).map(book => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {books.filter(b => b.category === 'Science & Math') .slice(0, 6).map(book => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {books.filter(b => b.category === 'Hobbies & Craft') .slice(0, 6).map(book => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
            </TabPanel>
          </>
      
      </div>
    </Tabs>
  );
};

export default TabCategories;
