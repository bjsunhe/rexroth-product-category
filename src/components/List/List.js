import React from 'react';
import './List.css';




const List = ({ data }) => {

  
  return (
    <>
    <h2>{data.question}</h2>
    {
      
      data.answer.map((a,i)=>{ 
        return (
        <table className="attributes-table" key={i}>
          <thead>
            <tr>
              <th colSpan="2">{i+1}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(a).map((item, index) => {
              
              
              return (
              <tr key={index}>
                <td>{item}</td>
                <td>{a[item]}</td>
              </tr>
            )})}
          </tbody>
        </table>
      )})
    }

    </>
  );
};



export default List;
