import React from "react";
import { useState } from "react";
import styles from "./Table.module.scss";
import { IoIosAdd } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
function Table( {exam, subject, session, yearOfPassing, Institute, board, marks, fullMarks, percentage}) {
    const [others, setOthers] = useState([])

    const  handleAdd = ()=>{
        const addedArray = [...others, []]
        setOthers(addedArray)
    }
    const handleRemove = (i)=>{
        const delOthers = [...others]
        delOthers.splice(i,1)
        setOthers(delOthers)
        
    }
  return (
    <div className={styles.TableContainer}>
      <table>
        <tr>
          <th colSpan={2} >Exam Passed</th>
          <th>Subjects</th>
          <th>Session</th>
          <th>Year of Passing</th>
          <th>Institute</th>
          <th>Board/University</th>
          <th>Marks/CGPA</th>
          <th>Full Marks</th>
          <th>%</th>
         
        </tr>
        <tr>
          <td colSpan={2}>Matric</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
         
        </tr>
        <tr>
          <td colSpan={2}>Intermediate/+2</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
         
        </tr>
        <tr>
          <td colSpan={2}>Graduation</td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
         
        </tr>
        {others.map((data, i)=>
      <tr key={i}>
        <td colSpan={2}><input type="text"  placeholder="Course"/></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><button onClick={()=>handleRemove(i)} type="button">remove</button></td>
        </tr> 
         
        )} 
        
       
        
      </table>
      
      
        
      
      <div className={styles.AddRemove}>
        <div className={styles.IconAdd}>
        <IoIosAdd style={{color:"green", cursor:"pointer"}} size={24} onClick={handleAdd}/> <p>Add more Courses</p>
        </div>
       
      

      </div>
    </div>
  );
}

export default Table;
