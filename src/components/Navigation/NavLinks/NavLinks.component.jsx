import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	li {
		margin: 0px;
		width: 100%;
		height: 65px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	a {
		display:block;
		border: 1px solid transparent;
    color: #292929;
    text-decoration: none;
    padding: 0;
		font-weight: normal;
		width: 100%;
		height: 100%;
		line-height: 4;
		padding-left: 16px;
		font-size: 16px;
		transition: background .5s;
		
		&:hover,
		&:active {
			background: rgba(0, 0, 0, 0.1);
    	color: #292929;
		}
	}
`;

const NavLinks = () => {
	return (
		<Ul>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
		</Ul>
	);
};

export default NavLinks;