import React from 'react'
import styled from 'styled-components'

const ChartBar2 = (props) => {
    const expense = 40

    const prosent = 12*100/expense
    console.log(prosent);

  return (
    <ChartBarStyle>
        <Shkala >
            <InnerShkala style={{height: prosent+"%"}}></InnerShkala>
        </Shkala>
        <span>{props.month}</span>
    </ChartBarStyle>
  )
}

export default ChartBar2
const ChartBarStyle = styled.div`
    display: inline-block;
    color: aliceblue;
`

const Shkala = styled.div`
    width: 50px;
    height: 250px;
    border-radius: 40px;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    background-color: white;
`


const InnerShkala = styled.div`
    background-color: red;
    
`