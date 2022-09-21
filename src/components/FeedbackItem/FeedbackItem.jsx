import Card from "../Shared/Card"

import FeedbackData from "../../Data/FeedbackData"
import { useState } from "react"

import FeedbackContent from "../FeedbackContent/FeedbackContent"


function FeedbackItem({items, handleDelete}) {

  if (!items || items.length === 0){
    return <p className="feedParagraph">No feedback items yet!</p>
  }


  return (
    <>
      
        {items.map((item)=>{
          return (
            <Card key={item.id}>
              <FeedbackContent
               feed={item} 
               handleDelete={handleDelete}
               />
          </ Card>
          )
        })}
    </>
  )
}


export default FeedbackItem