
import './App.css';


function App() {


   function getRequest() {

    const url= 'http://localhost:3005/home';
    const init={
       method: "GET",      
       header:{'Content-Type':'application/json'},
     }
     fetch(url, init)
   }
   function postRequest() {
     const url= 'http://localhost:3005/inc';
     const data= 'http://localhost:3005/inc';
     const init={
       method: "POST",
       body: JSON.stringify(data),
       header:{'Content-Type':'application/json'},
      
     };

     fetch(url, init)
     
   }
  return (
    <div className="App">
      <header className="App-header">
      <button  onClick={getRequest}>        
       GET Request
      </button>
      <hr></hr>
      <button onClick={postRequest} >
        Post Request
      </button>
      </header>
    </div>
  );
}

export default App;
