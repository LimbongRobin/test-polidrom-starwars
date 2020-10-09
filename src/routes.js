import React from "react";
const Body = React.lazy(() => import("./views/layout/component/body/body.component"));


const Task = React.lazy(() =>
  import("./views/layout/component/task/task.component")
);

const routes =[
    {path:"/task", exact:true, name:"task", component:Task},
    // {path:"/body", exact:true, name:"body", component:Body},

    {
      path: "/body",
      name: "body",
      component: Body,
    },

]

export default routes;
