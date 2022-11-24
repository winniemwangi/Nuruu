// // import { useForm } from 'react-hook-form';
// import axios from 'axios';


// const{formState:{errors}, reset}=useForm()

// const [user] = useState({
//     full_name:"",
//     Phone_number:"",
//     child_name: "",
//     child_date_of_birth:"",
//     registration_date:"",
//     appointment_date:"" 
// })
// const SendMessage =() => {
//     const{full_name,Phone_number,child_name} = user
//   if (full_name && Phone_number && child_name){
//       axios.post("https://nurucare.herokuapp.com/api/Message/",user)
//       .then(res=>{
//         console.log(res)
//         reset()
//       }
//       )}
//       else{
//         alert("Invalid input")
//       }
//   };

//   export default SendMessage;