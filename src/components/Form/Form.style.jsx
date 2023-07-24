import styled from 'styled-components';

export const StyledForm = styled.div`


margin: auto;
    form {
        display: flex;
        flex-direction: column;

        .input {
            display: flex;
            flex-direction: column;
            position: relative;
            margin-bottom: 10px;
            font-weight: 300;

            label {
                font-family: poppins;
                padding: 5px 0;
                font-size: 24px;
            }

            input {
                height: 50px;
                border-radius: 5px;
                border: 2px solid #d3d3d3;
                box-shadow: 0px 0px 5px #d3d3d3;
                font-size: 24px;
                padding-left: 60px;
                color: #a9a9a9;
                font-weight: 300;
                font-family: poppins;

                &::placeholder {
                    color: #a9a9a9;
                    font-weight: 300;
                    font-family: poppins;
                }
                
                &:focus {
                    outline: none;
                    border: 2px solid #f2877d;
                }
            }

            span {
                font-family: poppins;
                padding: 5px 0;
            }

            svg {
                width: 24px;
                height: 24px;
                position: absolute;
                left: 20px;
                top: 62px;
                g {
                    fill: #000;
                
                }
            }
        }
        button {
            padding: 10px;
            margin: 30px 0;
            border: 0px;
            border-radius: 5px;
            color: white;
            font-family: poppins;
            font-size: 28px;
            background-color: #f2877d;
            cursor:pointer;
            
    }

`;
