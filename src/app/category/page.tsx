'use client';

import { FaHeart, FaRegHeart } from "react-icons/fa"; 
import { GiCarDoor } from "react-icons/gi"; 
import { BiCog } from "react-icons/bi"; 
import { FaUsers } from "react-icons/fa"; 
import Image from "next/image"; 
import { client } from "@/sanity/lib/client";
import { fetchCarsQuery } from "@/sanity/lib/queries"; 
import Link from "next/link";
import { useState, useEffect } from "react"; 
import PickDropSection from "@/components/PickDropSection"; 

type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice?: number;
  tags: string[]; 
  imageUrl: string;
};

export default function CategoryPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByPrice, setFilterByPrice] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<Car[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCars: Car[] = await client.fetch(fetchCarsQuery);
      setCars(fetchedCars);
      setFilteredCars(fetchedCars); 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const toggleWishlist = (car: Car) => {
    let updatedWishlist = [...wishlist];
    const isCarInWishlist = wishlist.some((item) => item._id === car._id);

    if (isCarInWishlist) {
      updatedWishlist = updatedWishlist.filter((item) => item._id !== car._id);
      setMessage(`Removed ${car.name} from wishlist`);
    } else {
      updatedWishlist.push(car);
      setMessage(`Added ${car.name} to wishlist`);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const isCarInWishlist = (car: Car) => wishlist.some((item) => item._id === car._id);

 
  useEffect(() => {
    let filtered = cars;

   
    if (searchQuery) {
      filtered = filtered.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    
    if (filterByPrice !== null) {
      filtered = filtered.filter((car) => car.pricePerDay <= filterByPrice);
    }

    setFilteredCars(filtered);
  }, [searchQuery, filterByPrice, cars]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden lg:block w-[360px] h-[1600px] p-6 bg-white shadow-lg">
        {/* Search Bar and Price Filter */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Search and Filter</h2>
          <input
            type="text"
            placeholder="Search cars by name or type..."
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="mt-4">
            <input
              type="number"
              placeholder="Max price"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={filterByPrice || ""}
              onChange={(e) =>
                setFilterByPrice(e.target.value ? parseInt(e.target.value, 10) : null)
              }
            />
          </div>
        </div>
      </aside>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {message && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-3">
              <span className="material-icons text-2xl">info</span>
              <p className="text-sm font-medium">{message}</p>
              <button
                className="ml-4 bg-blue-800 hover:bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-bold"
                onClick={() => setMessage("")}
              >
                ✕
              </button>
            </div>
          )}

          {/* PickDrop Section */}
          <PickDropSection />

          <div className="mt-6 overflow-x-auto sm:overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div key={car._id} className="bg-white shadow-md rounded-lg p-6 relative">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <button onClick={() => toggleWishlist(car)}>
                      {isCarInWishlist(car) ? (
                        <FaHeart className="w-6 h-6 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>

                  <div className="mt-4 mb-4 flex justify-center relative">
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      width={200}
                      height={200}
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="mt-2">
                  <p className="text-lg font-bold">
                  {car.pricePerDay}{" "}
                  <span className="text-gray-400 text-[14px]">/day</span>
                </p>
                  </div>

                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <GiCarDoor className="w-5 h-5 text-gray-600" />
                      <span>{car.fuelCapacity}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <BiCog className="w-5 h-5 text-gray-600" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <FaUsers className="w-5 h-5 text-gray-600" />
                      <span>{car.seatingCapacity}</span>
                    </div>
                  </div>

                  <Link
                    href={`/car/${car._id}`}
                    className="block mt-6 text-center bg-blue-600 text-white px-6 py-2 rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
