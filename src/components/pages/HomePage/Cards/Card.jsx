/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ImageZoom from '../../../layouts/shared/ImageZoomHover';

const Card = ({ data }) => {
    return (
        <div className="pt-20">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <div>
                        <ImageZoom width="350px" height="100%">
                            <img src={data.picture} alt="house-picture" className="w-full h-full hover:scale-125 duration-300 ease-in" />
                        </ImageZoom>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.name}</h2>
                    <p>{data?.description}</p>
                    <div className="flex justify-between p-4">
                        <div>
                            <p>
                                City: <span className="font-bold">{data?.city}</span>
                            </p>
                            <p>
                                Address: <span className="font-bold">{data?.address}</span>
                            </p>
                            <p>
                                PhoneNumber: <span className="font-bold">{data?.phoneNumber}</span>
                            </p>
                            <p>
                                RoomSize: <span className="font-bold">{data?.roomSize}</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                BedRooms: <span className="font-bold">{data?.bedrooms}</span>
                            </p>
                            <p>
                                BathRooms: <span className="font-bold">{data?.bathrooms}</span>
                            </p>
                            <p>
                                RentPerMonth: <span className="font-bold">${data?.rentPerMonth}</span>
                            </p>
                            <p>
                                AvailabilityDate: <span className="font-bold">{data?.availabilityDate}</span>
                            </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn btn-primary">
                            Booking House
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
