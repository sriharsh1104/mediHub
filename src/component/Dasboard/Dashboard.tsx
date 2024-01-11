import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ImageData } from '../../interface/imageData';
import CommanHeader from '../commanHeader/CommanHeader';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().url('Invalid URL').required('Image URL is required'),
});

const Dashboard: React.FC = () => {
  const initialValues: ImageData = {
    id: 1,
    image: 'https://placekitten.com/200/300',
    title: 'Image 1',
    description: 'Description for Image 1',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CommanHeader />

          <div className="bg-white p-4 rounded-md shadow-md">
            <img
              src={formik.values.image}
              alt={formik.values.title}
              className="object-cover w-full h-48 rounded-md mb-4"
            />

            <label htmlFor="title" className="block text-xl font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className="w-full p-2 mb-2 border rounded-md"
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-600">{formik.errors.title}</div>
            )}

            <label htmlFor="description" className="block text-xl font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="w-full p-2 mb-2 border rounded-md"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-600">{formik.errors.description}</div>
            )}

            <label htmlFor="image" className="block text-xl font-semibold mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
              className="w-full p-2 mb-2 border rounded-md"
            />
            {formik.touched.image && formik.errors.image && (
              <div className="text-red-600">{formik.errors.image}</div>
            )}
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
