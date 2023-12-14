export const SearchBar = ({
  onSubmit,
}: {
  onSubmit: () => void,
}) => {
  return (
    <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100'>
      <div className='flex-[1_0_0%]'>
        <label 
          htmlFor='hs-search-article-1'
          className='block text-sm text-gray-700 font-medium'
        >
          <span className='sr-only'>検索</span>
        </label>
        <input
          type='text'
          name='hs-search-article-1'
          id='hs-search-article-1'
          className='py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500'
          placeholder='フリーワード'
        />
      </div>
      <div className='flex-[0_0_auto]'>
        <button type='submit' onClick={onSubmit} className='w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='16' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/>
          </svg>
        </button>
      </div>
    </div>
  );
};