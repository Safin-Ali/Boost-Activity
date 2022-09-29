import './general.css';
import Main from './componets/main/Main';
function App() {
  return (
    <div className="general">
            <Main></Main>
    <section className="my-5 container">
        <div className='shadow p-5 my-4'>
          <h1>How to react work</h1>
          <p>React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.</p>
        </div>  
        <div className='shadow p-5 my-4'>
          <h1>React props and state difference</h1>
          <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
        </div>  
        <div className='shadow p-5 my-4'>
          <h1>Where we can use eseffect without data fetching!</h1>
          <p>The useEffect Hook allows you to perform side effects in your components.directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.useEffect is several ways to control when side effects run.</p>
        </div>  
</section>
      </div>
  );
}

export default App;