import React, { Fragment, useEffect, useState } from 'react'
import MainCard from '../../../components/Cards/MainCard'
import { useParams } from 'react-router-dom'
import LoadingCard from '../../../components/Cards/LoadingCard';

const HomeDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState({});

    const fetchData = async () => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'Content-Type': 'application/json',
            },
        }
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`, options)
            .then((res) => {
                return res.json()
            }).then((res) => {
                setDatas(res)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Fragment>
            {loading ? (
                <LoadingCard />
            ) : (
                <MainCard title='Movie Detail🎞'>
                    <div className='flex h-fit w-full space-x-4 py-2'>
                        <img src={`https://image.tmdb.org/t/p/original${datas?.poster_path}`} alt='poster' height={120} width={250} />
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-3xl font-semibold'>{datas.title}</h2>
                                <p className='text-gray-700'>
                                    {datas.runtime} Minutes
                                </p>
                            <div className='flex space-x-2'>
                                <p>{datas.release_date}</p>
                                {datas && datas.genres && datas.genres.map((genre) => (
                                    <p className='text-gray-400'>{genre.name}</p>
                                ))}
                            </div>
                            <div className='flex flex-col space-y-4 py-4'>
                                <p className='text-gray-700 italic'>
                                    {datas.tagline}
                                </p>
                                <div>
                                    <h4 className='font-semibold text-xl'>Overview</h4>
                                    <p className='text-gray-700'>
                                        {datas.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainCard>
            )}
        </Fragment>
    )
}

export default HomeDetail