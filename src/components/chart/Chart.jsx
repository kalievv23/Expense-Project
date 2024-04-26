import React from 'react'
import ChartBar from './ChartBar'
import styled from 'styled-components'

const Chart = (props) => {
    const months = [
        {
            month: "january",
            rashod: 0,
        },
        {
            month: "feburary",
            rashod: 0,
        },
        {
            month: "march",
            rashod: 0,
        },
        {
            month: "april",
            rashod: 0,
        },
        {
            month: "may",
            rashod: 0,
        },
        {
            month: "june",
            rashod: 0,
        },
        {
            month: "july",
            rashod: 0,
        },
        {
            month: "august",
            rashod: 0,
        },
        {
            month: "september",
            rashod: 0,
        },
        {
            month: "octomber",
            rashod: 0,
        },
        {
            month: "novomber",
            rashod: 0,
        },
        {
            month: "december",
            rashod: 0,
        },
    ]

    props.expense.map((el)=>{
        const month = el.date.getMonth()
        months[month].rashod = +el.price + months[month].rashod
    })

    months[11].rashod = 40   
    
    
  return (
    <ChartStyle>
        {
            months.map((el)=>{
                return <ChartBar month={el.month} rashod={el.rashod} />
            })
        }
    </ChartStyle>
  )
}

export default Chart

const ChartStyle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #3a3737;
    padding: 20px;
    border-radius: 20px;
`


