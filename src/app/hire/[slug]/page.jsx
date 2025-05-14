import React from "react";
import HireRorDevelopers from "../../../components/hire/HireRorDevelopers";
import HireReactJsDevelopers from "../../../components/hire/HireReactJsDevelopers";
import HireNodeJsDevelopers from "../../../components/hire/HireNodeJsDevelopers";
import HireFullStackDevelopers from "../../../components/hire/HireFullStackDevelopers";
import HireHerokuDevelopers from "../../../components/hire/HireHerokuDevelopers";
import HireMernStackDevelopers from "../../../components/hire/HireMernStackDevelopers";
const Page = ({ params }) => {
  if (params?.slug === "rubyonrailsdevelopers") {
    return <HireRorDevelopers />;
  } else if (params?.slug === "reactjsdevelopers"){
    return <HireReactJsDevelopers/>
  }else if (params?.slug === "fullstackdevelopers"){
    return <HireFullStackDevelopers/>
  }else if (params?.slug === "nodejsdevelopers"){
    return <HireNodeJsDevelopers/>
  }else if (params?.slug === "herokudevelopers"){
    return <HireHerokuDevelopers/>
  }else if (params?.slug === "mernstackdevelopers"){
     return <HireMernStackDevelopers/>
};
}
export default Page;
