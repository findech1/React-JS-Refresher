const app = document.getElementById('app');
function Header(props){
  console.log(props); // { title: "React" }
    return <h1>Develop. Preview. Ship.</h1>;
}
function HomePage() {
    return (
      <div>
        <Header tittle="React"/>
      </div>
    );}
const root = ReactDOM.createRoot(app);
root.render(<Header />);
root.render(<HomePage />);
