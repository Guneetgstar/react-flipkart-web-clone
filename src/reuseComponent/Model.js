import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useForm} from 'react-hook-form';
// import * as yup from 'yup';
// import { string as yupstring, object as yupobject } from "yup";
import { object, string } from 'yup';
import './model.css'

export const Model = (props) => {
    // console.log(props.data,"props ================>", props);

    let loginSchema = object().shape({
        email: string().required(),
        password: string().required('Password is required')
    });
    
    const { register, handleSubmit, errors} = useForm({
        validationSchema: loginSchema
    });    

    function isEmailAddress(str) {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean 
    }
    const [emailPattern, setEmailPatter]=useState(false);

    const onSubmit = (values) => {
        console.log("value----1-->", values); 
        if(isEmailAddress(values.email)){
            console.log("value----2-->", values); 
            props.sendData(values);

        }
    }

    return(
        <>

            <Dialog open={props.data}   aria-labelledby="form-dialog-title">
                <i style={{fontSize:'24px', textAlign: 'right', cursor: 'pointer', color: '#fff'}} className="fa" onClick={props.handleCloseChild}>&#xf00d;</i>
                <DialogContent>
                <div style={{display: 'flex'}}>
                    <div className="login_dis">
                        <div  style={{width: '100%', maxWidth: '180px'}}>
                            <h3>Login</h3>
                            <p style={{fontSize: '16px', padding: '18px 0px'}}>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                    </div>
                    <div className="login_right_div">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <div> */}
                            {/* <p>errors:{errors.email}</p> */}
                            <TextField
                                name='email'
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Enter Email"
                                type="text"
                                inputRef={register({required: true})}
                                error={!emailPattern}
                                onChange={(e)=>{ isEmailAddress(e.target.value)?setEmailPatter(true):setEmailPatter(false)}}
                                // validators={['required', 'isEmail']}
                                // errorMessages={['this field is required', 'email is not valid']}
                                helperText= {!emailPattern?'Please enter valid Email':''}
                                fullWidth
                            />
                            {/* </div>
                            <div> */}
                            <TextField
                                name="password"
                                margin="dense"
                                id="password"
                                label="Enter Password"
                                type="password"
                                inputRef={register({required: true})}
                                error={errors.password ? true : false}
                                helperText={errors.password?'Please enter password':''}
                                fullWidth
                            />  
                            {/* </div> */}
                            <div>
                                <button className="login_btn" type="submit"  value="submit">Login</button>
                            </div> 
                        </form>
                        <div className="div_p"  >
                            <p style={{color: '#ccc'}}>OR</p>
                        </div>    
                        <div className="div_p">
                            <p style={{cursor:'pointer', color: '#2874f0'}}>Create an account</p>
                        </div>                 
                    </div>
                </div>
                </DialogContent>
                {/* <DialogActions>
                <Button onClick={props.handleCloseChild} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
                </DialogActions> */}
            </Dialog>

        </>
    )
}

// export default Model;