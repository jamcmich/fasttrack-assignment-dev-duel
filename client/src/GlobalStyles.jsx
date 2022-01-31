import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}

body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;

}

.extra.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.meta {
    margin-top: 0.5em;
}

.ui.form {
    width: 30%;
    font-size: 1vw;
}

.ui.card {
    width: 80%;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 5vw;
}
`;

export default GlobalStyles;
