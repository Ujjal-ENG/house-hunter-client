/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const AddNewHouse = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        // Perform form submission here
        console.log(data);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6">Property Rental Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.name ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    {/* Address */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 mb-2">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Address is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.address ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>
                    {/* City */}
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 mb-2">
                            City <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="city"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'City is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.city ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                    </div>
                    {/* Bedrooms */}
                    <div className="mb-4">
                        <label htmlFor="bedrooms" className="block text-gray-700 mb-2">
                            Bedrooms <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="bedrooms"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Bedrooms is required',
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Please enter a valid number'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.bedrooms ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.bedrooms && <p className="text-red-500 text-sm mt-1">{errors.bedrooms.message}</p>}
                    </div>
                    {/* Bathrooms */}
                    <div className="mb-4">
                        <label htmlFor="bathrooms" className="block text-gray-700 mb-2">
                            Bathrooms <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="bathrooms"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Bathrooms is required',
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Please enter a valid number'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.bathrooms ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.bathrooms && <p className="text-red-500 text-sm mt-1">{errors.bathrooms.message}</p>}
                    </div>
                    {/* Room Size */}
                    <div className="mb-4">
                        <label htmlFor="roomSize" className="block text-gray-700 mb-2">
                            Room Size <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="roomSize"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Room Size is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.roomSize ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.roomSize && <p className="text-red-500 text-sm mt-1">{errors.roomSize.message}</p>}
                    </div>
                    {/* Picture */}
                    <div className="mb-4">
                        <label htmlFor="picture" className="block text-gray-700 mb-2">
                            Picture <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="picture"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Picture is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="file"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.picture ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.picture && <p className="text-red-500 text-sm mt-1">{errors.picture.message}</p>}
                    </div>
                    {/* Availability Date */}
                    <div className="mb-4">
                        <label htmlFor="availabilityDate" className="block text-gray-700 mb-2">
                            Availability Date <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="availabilityDate"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Availability Date is required' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="date"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.availabilityDate ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.availabilityDate && <p className="text-red-500 text-sm mt-1">{errors.availabilityDate.message}</p>}
                    </div>
                    {/* Rent Per Month */}
                    <div className="mb-4">
                        <label htmlFor="rentPerMonth" className="block text-gray-700 mb-2">
                            Rent Per Month <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="rentPerMonth"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Rent Per Month is required',
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Please enter a valid number'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.rentPerMonth ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.rentPerMonth && <p className="text-red-500 text-sm mt-1">{errors.rentPerMonth.message}</p>}
                    </div>
                    {/* Phone Number */}
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Phone Number is required',
                                pattern: {
                                    value: /^(\+880|0)1[1-9][0-9]{8}$/,
                                    message: 'Please enter a valid Bangladeshi phone number'
                                }
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                    </div>
                    {/* Description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 mb-2">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="description"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Description is required' }}
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    rows={4}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${errors.description ? 'border-red-500' : ''}`}
                                />
                            )}
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                    </div>
                    {/* Submit Button */}
                    <div className="mt-6">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewHouse;
