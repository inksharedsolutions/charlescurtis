import React from 'react'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                            Charles Curtis was born and raised in North Dakota. After high school,
                            he joined the military and served in the army in Germany. Upon his honorable
                            discharge, he moved to Seattle, Washington, where he would meet his future wife.
                            They have three grown children, one grandson, and one bad cat. Currently retired,
                            Charles and his wife enjoy cruising. Charles is a voracious reader and a true fan of
                            survivor stories.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Charles</span>
                            <span>Curtis</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;