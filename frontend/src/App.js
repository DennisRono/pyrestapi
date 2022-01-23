import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import './style.css'

function App() {
  const [data, setData] = useState([{}])
  const [showForm, setShowForm] = useState(false)
  const [articles, setArticles] = useState([]);

  useEffect( () => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data);
      }
    )
  }, [])
  const toggleShowForm = () => {
    setShowForm(!showForm);
  }
  const insertedArticle = (article) =>{
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }
  return (
    <div className="App">
      {(typeof data.members == "undefined")?(
        <p>Loading...</p>
      ):(
        data.members.map((member, i) => {
          return <p key={i}>{member}</p>
        })
      )}
<div className="container">
<div className="row p-3">
  <div className="text-center">
  <h1>Post data from React to Flask.</h1>

  <button 
  onClick={toggleShowForm}
  className="btn btn-primary"
  >
  Write an article
  <i className="bi bi-pencil-square m-2"></i>
  </button>

  </div>

</div>

  {showForm && (
  <Form 
    insertedArticle={insertedArticle}
    />
  )}
</div>
    </div>
  );
}

export default App;
