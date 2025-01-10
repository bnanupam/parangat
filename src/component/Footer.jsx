import React from 'react'
export default function Footer() {
    return (
        <div className="container-fluid bg-dark border-top  border-bottom p-5">
            <div className="row">
                <div className="col-4">
                    <img src="https://www.parangat.com/wp-content/uploads/2024/06/fqfe.png" alt="" width={159} height={46} />
                    <p className='text-white'>Empowering Innovation through Data-Driven AI <br /> and Advanced Mobile & Web App Development.</p>
                </div>
                <div className="col-4">
                    <img src="https://www.parangat.com/wp-content/uploads/2024/06/Frame-189.png" alt="" width={381} height={71} />
                </div>
                <div className="col-4">
                    <ul className='d-flex gap-3'>
                        <li><a href="https://facebook.com" aria-label="Facebook" class="facebook">

                            <i aria-hidden="true" class="icon icon-facebook"></i>
                        </a></li>
                        <li><a href="#" aria-label="Twitter" class="twitter">

                            <svg aria-hidden="true" class="e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                        </a></li>
                        <li><a href="#" aria-label="LinkedIn" class="linkedin">

                            <i aria-hidden="true" class="icon icon-linkedin"></i>
                        </a></li>
                        <li><a href="#" aria-label="News" class="newspaper">

                            <svg aria-hidden="true" class="e-font-icon-svg e-far-newspaper" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
