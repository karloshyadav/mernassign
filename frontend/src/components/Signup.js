import React, { useState } from 'react'
import axios from 'axios'

export default function Signup() {
    const [userInput, setUserInput] = useState({})
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }


    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:9000/signup',userInput).then(res=>{
                 })
        .catch(err=> {
  
        })
        
    }
    return (
        <div className='container col-sm-8'>
            <form>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" onChange={handleInput}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="username" onChange={handleInput}  />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" onChange={handleInput}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
                    <input type="tel" class="form-control"name="phone" onChange={handleInput} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Designation</label>

                    <select class="form-select" name="designation" onChange={handleInput}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Gender</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" value="male" onChange={handleInput} />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio"  name="gender" value="female" onChange={handleInput}/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Image input</label>
                    <input class="form-control" type="file" name="image" onChange={handleInput}/>
                </div>


                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}
