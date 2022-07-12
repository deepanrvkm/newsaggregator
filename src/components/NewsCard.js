import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ data }) => {
    return (
        <>
            {
                data && data.map((news, i) => {
                    const { title, content, urlToImage } = news
                    return (
                        <div className="col-md-6 col-lg-3" key={i}>
                            <div className="news-block">
                                <div className="news-image">
                                    <Link to="/news">
                                        <img src={urlToImage} alt={title} />
                                    </Link>
                                </div>
                                <div className="newsContent">
                                    <div className="news-title">{title.slice(0, 50)}</div>
                                    <div className="news-description">{content.slice(0, 200)}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </>
    )
}

export default NewsCard