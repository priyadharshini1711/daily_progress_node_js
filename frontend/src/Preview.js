import React, {Component } from 'react';
import { useLocation } from 'react-router-dom'

const getLabel = (label) => {
  let splitLabel = label.charAt(0).toUpperCase() + label.slice(1);
  splitLabel = splitLabel.match(/[A-Z][a-z]+|[0-9]+/g)
  if(splitLabel){
    return splitLabel.join(" ")
  }else{
    return label
  }
}


function Preview () {
    const location = useLocation()
  const { form_data } = location.state
  const form_array = Object.entries(form_data).map((e) => ( { "id": e[0], "label": getLabel(e[0]),"value": e[1] } ));
  console.log(form_array)

    
        return(
            <div class="container">
            <h2 className='mt-4 mb-4'>Daily Progress Preview</h2>         
            <table class="w-75 table table-dark table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                  {form_array && form_array.map((item)=>{
                      return(<tr key={item.id}>
                          <td className='text-capitalize'>{item.label}</td>
                          <td>{item.value}</td>
                      </tr>)
                  })

                  }
                  
              </tbody>
            </table>
          </div>
        )
    
}

export default Preview;