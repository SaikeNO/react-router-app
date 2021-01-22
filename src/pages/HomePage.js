import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id:1,
        title: 'Czym jest teoria strun',
        author: 'Jan Nowak',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti possimus eos quae tempore suscipit veniam numquam hic inventore distinctio voluptate repellat exercitationem repudiandae ut recusandae animi expedita, sequi minus odit.',
    },
    {
        id:2,
        title: 'Czym jest paradoks fermiego?',
        author: 'Anna Kwiatkowska',
        text: 'Lorem ipsum, dolot consectetur adipisicing elit. Corrupti possimus eos quae tempore suscipit veniam numquam hic inventore distinctio voluptate repellat exercitationem repudiandae ut recusandae animi expedita, sequi minus odit.',
    },
    {
        id:3,
        title: 'Ciemna materia i ciemna energia?',
        author: 'Jan Kowalski',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti possore suscipit veniam numquam hic inventore distinctio voluptate repellat exercitationem repudiandae ut recusandae animi expedita, sequi minus odit.',
    },
    
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;