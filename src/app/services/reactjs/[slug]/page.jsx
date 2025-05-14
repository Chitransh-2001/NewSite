import React from 'react'
import CustomDevelopment from "../../../../components/services/reactservices/CustomDevelopment"
import IntegrationMigration from '../../../../components/services/reactservices/IntegrationMigration'
import MaintenanceUpgradation from '../../../../components/services/reactservices/MaintenanceUpgradation'
import UiuxDevelopment from '../../../../components/services/reactservices/UiuxDevelopment'
const page = ({params}) => {
  console.log(params,"params");
 if(params?.slug=="customdevelopment"){
    return <CustomDevelopment/>
 }else if(params?.slug=="uiuxdevelopment"){
    return <UiuxDevelopment/>
 }else if(params?.slug=="integration"){
   return <IntegrationMigration/>
 }else if(params?.slug=="maintenance"){
   return <MaintenanceUpgradation/>
 }
}
export default page