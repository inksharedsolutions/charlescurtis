import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'charles-curtis',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `LOVE AND FORENSICS`,
                                spanFirst: `AN IMPRINT ON LIFE`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                            Love and Forensics is, first and foremost, a love story. 
                                            When Chris Sutton is framed and imprisoned for a murder 
                                            he did not commit, it is up to his wife, Terri, to find 
                                            out the truth to set him free. When Terri embarks on this 
                                            worldwide trip, she didn’t know how far the journey would 
                                            take her or the strange adventures that await. What may be 
                                            more startling is the truth isn’t always what you expect, 
                                            but with the belief in love and the science of forensics, 
                                            the truth shall set you free. 
                                        </p> 
                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/love-and-forensics-an-imprint-on-life/',
                                    barnes: 'https://www.barnesandnoble.com/w/love-and-forensics-charles-curtis/1116744125?ean=9781643458366',
                                    amazon: 'https://www.amazon.com/Love-Forensics-Imprint-Charles-Curtis-ebook/dp/B082VLNJ75/ref=sr_1_1?dchild=1&keywords=9781643458366&qid=1600240247&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Love-Forensics-Imprint-Charles-Curtis/dp/1643456504/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600240247&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/love-and-forensics-charles-curtis/1116744125?ean=9781643456508',
                                    booksamillion: 'https://www.booksamillion.com/p/Love-Forensics/Charles-Curtis/9781643456508?id=7997864620895',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;