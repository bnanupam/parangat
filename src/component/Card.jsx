import React from 'react'

export default function Card() {
    return (
        <div className='container cardContent px-0'>
            <div className="row gap-3 gx-0 justify-content-center">
                <div className="col-3 border p-3">
                    <img src="https://www.parangat.com/wp-content/uploads/2024/06/noun-expertise-681420420-JUNE.png" alt="" width={60} height={60} />
                    <h3 className='pt-3'>Domain Expertise</h3>
                    <p>With extensive experience across diverse industries, our experts leverage domain knowledge to deeply understand your specific business needs.</p>
                </div>
                <div className="col-3 border p-3">
                    <img src="https://www.parangat.com/wp-content/uploads/2024/06/noun-integration-669141420-JUNE.png" alt="" width={60} height={60} />
                    <h3 className='pt-3'>Specialization in Integration</h3>
                    <p>With extensive experience across diverse industries, our experts leverage domain knowledge to deeply understand your specific business needs.</p>
                </div>
                <div className="col-3 border p-3">
                    <img src="https://www.parangat.com/wp-content/uploads/2024/06/noun-partnership-695002320-JUNE.png" alt="" width={60} height={60} />
                    <h3 className='pt-3'>Proactive Partnership</h3>
                    <p>With extensive experience across diverse industries, our experts leverage domain knowledge to deeply understand your specific business needs.</p>
                </div>
            </div>
        </div>

    )
}
