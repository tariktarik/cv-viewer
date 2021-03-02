import React from 'react';
import InputField from '../../InputField/View';

function EditInfo({ info, handleChange, toggleView }) {
   
    return (
        <>

            {
                Object.keys(info).map((key) =>
                    <InputField
                        key={key}
                        name={key}
                        value={info[key]}
                        handleChange={handleChange}
                    />
                )
            }


            {/* <InputField
                name={'firstName'}
                value={firstName}
                handleChange={handleChange}
            />
            <InputField
                name={'lastName'}
                value={lastName}
                handleChange={handleChange}
            />
            <InputField
                name={'position'}
                value={position}
                handleChange={handleChange}
            />
             <InputField
                name={'email'}
                value={email}
                handleChange={handleChange}
            /> */}

            {/* <input
               
                className="form-control"
                type="text"
                name="firstName"
                value={firstName}
                placeholder={firstName}
                onChange={handleChange}
            /> 

            <input

                className="form-control"
                type="text"
                name="lastName"
                value={lastName}
                placeholder={lastName}
                onChange={handleChange}
            />

            <input
                className="form-control"
                type="text"
                name="position"
                value={position}
                placeholder={position}
                onChange={handleChange}
            />

            <input
                className="form-control"
                type="text"
                name="email"
                value={email}
                placeholder={email}
                onChange={handleChange}
            />
*/}
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditInfo;