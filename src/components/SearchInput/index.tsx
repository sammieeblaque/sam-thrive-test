const SearchInput = (): JSX.Element => (
  <>
    <input
      type="text"
      placeholder="Search Username"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
           focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 w-1/4
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </>
);

export default SearchInput;
