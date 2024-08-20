import { Login } from "../page/login";
import { Index } from "../page/index";
import { createBrowserRouter } from "react-router-dom";
import { Props } from "../page/props";
import { Biji } from "../page/Biji";
import { Food } from "../page/food";
// import Square from "../page/square";
import { TableTable } from "../page/Table";
import { Table2 } from "../page/table2";
import Game from "../page/tac";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { index: false, path: "/table", element: <TableTable /> },
      {
        path: "",
        element: <TableTable />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/props",
    element: <Props />,
  },
  // {
  //   path: "/board",
  //   element: <Board />,
  // },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/biji",
    element: <Biji />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/table2",
    element: <Table2 />,
  },
]);
