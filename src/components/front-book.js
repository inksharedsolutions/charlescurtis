import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/Book_Cover.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} />
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                                Love and Forensics is, first and foremost, a love story. When Chris Sutton is framed
                                and imprisoned for a murder he did not commit, it is up to his wife, Terri, to find out
                                the truth to set him free. When Terri embarks on this worldwide trip, she didn't know
                                how far the journey would take her or the strange adventures that await. What may be
                                more starting is the truth isn't always what you expect, but with the belief in love and
                                science of forensics, the truth shall set you free.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook