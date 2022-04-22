// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    article {
        width: 40%;
        margin: 1%;
        background-color: black;

        &:hover {
            background-color: #B8FFF9;
            h2 {
                color: black;
            }
            transition: all 0.2s ease-in-out;
        }
    }

    h2 {
        color: #40DFEF;
    }
`

export default function Character(props) {
    const { data } = props;

    if (!data) return <h4>Universe rendering...please wait.</h4>

    return (
        <StyledCharacters>
            {
                data.map((char, idx) => (
                    <article key={idx}>
                        <h2>{char.name}</h2>
                    </article>
                ))
            }
        </StyledCharacters>
    )
}