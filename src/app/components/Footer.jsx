import React from "react";
import '../styles/globals.css';

function Footer() {

    return (
        <div className="foot">
            <div className="icon">
                <div className="icon1">
                    <img src="https://i.ibb.co/7VCZs3S/Component-2-svg-1.png" alt="Component-2-svg-1" border="0" className="icon-image1" />
                    <div className="text1">
                        <div className="tex1">Phone Number</div>
                        <div className="tex2">+91 9876543219</div>
                    </div>
                </div>
                <div className="icon2">
                    <img src="https://i.ibb.co/mtZVQ6W/Component-2-1-svg.png" alt="Component-2-svg-1" border="0" className="icon-image1" />
                    <div className="text1">
                        <div className="tex1">Email Address</div>
                        <div className="tex2">vitacart@gmail.com</div>
                    </div>
                </div>
                <div className="icon3">
                    <img src="https://i.ibb.co/6Nk3Y0r/Component-2-2-svg.png" alt="Component-2-svg-1" border="0" className="icon-image1" />
                    <div className="text1">
                        <div className="tex1">Office Location</div>
                        <div className="tex2">Ambassador Street,Zone 61</div>
                    </div>
                </div>
            </div>
            <div className="logo-det">
                <div className="logo">
                    <img src="https://i.ibb.co/Jk79zJj/24873ffb8a3345a8dedea9b0d8f9e7ba.png" alt="24873ffb8a3345a8dedea9b0d8f9e7ba" />
                </div>
                <div className="text2">
                    <p>
                        Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
                    </p>
                </div>
            </div>
            <div className="address">
                <div className="loc-image">
                    <img src="https://i.ibb.co/CpkDYTVD/image-removebg-preview-1.png" alt="Group" border="0" />
                </div>
                <div className="loc-text">
                    vitacart Private Limited. C20, BKC, G Block, Mumbai 400051
                </div>
            </div>
        </div>
    )
}
export default Footer;
