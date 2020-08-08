import React from 'react'
import Navbar from '../Components/Navbar'
import RecipeDetails from '../Components/RecipeDetails'

const RecipeDetailPage = () => {
    return (
        <div style={{height: "100vh"}}>
            <Navbar />
            <RecipeDetails/>
        </div>
    )
}

export default RecipeDetailPage
