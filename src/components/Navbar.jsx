import React from 'react'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'

function NavBar() {
    return (
        <Nav>
                <div className="title">
                    <h4>Dashboard</h4>
                    <h5>Payment updates</h5>
                </div>
                {/* <div className="search">
                    <BiSearch />
                    <input type="text" placeholder="Search" />
                </div> */}
        </Nav>
    )
}

export default NavBar
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    color: black;
    .title{
        h5{
            color: grey;
        }
    }
    .search {
        background-color: white;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 8rem 1rem 1rem;
        border-radius: 1.5rem;
        svg{
            color: grey;
        }
        input{
            background-color: transparent;
            border: none;
            color: grey;
            &:focus{
                outline: none;
            }
            &::placeholder {
                color: grey;
            }
        }
    }

`;
