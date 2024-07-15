import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card__image"
        />
      )}
      <h3 className="news-card__title">{article.title}</h3>
      <p className="news-card__description">{article.description}</p>
      <a href={article.url} className="news-card__link" target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
