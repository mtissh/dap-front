import { SearchBar } from '../molecules';

export const SearchArea = () => {
  return (
    <div className='mt-[5%]'>
      <SearchBar onSubmit={() => {console.log('search');}} />
    </div>
  );
};
