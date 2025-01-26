'use client';
import {useState , useEffect} from 'react';
import axios from 'axios';
import { NewsItemType } from '../types/news';


 const useFetchNews = () => {
    const [newsItems, setNewsItems] = useState<NewsItemType[]>([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState<string | null>(null);
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    useEffect(()=> {
        const fetchNews = async() => {
            try{
                const response = await axios.get( `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
                setNewsItems(response.data.articles);
                setLoading(false);

            }
            catch(error){
                console.log(error);
                setError( 'An error occurred. Please try again later.');
                setLoading(false);
            }
        }

        fetchNews();

    }, []);

    return {newsItems, loading, error};
}

export default useFetchNews;