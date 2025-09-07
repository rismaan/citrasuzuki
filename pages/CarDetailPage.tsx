
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS } from '../constants';
import { Car, CarColor } from '../types';
import TestDriveModal from '../components/TestDriveModal';

const CarDetailPage: React.FC = () => {
    const { carId } = useParams<{ carId: string }>();
    const [car, setCar] = useState<Car | null>(null);
    const [selectedColor, setSelectedColor] = useState<CarColor | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const foundCar = CARS.find(c => c.id === carId);
        if (foundCar) {
            setCar(foundCar);
            setSelectedColor(foundCar.colors.length > 0 ? foundCar.colors[0] : null);
        } else {
            setCar(null);
            setSelectedColor(null);
        }
    }, [carId]);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    if (!car) {
        return <div className="text-center py-20">Mobil tidak ditemukan.</div>;
    }

    const currentImageUrl = selectedColor ? selectedColor.imageUrl : car.image;

    return (
        <>
            <div className="py-8 md:py-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link to="/" className="inline-flex items-center text-suzukiBlue hover:text-suzukiRed font-semibold transition-colors duration-300 group">
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Kembali ke Beranda
                        </Link>
                    </div>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        {/* Image Section */}
                        <div>
                            <img src={currentImageUrl} alt={`${car.name} in ${selectedColor ? selectedColor.name : ''}`} className="w-full rounded-lg shadow-lg object-cover" />
                            {car.colors.length > 0 && selectedColor && (
                                <div className="mt-4">
                                    <h3 className="text-sm font-medium text-gray-900">Pilih Warna: {selectedColor.name}</h3>
                                    <div className="flex items-center space-x-3 mt-2">
                                        {car.colors.map(color => (
                                            <button
                                                key={color.name}
                                                type="button"
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-8 h-8 rounded-full border-2 ${selectedColor.hex === color.hex ? 'ring-2 ring-offset-2 ring-suzukiBlue' : 'border-gray-300'}`}
                                                style={{ backgroundColor: color.hex }}
                                                aria-label={`Select color ${color.name}`}
                                            >
                                                <span className="sr-only">{color.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="mt-8 lg:mt-0">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-suzukiBlue leading-tight">{car.name}</h1>
                            <p className="text-lg text-gray-600 mt-2">{car.tagline}</p>
                            
                            <div className="mt-6">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-suzukiRed text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 text-lg"
                                >
                                    Jadwalkan Test Drive
                                </button>
                            </div>

                            <div className="mt-8 border-t pt-6">
                                <h2 className="text-xl font-bold text-gray-900">Deskripsi</h2>
                                <p className="mt-4 text-gray-700 leading-relaxed">{car.description}</p>
                            </div>

                            <div className="mt-8 border-t pt-6">
                                <h2 className="text-xl font-bold text-gray-900">Fitur Utama</h2>
                                <ul className="mt-4 grid grid-cols-2 gap-4">
                                    {car.features.map(feature => (
                                        <li key={feature.text} className="flex items-center">
                                            <img src={feature.iconUrl} alt="" className="w-6 h-6 mr-3" />
                                            <span className="text-gray-700">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Variants Section */}
                    <div className="mt-12 border-t pt-8">
                        <h2 className="text-2xl font-bold text-center text-suzukiBlue mb-8">Varian & Harga</h2>
                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Varian</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Harga (OTR Bandung)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {car.variants.map(variant => (
                                        <tr key={variant.name}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{variant.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right font-semibold">{formatPrice(variant.price)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <TestDriveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialCarId={car.id} />
        </>
    );
};

export default CarDetailPage;
