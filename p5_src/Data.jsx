import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Data() {
  const [recipes, setRecipes] = useState([])
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' })
  const [editrecipie, seteditrecipie] = useState(null)

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || []
    setRecipes(savedRecipes)
  }, [])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe({ ...newRecipe, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editrecipie !== null) {
      const updatedRecipes = [...recipes]
      updatedRecipes[editrecipie] = newRecipe
      setRecipes(updatedRecipes)
      seteditrecipie(null)
    } else {
      setRecipes([...recipes, newRecipe])
    }
    setNewRecipe({ title: '', ingredients: '', instructions: '' })
  }

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe, index) => index !== id))
  }

  const editRecipe = (index) => {
    setNewRecipe(recipes[index])
    seteditrecipie(index)
  }

  return (
    <center>
      <div>
        <h1>Employee App</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Employee Name<br/>
            <input type="text" name="title" value={newRecipe.title} onChange={handleChange} />
          </label><br/>
          <label>
          Employee Discription<br/>
            <input type="text" name="ingredients" value={newRecipe.ingredients} onChange={handleChange} />
          </label><br/>
          <label>
          Employee Experence<br/>
            <input type="text" name="instructions" value={newRecipe.instructions} onChange={handleChange} />
          </label><br/>
          <br/>
          <button type="submit">{editrecipie !== null ? 'Edit Recipe' : 'Add Task'}</button>
        </form>
        <h2>Employee Detail</h2>
        <div className='main'>
          <table border={3}>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Discription</th>
                <th>Employee Experence</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe, index) => (
                <tr key={index}>
                  <td><h3>{recipe.title}</h3></td>
                  <td>{recipe.ingredients}</td>
                  <td>{recipe.instructions}</td>
                  <td><button onClick={() => editRecipe(index)}>Edit</button></td>
                  <td><button onClick={() => deleteRecipe(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </center>
  );
}

export default Data;