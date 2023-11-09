import { Inner } from '../layout/Inner';
import { Main } from '../layout/Main';
import { LoginBox } from '../molecules/LoginBox';

export const LoginTemplate = () => {
  return (
    <Main>
      <Inner>
        <LoginBox />
      </Inner>
    </Main>
  );
};