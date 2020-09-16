import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    “Fraud is the homage that force pays to reason.”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Charles Curtis was born and raised in North Dakota. After high school,
                                he joined the military and served in the army in Germany. Upon his honorable
                                discharge, he moved to Seattle, Washington, where he would meet his future wife.
                                They have three grown children, one grandson, and one bad cat. Currently retired,
                                Charles and his wife enjoy cruising. Charles is a voracious reader and a true fan of
                                survivor stories.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Charles Curtis</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;