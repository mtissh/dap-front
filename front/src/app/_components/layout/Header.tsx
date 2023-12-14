export const Header = () => {
  // TODO: ログイン判定から取得
  const isLoggedIn = false;
  return (
    <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-500 text-sm py-3 sm:py-0'>
      <nav className='relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8' aria-label='Global'>
        <div className='flex items-center justify-between'>
          <a className='flex-none text-xl font-semibold text-white/[.9]' href='/search' aria-label='DigitalArchiveProject'>DigitalArchiveProject</a>
          <div className='sm:hidden'>
            <button type='button' className='hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' data-hs-collapse='#navbar-collapse-with-animation' aria-controls='navbar-collapse-with-animation' aria-label='Toggle navigation'>
              <svg className='hs-collapse-open:hidden flex-shrink-0 w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='3' y1='6' x2='21' y2='6'/><line x1='3' y1='12' x2='21' y2='12'/><line x1='3' y1='18' x2='21' y2='18'/></svg>
              <svg className='hs-collapse-open:block hidden flex-shrink-0 w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 6 6 18'/><path d='M6 6l12 12'/></svg>
            </button>
          </div>
        </div>
        <div id='navbar-collapse-with-animation' className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'>
          <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
            {/* TODO: ドロップダウンいつか使うかも */}
            {/* <div className='hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4'>
              <button type='button' className='flex items-center w-full text-white/[.9] hover:text-white font-medium'>
                Dropdown
                <svg className='flex-shrink-0 ms-2 w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='m6 9 6 6 6-6'/></svg>
              </button>
            </div> */}
            {!isLoggedIn &&
              <a className='flex items-center gap-x-2 font-medium text-white/[.9] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6' href='/login'>
                <svg className='flex-shrink-0 w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>
                ログイン
              </a>
            }
          </div>
        </div>
      </nav>
    </header>
  );
};
