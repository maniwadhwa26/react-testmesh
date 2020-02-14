import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "../style.css";

function CreateQuestionComponent(props){
  return(
    <>
    <div className="formDiv">
      <form noValidate autoComplete="off" className="questionForm">
      <TextField id="standard-basic" label="Question" fullWidth/>
      </form>
      <Button variant="contained" color="primary">Create Question</Button>
    </div>
    
    </>
  );
}

export default CreateQuestionComponent;