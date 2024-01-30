import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Layout>
        <div style={{ width: "100%", backgroundColor: "#F5F8FD", height: "100%" }}>
          home
        </div>
      </Layout>
    </div>
  );
}

export default App;
