import React from 'react';
import FooterContainer from '../container/common/FooterContainer';
import HeaderContainer from '../container/common/HeaderContainer';
import ProblemListContainer from '../container/problems/ProblemListContainer';

const ProblemListPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <ProblemListContainer />
      <FooterContainer />
    </>
  );
};

export default ProblemListPage;
