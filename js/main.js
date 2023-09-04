1. compare two strings vowel count of "Fabevy" , "Velmurugan".
 Which one is having large vowel count. (use call back function) . 
 
	Ans:
 function vowels(a){
	let count = 0;
	a=a.toLowerCase()
	for (i=0;i<a.length;i++){
		if(a[i]==="a"||a[i]==="e"||a[i]==="i"||a[i]==="o"||a[i]==="u"){
			count++
		}
		
	}
	return count
 }
 function check(){
	let x = vowels("Isaac");
	let y = vowels("Joshuaa");
	console.log(x,y)
	if(x>y){
		console.log("x vowels count is greater than y")
	}
	else if (y>x){
		console.log("y vowels count is greater than x")
	}
	else{
		console.log("two strings vowels count is equal")
	}
 }
 check()

	
	
	
2. let num =0;
console.log(num++)
console.log(num++)
console.log(num++)

	Ans: 0 1 2
	
3.var obj = {a:1};
let emp = obj;
obj=null;
console.log(obj,emp)

       Ans:null {a:1}
		
4.console.log(add());
const add = () =>{
return a+b;
} 

		Ans:add is not defined

5.function mul(c,d){
return c*d
}		
mul(8)

	Ans: a)Nan
	     b) correct ans:
                    function mul(c,d=5){
                    return c*d
                    }		
                    mul(8)
               
             c)Default Param
             d) correct ans:
                    function mul(c,d){
                    return c*d
                    }		
                    mul(8,4)
			
6.let data = {name: "ES6"}

function check(value){
if(value===data){
console.log("Both are same");
}
else {
console.log("not same")
}
}
check({name: "ES6"})

			Ans:Not same
			
			
7. let emp = {name:"ES6"}
emp.c = 25;
emp.name = "React"
console.log(emp)

		Ans:{name: 'React', c: 25}
		
8.How to avoid shallow copy? How many ways are there? Write example


		Answer:1.Using spread operator.
                               let a = {name:"james",age:"2"},  let b={...a} , a.age=5                                   

                          let x=[1,2,3]
                          let y=[...x]
			  x.push(y)
			  console.log(x,y)

		       2.Using Object.assign operator.
                                let a = {name:"james",age:"2"},  let b=object.assign({},a) , a.age=5 


                          let x=[1,2,3]
                          let y=[...x]
			  x.push(y)
			  console.log(x,y)


                       3.Using JSON.stringify and JSON.parse.
			          let a = {name:"james",age:"2"},  let b=JSON.parse(JSON.Stringify(a)) , a.age=5 
			  


                         let x=[1,2,3]
                          let y=object.assign([],x)   let a = {name:"james",age:"2"},  let b=object.assign({},a) , a.age=5 
			  x.push(y)
			  console.log(x,y)


                           let x=[1,2,3]
                          let y=JSON.parse(JSON.Stringify(x))
			  x.push(y)
			  console.log(x,y)
							
9. [{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
Sort an array in ascending order based on their age.



			Answer: let a=[{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
				let b=a.sort((x,y)=>{
					return x.age-y.age
				})
				console.log(b)
				
10.input : [
{name: "Ganesh",position: "fresher"},
{name: "Hariharan",position: "junior"},
{name: "Samy",position: "senior"},
{name: "Mari",position: "junior"}
]
output: ["Hariharan","Mari"]	


			Answer:
	let input = [{name: "Ganesh",position: "fresher"},{name: "Hariharan",position: "junior"},{name: "Samy",position: "senior"},{name: "Mari",position: "junior"}]				]
				let output=input.filter((v,i)=>{
					return v.position=="junior" ? v.name:""
				})
				console.log(output)
	
	
11. [{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
How to store this value in local storage? 

			Answer:localStorage.setItem("b",JSON.stringify(a))
					

12. Write difference between map and filter

		Answer:
		map() Method
			map method is used to transform an array by applying a function to each element and creating
			a new array with the transformed values.
		filter() Method
			filter method is used to extract elements from an array based on a condition and create a new array containing 
			only the elements that satisfy that condition.
			
13.Difference between props and state. 



	Answer:
				PROPS                                                           STATE

The Data is passed from one component to another.        	 The Data is passed within the component only.
It is Immutable (cannot be modified).	                     It is Mutable ( can be modified).
Props can be used with state and functional components.   	 The state can be used only with the state components/class component (Before 16.0).
Props are read-only.	                                     The state is both read and write.


14.Syntax and need of use param and useSearch param. (5m)

useParam syntax and purpose

	The useParams hook helps you extract the dynamic part attached to a
	URL and returns an object of key/value pairs of the dynamic parameter in a URL.
		  const params = useParams()
		  
useSearchParam syntax and purpose
	
	The useSearchParams hook provided by the React Router library
	helps you manage the information that's included in a URL after the "?" symbol
	
		 let navigate = useNavigate();
                 let searchParams = useSearchParams();







15.Write flow of context . 

		Answer:
		
		
		step1:
		Context.js
		
		import React, { createContext } from "react";
		export const Context=createContext()
		
		step2:
		
		Reducer.js
		
		import React from "react";

			export const initialState={
				name:"angel",
				age:8
			   
			   }
			export const Reducer=(state,action)=>{

				if(action.type=="name"){
					return {...state,name:action.payload}
				}
			   }
			   
			step3:
			
			Router.js
			
			
				import React, { useReducer } from "react";
				import { BrowserRouter, Routes, Route } from "react-router-dom";
				import Home from "./Home"
				import { Context } from "./Context";
				import { Reducer, initialState } from "./Reducer";

				function Router(){ 
					const [state,dispatch]=useReducer(Reducer,initialState)
					console.log(state)
					return(
						<Context.Provider value={{state,dispatch}}>
						<BrowserRouter>
						<Routes>
							<Route  path="/" element={<Home/>}> 
								

							</Route>
						</Routes>
						</BrowserRouter>
						</Context.Provider>
					)

				}
				export default Router
				
				
		step4:
		
		Home.js
		
		import React, { useContext } from "react";
import {Context} from './Context'

export function Home(){

    const {state,dispatch}=useContext(Context)


    let  handle=()=>{
        dispatch({type:"name",payload:"david"})
        dispatch({type:"age",payload:8})
	}
        
   return(
        <div>
            <button onClick={handle}>Click me</button>
           <h1>{state.name}<h1>
       </div>
    )

    
}
export default Home

16.Function and class component difference. 	
	
	Answer:
	
	function component											Class Component

A functional component is just a plain JavaScript pure function 		A class component requires you to extend from React.
that accepts props as an argument and returns a React element(JSX).		Component and create a render function that returns a React element.


Example:									constructor(props) {
										super(props);
const [name,SetName]= useState(' ')						this.state = {name: ' '}
																				}
Constructors are not used.							Constructor is used as it needs to store state. 



17.How to create react project? 

		Answer:npx react-create-app redbus
