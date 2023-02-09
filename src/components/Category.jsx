import styled from "styled-components"; 
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


import React from 'react'

function Category() {

	const [views, setViews] = useState([]);
    

    const fetchData = async () => {
        const data = await fetch(`http://localhost:8080/api/views`);
        let jsonData = await data.json();
        setViews(jsonData);
    }


    useEffect(() => {
        fetchData();
    },[]);




  return (

	<List>
		{views.map((view)=> (
			<SLink to={`/views/${view.name}`} key={view.id}>
				<h4>{view.name}</h4>
			</SLink>
		))}
	</List>
  )
}

const List = styled.div`
	display: flex;
	flex-direction: column;
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	background: linear-gradient(35deg, #494949, #313131);
	width: 10rem;
	height: 3rem;
	cursor: pointer;
	margin-bottom: 1rem;
	margin-right: 1rem;

	h4{
		color: white;
		font-size: 0.8rem;
	}

	svg{
		color: white;
		font-size: 1.5rem;
	}
	&.active{
		background: linear-gradient(to right, #f27121, #e94057);

		svg{
			color: white;
		}
		h4{
			color: white;
		}
	}
`;

export default Category