import { useState } from 'react';
import './App.css';

function App() {
  const [formFields, setFormFields] = useState([
    { name: '', id: '' ,branch:''},
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
    console.log("submitted")
  }

  const addFields = () => {
    let object = {
      name: '',
      id: '',
      branch:''
    
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <h4>DYNAMIC FORM</h4>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='id'
                placeholder='id'
                onChange={event => handleFormChange(event, index)}
                value={form.id}
              />
              <input
                name='branch'
                placeholder='branch'
                onChange={event=>handleFormChange(event,index)}
                value={form.branch}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <br/>
      <button onClick={addFields}>Add More...</button>
      <br /><br/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;