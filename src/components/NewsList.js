import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

function NewsList({category, pageSize}) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in', // You can change the country code as needed
            apiKey: 'db5cdb684d3440e1b4acb5153ef5939a' ,// Replace with your NewsAPI key
            category: category,
            pageSize: pageSize
          
          }
        });

        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    }
    fetchData();
  }, []);

  const handlePrev = async ()=> {

    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'in', // You can change the country code as needed
          apiKey: 'db5cdb684d3440e1b4acb5153ef5939a' ,// Replace with your NewsAPI key
          category: category,
          pageSize: pageSize - 1
        
        }
      });

      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching the news data", error);
    }

  }


  const handleNext = async ()=> {

    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'in', // You can change the country code as needed
          apiKey: 'db5cdb684d3440e1b4acb5153ef5939a' ,// Replace with your NewsAPI key
          category: category,
          pageSize: pageSize + 1
        
        }
      });

      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching the news data", error);
    }

  }

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}

      {/* <button disabled={pageSize <= 1} onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      {console.log(pageSize)} */}
    </div>
  );
}

export default NewsList;
