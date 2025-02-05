import { groq } from "next-sanity";



export const allProducts = groq`*[_type == "car"]`
export const three =  groq`*[_type == "car"][0..2]`
export const four =  groq`*[_type == "car"][0..3]`
export const six =  groq`*[_type == "car"][3..9]`
export const ten  =  groq`*[_type == "car"][4..11]`

export const fetchCarsQuery = `
  *[_type == "car"] {
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
  }
`;