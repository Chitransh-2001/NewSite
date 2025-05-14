import React from "react";
import Schlorship from "../../../../components/casestudy/services/SchlorShip";
import DigitalPayments from "../../../../components/casestudy/services/DigitalPayments";
import PlatForm from "../../../../components/casestudy/services/PlatForm";
import Biodiversity from "../../../../components/casestudy/services/Biodiversity";
import FreeLance from "../../../../components/casestudy/services/FreeLance";

const Page = ({ params }) => {
  if (params?.slug === "schlorship") {
    return <Schlorship />;
  } else if (params?.slug === "digital") {
    return <DigitalPayments />;
  } else if (params?.slug === "platform") {
    return <PlatForm />;
  } else if (params?.slug === "diversity") {
    return <Biodiversity />;
  } else if (params?.slug === "freelance") {
    return <FreeLance />;
  }
};

export default Page;
