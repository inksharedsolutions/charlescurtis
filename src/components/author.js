import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                            Charles Curtis was born and raised in North Dakota. After high school,
                            he joined the military and served in the army in Germany. Upon his honorable
                            discharge, he moved to Seattle, Washington, where he would meet his future wife.
                            They have three grown children, one grandson, and one bad cat. Currently retired,
                            Charles and his wife enjoy cruising. Charles is a voracious reader and a true fan of
                            survivor stories.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Charles</span>
                            <span>Curtis</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                        <button className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" >
                            <Link to="/about-the-author">Read Full Bio</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;