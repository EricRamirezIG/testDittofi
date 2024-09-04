import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const [categories, setCategories] = useState([])

  const getCategories = async() => {
    try {
      const response = await axios.get("https://app8971.prod.dittofi.link/iapi/v1/categories",
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        }
      )
      console.log(response)
      setCategories(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategories()
  },[])


  return (
    <div className="App">
      <h2 className='title'>Conexión con API de Dittofi</h2>
      <p className='subTitle'>Categorías</p>
      <ul className='list'>
        {categories?.map(categorie => (
          <li key={categorie.Id} className='item'>
            <div className='image-container'>
              <p className='name'>{categorie.name}</p>
              {categorie.icon && <img className='image' src={categorie.icon} alt={categorie.name} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App;
