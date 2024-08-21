import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './Parent';



function App() {

    const user ={
      name:'John',
      age:35
    }

  return (
    <div className='w-full  flex  justify-center py-20'>
         <h1 className='flex text-justify justify-center  text-3xl text-blue-700'>Understanding Prop Drilling in React Js</h1> 
         <br/><br/>
         <div className='fixed flex-col mx-auto py-40 px-8 text-pretty text-center text-3xl'>
           <Parent  user={user} />
         </div>
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







