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
                                           Ralph Mullen is a famous toxicologist who has done many
                                           investigations for the United States government and has recently
                                           retired; however, good men, especially with Ralph’s talents in
                                           science and skill as a Force Recon Marine, are not allowed
                                           to retire so easily. They become part-time retirees.
                                        </p> 

                                        <p>
                                           Ralph gets a call to investigate a strange “black tide”
                                           in the Northern Pacific Ocean. He thinks it is a waste
                                           of his time, but a longtime friend of his is asking, so
                                           he accepts the project. What he encounters is more than he bargained for.
                                        </p>
                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/love-and-forensics-an-imprint-on-life/',
                                    barnes: 'https://www.barnesandnoble.com/w/love-and-forensics-charles-curtis/1116744125?ean=9781643458366',
                                    amazon: 'https://www.amazon.com/Love-Forensics-Imprint-Charles-Curtis-ebook/dp/B082VLNJ75/ref=sr_1_1?dchild=1&keywords=9781643458366&qid=1600240247&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Love-Forensics-Imprint-Charles-Curtis/dp/1643456504/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600240247&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/love-and-forensics-charles-curtis/1116744125?ean=9781483667171',
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