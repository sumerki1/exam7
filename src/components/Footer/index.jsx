import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
       <>
        <div className='footer'>
            <div className='footer-wrapp'>
                <div className='img-footer'>
                    <img src="https://theindustry.beauty/wp-content/uploads/2021/07/beauty-bay.jpg" alt="#" />
                </div>
                <div className='footer_list'>
                    <ul className='list-wrapper'>
                        <h4>Help & Information</h4>
                        <li>Delivery & Returns</li>
                        <li>FAQ's</li>
                        <li>Haul Pass</li>
                        <li>Gift Cards</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Affiliates</li>
                        <li>Student Discount</li>
                    </ul>
                    <ul className='list-wrapper'>
                        <h4>Legal</h4>
                        <li>Terms & Conditions</li>
                        <li>TRIBE Terms</li>
                        <li>Website Terms of Use</li>
                        <li>Privacy</li>
                        <li>Anti-Slavery</li>
                        <li>Cookies</li>
                        <li>Manage Preferences</li>
                    </ul>
                </div>
                <div className="email__wrap">
                    <h3>WANT MORE FROM BEAUTY BAY?</h3>
                    <p>Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.</p>
                    <section>
                        <form  className='form'>
                            <input type="text" placeholder='Your Email'/>
                            <FontAwesomeIcon className='form-icon' icon={faArrowRight} />
                        </form>
                        <div className="card__imgs">
                         <img src="https://w7.pngwing.com/pngs/477/596/png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon-thumbnail.png" alt="facebook" />
                         <img src="https://toppng.com/uploads/preview/instagram-logo-11545512111t0928udues.png" alt="instagramm" />
                         <img src="https://logowik.com/content/uploads/images/761_twitter.jpg" alt="twitter" />
                         <img src="https://img.freepik.com/premium-vector/tik-tok-glitch-icon-social-media-tik-tok-icon-vinnitsa-ukraine-february-22-02-2023_250246-536.jpg" alt="tiktok" />
                         <img src="https://i.pinimg.com/736x/57/f2/c0/57f2c0e905c438c3f3bd6c8684441fb8.jpg" alt="pinteres" />
                         <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNi0wOS5wbmc.png" alt="youtobe" />
                        </div>
                    </section>
                </div>
            </div>
            <div className='text'>
                <p>Copyright © 2022 BEAUTY BAY Ltd.</p>
                <p>Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672.</p>
            </div>
        </div>
        <div className="payments">
           <a href='https://www.paypal.com/' className="payment__cards">
           <img width={146} height={72} src="https://www.nopcommerce.com/images/thumbs/0014294_paypal-express-payment-plugin.png" alt="" />
           </a>
           <a href='https://www.klarna.com/' className="payment__cards">
           <img width={146} height={52} src="https://hjk.ie/wp-content/uploads/2022/09/webimage-351D92AA-58D9-411D-A32716893D7AFC96.jpg" alt="" />
           </a>
           <a href='https://www.clearpay.co.uk/' className="payment__cards">
           <img width={146} height={52} src="https://woo.com/wp-content/uploads/2021/06/fb-clearpay-v1@2x.png" alt="" />
           </a>
           <a href='https://www.apple.com/apple-pay/' className="payment__cards">
           <img width={140} height={25} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/800px-Apple_Pay_logo.svg.png" alt="" />
           </a>
           <a href='https://cis.visa.com/' className="payment__cards">
           <img width={146} height={42} src="https://i.bigenc.ru/resizer/resize?sign=DCp4fvXr6d8jY6c7qNrocg&filename=vault/dab6976ecfcd5de1bb6451bb1e5051b5.webp&width=1200" alt="" />
           </a>
           <a href='https://www.americanexpress.com/' className="payment__cards">
           <img width={72} height={42} src="https://play-lh.googleusercontent.com/Lr19w1wj5TyKGVZN2RuXBTt5MzBPgOMUkq-rRv-FMdzpEFH29ZKYib9MuvKBnxt7g_k" alt="" />
           </a>
           <a href='https://www.mastercard.com/global/en/personal/find-card-products.html' className="payment__cards">
           <img width={62} height={42} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png" alt="" />
           </a>
           <a href='https://n26.com/en-eu/maestro-card' className="payment__cards">
           <img width={83} height={52} src="https://w7.pngwing.com/pngs/596/584/png-transparent-maestro-payment-mastercard-debit-card-logo-mastercard-blue-text-payment.png" alt="" />
           </a>
        </div>
       </>
    )
}

export default Footer