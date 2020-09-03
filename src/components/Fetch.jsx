import styled from 'styled-components';
import { keyframes } from 'styled-components';


const animate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;


const Fetch = styled.button`
background-color: #6EA4BB;
border: none;
outline:none;
padding: 20px;
border-radius: 10px;
font-family: MS Comic Sans;
font-size: 20px;
color: #E7E7E6;
animation: ${animate} 2s linear infinite;
margin-top: 20px;
`;


export default Fetch;