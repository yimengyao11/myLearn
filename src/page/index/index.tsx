import { LayoutContainer } from "../../components/layout";

import { Outlet } from "react-router-dom";
export const Index = () => {
  //TODO下面两种写法一样
  const otherChildren = () => (
    <LayoutContainer children={<div>首页</div>}></LayoutContainer>
  );
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};
