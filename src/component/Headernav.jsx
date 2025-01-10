import React from 'react'

export default function Headernav() {
    return (
        <div className="container-fluid  position-sticky top-0">
            <div className='navbar'>
                <div className="imgicon">
                    <a href="https://www.parangat.com/">
                        <img src="https://www.parangat.com/wp-content/uploads/2024/05/parangat_logo-removebg-preview.png" alt="Parangat Logo" width={178} height={50} />
                    </a>
                </div>
                <ul>
                    <li><a href="https://www.parangat.com/">COMPANY</a></li>
                    <li><a href="https://www.parangat.com/about-us/">OUR SERVICES</a></li>
                    <li><a href="https://www.parangat.com/services/">OUR WORK</a></li>
                    <li><a href="https://www.parangat.com/industries/">INSIGHT</a></li>
                    <li><a href="https://www.parangat.com/our-work/"><button type="button" className="btn btn-primary">CONTACT US</button></a></li>
                </ul>
            </div>
        </div>
    )
}
