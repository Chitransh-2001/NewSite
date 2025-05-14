import React from "react";
import RorDevelopment from "../../../components/services/RorDevelopment";
import ReactDevelopment from "../../../components/services/ReactDevelopment";
import NodeDevelopment from "../../../components/services/NodeDevelopment";
import AngularDevelopment from "../../../components/services/AngularDevelopment";
import FullStackDevelopment from "../../../components/services/FullStackDevelopment";
import AWSDevelopment from  "../../../components/services/AWSDevelopment";
import HerokuDevelopment from "../../../components/services/HerokuDevelopment";
import UiDevelopment from "../../../components/services/UiDevelopment";
const Page = ({ params }) => {
  if (params?.slug === "ror") {
    return <RorDevelopment />;
  } else if (params?.slug === "reactjs"){
    return <ReactDevelopment/>
  }else if (params?.slug === "nodejs"){
    return <NodeDevelopment/>
  }else if (params?.slug === "angularjs"){
    return <AngularDevelopment/>
  }else if (params?.slug === "fullstackdevelopment"){
    return <FullStackDevelopment/>
  }else if (params?.slug === "uiuxdevelopment"){
     return <UiDevelopment/>
  }else if (params?.slug === "aws"){
    return <AWSDevelopment/>
  }else if (params?.slug === "heroku"){
    return <HerokuDevelopment/>
  }
};
export default Page;
