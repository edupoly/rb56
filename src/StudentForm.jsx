import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function StudentForm() {
  let sForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      tech: [],
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Arey Chusko idi mandatory field"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="border border-2 p-2 m-2 border-info">
      <h1>StudentForm</h1>
      {/* {JSON.stringify(sForm?.errors)} */}
      <form onSubmit={sForm.handleSubmit}>
        <input type="text" {...sForm.getFieldProps("firstname")} />
        <br />
        <div>{sForm.touched.firstname && sForm.errors.firstname}</div>
        <input
          type="text"
          name="lastname"
          onChange={sForm.handleChange}
          onBlur={sForm.handleBlur}
        />
        <br />
        <input type="text" name="age" onChange={sForm.handleChange} />
        <br />
        Gender:
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={sForm.handleChange}
        />
        :Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={sForm.handleChange}
        />
        :Female
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={sForm.handleChange}
        />
        Others
        <br />
        Technologies:
        <input
          type="checkbox"
          name="tech"
          value="Nodejs"
          onChange={sForm.handleChange}
        />
        :NodeJS
        <input
          type="checkbox"
          name="tech"
          value="Angular"
          onChange={sForm.handleChange}
        />
        :Angular19
        <input
          type="checkbox"
          name="tech"
          value="ReactJS"
          onChange={sForm.handleChange}
        />
        :ReactJS19
        <br />
        <button type="submit"> Show</button>
      </form>
    </div>
  );
}

export default StudentForm;
