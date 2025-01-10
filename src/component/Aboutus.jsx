import React from 'react'

export default function Aboutus() {
    return (
        <div className='container'>

            <h2 className='text-primary pt-5 pb-5 fs-1 text-center'>About Us</h2>
            <div className="row pt-5">
                <div className="col-6">
                    <img src="https://www.parangat.com/wp-content/uploads/2024/05/websitecomponent.png" alt="" width={571} height={535} />
                </div>
                <div className="col-6">
                    <h2>Top-notch digital studio</h2>
                    <p className='fs-5 fw-normal'>PT (Parangat Technologies) is a fast growing Digital Reformation Company at the helm of latest technology breakthroughs and led by a competent technical team. We haven’t earned our reputation overnight as a leading Blockchain solutions provider, IoT solutions company and Artificial Intelligence Service company. It has been a result of consistent efforts to remain ahead of the technology curve and adapt to evolving app development strategies and services.</p>
                    <blockquote className='fst-italic fs-5 fw-normal pt-3'>
                        “We are a complete service provider offering flexible eng`agement models that suit every business need and budget. Consultation, designing, development, implementation, support, and marketing – we provide superior services to suit your business objective”
                    </blockquote>
                    <div className="row">
                        <div className="col-6 border-end">
                            <h2 className='fs-2'>100+</h2>
                            <p className='fs-5 fw-normal'>
                                Projects completed with satisfied
                                customers</p>

                        </div>
                        <div className="col-6">
                            <h2 className='fs-2'>
                                13+ Years experience</h2>
                            <p className='fs-5 fw-normal'>Most experience in this field so we
                                provide best services with satisfactions</p>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}
