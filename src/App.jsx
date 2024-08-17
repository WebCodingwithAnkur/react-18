import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './UserDetails';



function App() {

  return (
    <div className='w-full'>
         <h1 className='flex text-justify justify-center  text-3xl text-blue-700'>Understanding UPDATE Method in REST API</h1> 
         <br/><br/>  
         <UserDetails />         
    </div>
  )
}
 
export default App;















// class App extends Component{
//   constructor(props){
//     super(props) 
//     this.state={
//       showComponent:true
//     }   
//   }

//   toggleComponent = () => {
//     this.setState((prevState) => ({showComponent: !prevState.showComponent}))
//   }
 
//   render(){
//     return(
//       <div className='container'>
//         {/* <h2 className='text-primary'>What is Life Cycle Methods in React Js?</h2>     */}
//         <button  onClick={this.toggleComponent} className='btn btn-primary'>{this.state.showComponent ? 'Hide' : 'Show'} Life Cycle Component</button>
//         {this.state.showComponent && <LifeCycleDemo/>   } 
//       </div>
//     )
//   }
// }







