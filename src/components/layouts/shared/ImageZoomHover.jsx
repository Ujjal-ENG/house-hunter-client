/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';

const ImageZoom = ({ width, height, children }) => {
    const boxImgStyles = {
        width,
        height,
        overflow: 'hidden',
        gap: '20px'
    };

    return (
        <div style={boxImgStyles} className="rounded-xl">
            {children}
        </div>
    );
};

export default ImageZoom;
