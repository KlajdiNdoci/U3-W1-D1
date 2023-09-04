import "./App.css";
import MyButton from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <MyButton btnText="Il mio bottone" />
      <MyButton btnText="Il mio bottone numero 2" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1693427974447-efb55837e3b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2356&q=80"
        alt="Space image"
      />
      <ImageComponent
        src="https://images.unsplash.com/photo-1682504364307-e9927383df1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
        alt="Mercedes"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}

export default App;
