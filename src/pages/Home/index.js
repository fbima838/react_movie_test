import React, { useEffect, useState } from 'react'
import MainCard from '../../components/Cards/MainCard'
import FilterCard from '../../components/Cards/FilterCard'
import ComponentCard from '../../components/Cards/ComponentCard'
import LoadingCard from '../../components/Cards/LoadingCard'

const Home = () => {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState("");
    const [year, setYear] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'Content-Type': 'application/json',
            },
        }
        await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`, options)
            .then((res) => {
                return res.json()
            }).then((res) => {
                setDatas(res.results)
                setLoading(false)
            })
    }

    const findData = async () => {
        setLoading(true)
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'Content-Type': 'application/json',
            },
        }
        await fetch(
            `https://api.themoviedb.org/3/search/movie?${search !== "" ? `query=${search}&` : ""}${year !== "" ? `primary_release_year=${year}&` : ""}api_key=${process.env.REACT_APP_API_KEY}`,
            options
        )
            .then((res) => {
                return res.json()
            }).then((res) => {
                setDatas(res.results)
                setLoading(false)
            })
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, '');
        setYear(numericValue);
    };

    useEffect(() => {
        if (search !== "" || year !== "") {
            findData()
        } else {
            fetchData()
        }
    }, [search, year])

    useEffect(() => {
        if (search === "") {
            setYear("")
        }
    }, [search])

    console.log(datas)

    return (
        <div className='flex w-full h-full space-x-5 px-5'>
            <div className='space-y-2'>
                <FilterCard title="Search">
                    <label for="search" className='text-sm space-y-2 py-2 w-full'>
                        <p>Search for Name</p>
                        <input
                            id="search"
                            type='search'
                            className='rounded-md w-full border-2 focus:border-indigo-300 outline-none text-black p-2'
                            placeholder='Search...'
                            min={1900}
                            max={2024}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </FilterCard>
                <FilterCard title="Filter">
                    {search !== "" ? (
                        <label for="start" className='text-sm space-y-2 py-2 w-full'>
                            <p>Filter by Year</p>
                            <input
                                id="start"
                                type='number'
                                className='rounded-md w-full border-2 focus:border-indigo-300 outline-none text-black p-2'
                                placeholder='2002'
                                pattern='[0-9]*'
                                min={1900}
                                max={2024}
                                value={year}
                                onChange={handleInputChange}
                            />
                        </label>
                    ) : (
                        <p className='text-sm text-gray-400'>Fill the Search First!</p>
                    )}
                </FilterCard>
            </div>
            {!loading ? (
                <MainCard title='Movies List🍿'>
                    <div className='flex flex-col w-full h-[725px] space-x-4 overflow-y-scroll'>
                        <div className='grid grid-cols-4 gap-1 py-2'>
                            {datas.length > 0 && datas.map((data, index) => (
                                <div className='flex pb-2' key={index}>
                                    <ComponentCard 
                                    title={data.title} 
                                    date={data.release_date} 
                                    img={data.poster_path} 
                                    id={data.id} />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </MainCard>
            ) : (
                <LoadingCard />
            )}
        </div>
    )
}

export default Home