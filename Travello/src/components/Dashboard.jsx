import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar'; // Importing Sidebar component
import {
    FaMapMarkedAlt, FaCamera, FaTrophy, FaShareAlt, FaLeaf, FaRobot, FaRecycle, FaSeedling,
} from 'react-icons/fa';

const Dashboard = () => {
    const features = [
        {
            title: 'Hidden Attractions',
            description: 'Explore secret spots with navigation and location-based tips.',
            image: 'hiddenattraction.jpeg',
            link: '/hidden-attraction-maps',
            icon: <FaMapMarkedAlt size={45} className="text-[#49c6e5]" />,
        },
        {
            title: 'Challenges & Quests',
            description: 'Complete exciting photo challenges and earn rewards!',
            image: 'challenges.jpeg',
            link: '/Challenge',
            icon: <FaCamera size={45} className="text-[#ff6347]" />,
        },
        {
            title: 'Achievements',
            description: 'Earn badges, levels, and celebrate your accomplishments.',
            image: 'a.jpg',
            link: '/achievements',
            icon: <FaTrophy size={45} className="text-[#ffd700]" />,
        },
        {
            title: 'Social Integration',
            description: 'Share your adventures on Facebook, Twitter, and Instagram!',
            image: 's.jpeg',
            link: '/social-integration',
            icon: <FaShareAlt size={45} className="text-[#00bd9d]" />,
        },
        {
            title: 'Eco-Friendly Services',
            description: 'Discover eco-friendly travel options and reduce your footprint.',
            image: 'eco2.jpg',
            link: '/eco-friendly',
            icon: <FaSeedling size={45} className="text-[#00bd9d]" />,
        },
        {
            title: 'Carbon Emissions',
            description: 'Track and reduce your carbon footprint with eco-friendly tips.',
            image: 'cf.png',
            link: '/green-points-system',
            icon: <FaRecycle size={30} className="text-[#49c6e5]" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fffbfa] to-gray-200 flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="w-4/5 p-8">
                <ToastContainer />
                <motion.h1
                    className="text-5xl font-bold text-[#49c6e5] mb-8 text-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Travello, the adventure starts here!
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow border border-gray-200"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="md:w-1/2 p-4">
                                <motion.img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="rounded-lg w-full hover:scale-105 transition-transform"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                />
                            </div>
                            <div className="md:w-1/2 p-4 text-center md:text-left">
                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h2 className="text-3xl font-bold text-[#00bd9d] mb-4 flex items-center justify-center md:justify-start">
                                        {feature.icon} <span className="ml-3">{feature.title}</span>
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-4">{feature.description}</p>
                                    <Link to={feature.link} className="inline-block px-6 py-2 rounded-md bg-[#49c6e5] text-white text-lg font-semibold transition-colors hover:bg-[#00bd9d]">
                                        Explore
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
