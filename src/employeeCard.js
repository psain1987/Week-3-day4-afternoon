import React from 'react'


function EmployeeCard({user}){

    let moviesList = user.favoriteMovies.map(movie => <li>{movie}</li>)

    return(
        <div className='card-box'>
            <div className='current-card'>{user.id}/25</div>
            <div className='person-info'>
                <h2>{user.name.first} {user.name.last}</h2>
                <div className='person-info-two'>
                    <p className='person-details'> <span className='more-person-details'>From: </span>{user.city}, {user.country}</p>
                    <p className='person-details'> <span className='more-person-details'>Job Title: </span>{user.title}</p>
                    <p className='person-details'> <span className='more-person-details'>Employer: </span>{user.employer}</p>
                </div>
                <div className='fav-movies'>
                    <span className='more-person-details'>Favorite Movies:</span>
                    <ol className='fav-movie-list'>
                        {moviesList}
                    </ol>
                </div>
            </div>
        </div>
    )
}
      
export default EmployeeCard