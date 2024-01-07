import React from 'react';

function MyImage(props) {
    const { sizex, sizey } = props;
    if (!sizex || !sizey || sizex == 0 || sizey == 0 || sizex < 0 || sizey < 0 || sizex > 500 || sizey > 500) {
        return (
            <>
                <h2 className="invalid-heading">Enter Valid Values</h2>
                <img
                    src="https://picsum.photos/300/300"
                    alt="random"
                    className="avatar invalid"
                />
                <p className="invalid-text">Invalid dimensions! Please enter values between 1 and 500.</p>
            </>
        );
    }
    return (
        <>
            <h2>Random Image Generator</h2>
            <img src={`https://picsum.photos/${sizex}/${sizey}`} alt="random" className="avatar" />
        </>
    );
}

export default MyImage;
