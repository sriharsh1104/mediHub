import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css"; // Import the generated Tailwind CSS file
import { userLogin } from "../Api/Actions/user.action";
import { LoginResponse } from "../../interface/ApiResponses/LoginResponse";
import dawai2 from "../../Assests/dawai3.webp";

const Category = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Input A Valid Email.")
      .required("*This Field Is Required.")
      .max(300, "Maximum 300 Characters Are Allowed For Email.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email"
      ),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });

  const handleLogin = async (values: any) => {
    try {
      const result: LoginResponse = await userLogin({
        emailAddress: values.email.trim(),
        password: values.password.trim(),
      });

      if (result?.status === 200) {
        localStorage.setItem('accessToken', result?.data?.accessToken);
        navigate("/");
      } else {
        // toaster.info("Login failed");
        // navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(${dawai2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <Formik
              initialValues={formik.initialValues}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              <Form className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      onClick={handleLogin}
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    >
                      Login
                    </button>
                    <div className="mt-4 text-sm">
                      <p>
                        Do you have an account?{" "}
                        <Link
                          to="/register"
                          className="text-cyan-500 hover:underline"
                        >
                          Register here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
