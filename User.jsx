import { useParams } from "react-router-dom";



export default function User(){
        console.log(useParams());
        const {id}=useParams();
    

         return <h2>User Profile for Id: {id}</h2>}
 


