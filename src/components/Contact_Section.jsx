import React from 'react'

function Contact_Section({kkr}) {

  return (
    <section id='contact' className="section section-contact">
        <div className="container">
            <h2 className="common-heading">Contact Us</h2>
        </div>
        {kkr}
        <div  className="section-contact-main contact-container">
            <form action="https://formspree.io/f/xoqrykrl" method="POST">
                <div className="grid grid-two-column">
                    <div>
                        <label htmlFor="text"/>
                        <input type="text" name="username" autoComplete="off" required  placeholder='Your Name' id="username" />
                    </div>
                    <div>
                        <label htmlFor="email"/>
                        <input type="email" name="email" autoComplete="off" required  placeholder='Your Email' id="email" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject"/>
                    <input type="text" name='subject' autoComplete="off" required  placeholder='Your Subject' id='subject' />
                </div>
                <div>
                    <label htmlFor="textarea"/>
                    <textarea name="textarea" autoComplete="off" required  minLength="10" placeholder='Your Message' id="textarea" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <input type="submit" className='btn' value='Send Me Message' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default React.memo(Contact_Section);