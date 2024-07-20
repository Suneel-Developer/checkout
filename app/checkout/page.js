"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const Checkout = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const [showCouponInput, setShowCouponInput] = useState(false);
    const [showGetCountry, setShowGetCountry] = useState('');
    const [couponCode, setCouponCode] = useState('');


    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const handleCouponClick = () => {
        setShowCouponInput(true);
    };

    const handleGetCountryClick = () => {
        setShowGetCountry(true);
    };


    const handleInputChange = (event) => {
        setCouponCode(event.target.value);
    };

    return (
        <>
            <Header />

            <section className='bg-gray-100 py-[4rem] px-4'>
                <div className='max-w-[1169px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    {/* Sign up or Login & payment method  */}
                    <div className='flex flex-col gap-8'>
                        {/* Sign up or Login Section  */}

                        <div className='flex flex-col items-start text-left relative bg-white word-break-word rounded-[20px] p-6 md:p-8 gap-6 h-auto'>
                            <p className='text-[22px] font-medium leading-[1.4]'>Sign up or log in</p>


                            {/* Google & Apple btns  */}
                            <div className="flex flex-wrap gap-3 items-center flex-row">
                                <button type="button" className="rounded-full border border-gray-200 hover:border-black px-[30px] py-[11px] min-w-[137px] flex gap-2 transition-colors">
                                    <img alt="Google logo" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/assets/google-logo.svg" />
                                    <p className="body-md-medium">Google</p>
                                </button>

                                <button type="button" className="rounded-full border border-gray-200 hover:border-black px-[30px] py-[11px] min-w-[137px] flex gap-2 transition-colors">
                                    <img alt="Apple logo" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/assets/apple-logo.svg" />
                                    <p class="body-md-medium">Apple</p>
                                </button>
                            </div>

                            <p className='text-gray-300 text-sm leading-[1.5]'>
                                We promise to only send you important emails about the service quality. You'll also receive news about special offers, but if you don't want to get those, drop us a note at
                                <Link href="mailto:support@saily.com" target='_blank' className='underline ml-1'>support@saily.com</Link>
                            </p>
                        </div>

                        {/* Select a payment method  */}

                        <div className='flex flex-col items-start text-left relative bg-white word-break-word rounded-[20px] p-6 md:p-8 gap-6 h-auto'>
                            <p className='text-[22px] font-medium leading-[1.4]'>Select a payment method</p>

                            <div className='flex flex-col gap-3 w-full'>

                                {/* Credit card Accordin */}
                                <div className='flex flex-col border border-gray-400 rounded-xl transition-colors duration-200'>
                                    <button onClick={() => handleAccordionClick(0)} className='px-4 md:px-6 py-4 flex items-center justify-between'>
                                        <div className='flex items-center flex-wrap'>
                                            <p className='text-base font-medium leading-[1.5] mr-3'>Credit or debit card</p>

                                            <div className='flex items-center flex-wrap gap-2'>
                                                <img src="/assets/visa.svg" alt="visa" />
                                                <img src="/assets/mastercard.svg" alt="mastercard" />
                                                <img src="/assets/amex.svg" alt="amex" />
                                                <img src="/assets/discover.svg" alt="discover" />
                                            </div>
                                        </div>
                                        <img src="/assets/chevron-bottom.svg" alt="chevron-bottom" className={`transform transition-transform ${openIndex === 0 ? 'rotate-180' : ''}`} />
                                    </button>

                                    {openIndex === 0 && (
                                        <div className='px-4 md:px-6 pt-2 pb-6'>
                                            <form className='flex flex-col gap-6'>
                                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                                    <div>
                                                        <label htmlFor='first name' className='block mb-3 text-xs font-medium'>First name</label>
                                                        <input class="outline-none appearance-none border-md rounded-xl w-full px-4 text-black py-[11px] placeholder:text-secondary border border-input focus:border-black hover:border-black" placeholder="First name" required="" id='firstname' type="text" name="firstName" />
                                                    </div>

                                                    <div>
                                                        <label htmlFor='first name' className='block mb-3 text-xs font-medium'>Last name</label>
                                                        <input class="outline-none appearance-none border-md rounded-xl w-full px-4 text-black py-[11px] placeholder:text-secondary border border-input focus:border-black hover:border-black" placeholder="Last name" required="" id='lastname' type="text" name="lastName" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor='card number' className='block mb-3 text-xs font-medium'>Card number</label>
                                                    <input class="outline-none appearance-none border-md rounded-xl w-full px-4 text-black py-[11px] placeholder:text-secondary border border-input focus:border-black hover:border-black" placeholder="0000 0000 0000 0000" required="" id='cardnumber' type="text" name="cardnumber" />
                                                </div>


                                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                                    <div>
                                                        <label htmlFor='expiration date' className='block mb-3 text-xs font-medium'>Expiration date</label>
                                                        <input class="outline-none appearance-none border-md rounded-xl w-full px-4 text-black py-[11px] placeholder:text-secondary border border-input focus:border-black hover:border-black" placeholder="MM/MY" required="" id='expirydate' type="text" name="expirydate" />
                                                    </div>

                                                    <div>
                                                        <label htmlFor='CVV/CVC' className='block mb-3 text-xs font-medium'>CVV/CVC</label>
                                                        <input class="outline-none appearance-none border-md rounded-xl w-full px-4 text-black py-[11px] placeholder:text-secondary border border-input focus:border-black hover:border-black" placeholder="000" required="" id='cvv' type="text" name="CVV/CVC" />
                                                    </div>
                                                </div>

                                                <button className='py-[11px] px-7 bg-black text-center text-white rounded-[100px] text-base font-medium w-fit'>Continue</button>
                                            </form>

                                            <p className='mt-6 text-gray-300 text-xs leading-[1.5]'>
                                                By submitting your information and continuing to purchase, you agree to our
                                                <Link href="#" className='underline'> terms of service</Link>,
                                                <Link href="#" className='underline'> privacy policy</Link>, and out partners
                                                <Link href="#" className='underline'> terms and conditions</Link>.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Google pay Accordin */}
                                <div className='flex flex-col border border-gray-400 rounded-xl transition-colors duration-200'>
                                    <button onClick={() => handleAccordionClick(1)} className='px-4 md:px-6 py-4 flex items-center justify-between'>
                                        <div className='flex items-center flex-wrap'>
                                            <p className='text-base font-medium leading-[1.5] mr-3'>Google Pay</p>

                                            <div className='flex items-center flex-wrap gap-2'>
                                                <img src="/assets/pay.svg" alt="pay" className='h-6' />
                                            </div>
                                        </div>
                                        <img src="/assets/chevron-bottom.svg" alt="chevron-bottom" className={`transform transition-transform ${openIndex === 1 ? 'rotate-180' : ''}`} />
                                    </button>

                                    {openIndex === 1 && (
                                        <div className='px-4 md:px-6 pt-2 pb-6'>
                                            <button className='bg-black text-white flex items-center justify-center rounded-md text-sm font-medium w-[240px] h-10'>
                                                Buy With
                                                <img src="/assets/google-logo.svg" alt="google-logo" className='ml-2 mr-1 w-4 h-4' />
                                                Pay
                                            </button>

                                            <p className='mt-6 text-gray-300 text-xs leading-[1.5]'>
                                                By submitting your information and continuing to purchase, you agree to our
                                                <Link href="#" className='underline'> terms of service</Link>,
                                                <Link href="#" className='underline'> privacy policy</Link>, and out partners
                                                <Link href="#" className='underline'> terms and conditions</Link>.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Paypal Accordin  */}
                                <div className='flex flex-col border border-gray-400 rounded-xl transition-colors duration-200'>
                                    <button onClick={() => handleAccordionClick(2)} className='px-4 md:px-6 py-4 flex items-center justify-between'>
                                        <div className='flex items-center flex-wrap'>
                                            <p className='text-base font-medium leading-[1.5] mr-3'>PayPal</p>

                                            <div className='flex items-center flex-wrap gap-2'>
                                                <img src="/assets/paypal.svg" alt="paypal" className='h-6' />
                                            </div>
                                        </div>
                                        <img src="/assets/chevron-bottom.svg" alt="chevron-bottom" className={`transform transition-transform ${openIndex === 2 ? 'rotate-180' : ''}`} />
                                    </button>

                                    {openIndex === 2 && (
                                        <div className='px-4 md:px-6 pt-2 pb-6'>
                                            <button className='bg-[#ffc439] flex items-center justify-center rounded-md w-full h-12'>
                                                <img src="/assets/_paypal.png" alt="paypal" className='' />
                                            </button>

                                            <p className='mt-6 text-gray-300 text-xs leading-[1.5]'>
                                                By submitting your information and continuing to purchase, you agree to our
                                                <Link href="#" className='underline'> terms of service</Link>,
                                                <Link href="#" className='underline'> privacy policy</Link>, and out partners
                                                <Link href="#" className='underline'> terms and conditions</Link>.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Order Summary  */}
                    <div className='flex flex-col items-start text-left relative bg-white word-break-word rounded-[20px] p-6 md:p-8 gap-6 h-fit'>
                        <p className='text-[22px] font-medium leading-[1.4]'>Order summary</p>

                        <div className="py-2 px-6 w-full rounded-xl bg-neutral-100">
                            <ul>
                                <li className="flex justify-between items-center flex-wrap py-4 gap-4 border-b border-neutral-200">
                                    <p class="text-gray-300 text-base md:text-xl leading-[1.5] whitespace-nowrap">Country</p>
                                    <div class="flex items-center gap-x-3">
                                        <div class="w-6 h-6 lg:w-8 lg:h-8 relative rounded-full overflow-hidden">
                                            <img alt="United States flag" loading="lazy" src="/assets/flag.webp" className='w-full h-full' />
                                        </div>

                                        <div class="text-base md:text-xl">United States</div>
                                    </div>
                                </li>

                                <li className="flex justify-between items-center flex-wrap py-4 gap-4 border-b border-neutral-200">
                                    <p class="text-gray-300 text-base md:text-xl leading-[1.5] whitespace-nowrap">Plan</p>
                                    <div class="text-base md:text-xl">1 GB</div>
                                </li>

                                <li className="flex justify-between items-center flex-wrap py-4 gap-4 border-b border-neutral-200">
                                    <p class="text-gray-300 text-base md:text-xl leading-[1.5] whitespace-nowrap">Duration</p>
                                    <div class="text-base md:text-xl">7 days</div>
                                </li>

                                <li className="flex justify-between items-center flex-wrap py-4 gap-4">
                                    <p class="text-gray-300 text-base md:text-xl leading-[1.5] whitespace-nowrap">Price</p>
                                    <div class="text-base md:text-xl">$3.99</div>
                                </li>
                            </ul>
                        </div>


                        {/* Get Country  */}
                        <div className='w-full'>
                            {!showGetCountry && (
                                <div className='text-secondary text-sm'>
                                    Tax country: <span className='underline cursor-pointer' onClick={handleGetCountryClick}>United States</span>
                                </div>
                            )}

                            {showGetCountry && (
                                <div>
                                    <label className='text-xs font-medium leading-[1.5]'>Tax country:</label>

                                    <div className="relative w-full max-w-full lg:max-w-[371px] mt-3">
                                        <select className="custom-select flex-1 cursor-pointer w-full py-[11px] px-4 rounded-xl border border-input outline-none text-secondary overflow-y-auto">
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="CA">Canada</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="EE">Estonia</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                            <option value="GR">Greece</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IE">Ireland</option>
                                            <option value="JP">Japan</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MT">Malta</option>
                                            <option value="MX">Mexico</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="NO">Norway</option>
                                            <option value="PL">Poland</option>
                                            <option value="RO">Romania</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="ES">Spain</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                        </div>


                        {/* Got a coupon section  */}
                        <div className='mt-5 w-full'>
                            {!showCouponInput && (
                                <div className='text-secondary text-sm underline cursor-pointer' onClick={handleCouponClick}>
                                    Got a coupon?
                                </div>
                            )}

                            {showCouponInput && (
                                <div>
                                    <label className='text-xs font-medium leading-[1.5]'>Enter a coupon code</label>

                                    <div className='flex items-center gap-3 flex-col lg:flex-row w-full mt-3'>
                                        <input
                                            type="text"
                                            className='flex-1 w-full py-[11px] px-4 rounded-xl border border-input outline-none text-secondary focus:border-black hover:border-black'
                                            value={couponCode}
                                            onChange={handleInputChange}
                                        />
                                        <button
                                            className={`py-[11px] px-7 w-full lg:w-auto text-base font-medium rounded-[100px] ${couponCode ? 'bg-[#fff500] border-[#fff500] text-black' : 'bg-[#e2e2e4] border-[#e2e2e4] text-gray-300'}`}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Checkout