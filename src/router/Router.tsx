import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Yonnmaruyonmarpage } from "../components/pages/Pageyonnmaruyonmar";
import { LoginUserProvier } from "../Providers/LoginUserProvier";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvier>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={`/home${route.path}`}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
        <Route path="*" element={<Yonnmaruyonmarpage />} />
      </Routes>
    </LoginUserProvier>
  );
});
