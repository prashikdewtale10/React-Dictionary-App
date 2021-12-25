
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Definations from './components/Definations/Definations';

function App() {
  const [word, setWord] = useState("")
  const [apidata, Setapidata] = useState([])
  const [category, setCategory] = useState("en")
  const DictApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      Setapidata(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(apidata)
  useEffect(() => {
    DictApi()
  }, [word, category])
  return (
    <div className='App'
      style={{ height: "100vh", 
      backgroundColor: "#282c34", 
      color: "white" }}>

      <Container maxWidth="md"
        style={{ display: "flex", 
        flexDirection: "column", 
        height: "100vh" }}>

        <Header 
        category={category} 
        setCategory={setCategory} 
        word={word} 
        setWord={setWord} />
        
   
        {apidata&& (<Definations word={word} data={apidata} category={category} />) }
        
      </Container>

    </div>
  );
}

export default App;
