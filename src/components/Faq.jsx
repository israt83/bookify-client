


const FAQ = () => {
    return (
      <div className="container mx-auto bg-base-200 pt-10 mt-8 pb-20">
        <h2 className="text-2xl md:text-3xl lg:text-3xl text-center font-bold my-4">
          Questions about the Library Management System?
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-3xl text-center font-bold my-4">
          We've got the answers!
        </h2>
        <p className="text-center mt-4 mb-10 text-gray-400">
          Below are some common questions about the Library Management System.
        </p>
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="space-y-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="collapse collapse-arrow bg-white shadow-xl">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-medium">
                How do I borrow a book?
              </div>
              <div className="collapse-content">
                <p>To borrow a book, simply click on the "Borrow" button next to the book you want to borrow. You will be asked to select a return date. Once confirmed, the book will be added to your borrowed list.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white shadow-xl">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium">
                How do I return a borrowed book?
              </div>
              <div className="collapse-content">
                <p>You can return a borrowed book by going to your borrowed list and clicking on the "Return" button next to the book you wish to return. Follow the prompts to complete the return process.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white shadow-xl">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium">
                How can I check the availability of a book?
              </div>
              <div className="collapse-content">
                <p>You can check the availability of a book by searching for it in the library catalog. The book's page will display the current availability status, including how many copies are available for borrowing.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white shadow-xl">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-xl font-medium">
                Can I reserve a book that is currently unavailable?
              </div>
              <div className="collapse-content">
                <p>Yes, you can reserve a book that is currently unavailable. Once the book is returned and becomes available, you will be notified and can proceed to borrow it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  