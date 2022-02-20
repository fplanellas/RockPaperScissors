import React from 'react';
import styled from 'styled-components';
import Score from './Score';

const HeaderStyled = styled.div`
    border: 2px solid rgba(255, 255, 255, .29);
    border-radius: 10px;
    padding: 0.5em 1em;
    position:relative;
    h1{
        font-size: 20px;
        margin-top: 6px;
    }
`

const Header = () => {

  return (         
      <HeaderStyled>
          <div>
              <h1>
                  Rock Paper Scissors    
              </h1>

              <Score />

          </div>                           
      </HeaderStyled>    
  )
}

export default Header

