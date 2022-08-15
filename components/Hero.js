import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../public/hero-img.svg';

function Hero() {
    return (
        <div className="text-center bg-white pb-10">
            <div className="w-60 mx-auto mt-10">
                <Image src={heroImg} layout="responsive" />
            </div>
            <h1 className="text-2xl text-gray-700 uppercase font-bold mt-6">
                Welcome to WatchIO
            </h1>
            <p className="text-gray-500">
                Produce film feature television and games
            </p>
            <Link href="/contact">
                <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">
                    Contact Us
                </button>
            </Link>
        </div>
    );
}

export default Hero;
