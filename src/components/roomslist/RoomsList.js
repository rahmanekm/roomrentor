import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Added Link for View Details
import "../roomslist/roomslist.css";

// Placeholder images - assumed to be in src/images
import londonImage from "../../images/worlddest.svg";
import detroitImage from "../../images/choosinghouse.svg";
import nyImage from "../../images/addplace.svg";
import sfImage from "../../images/bestplace.svg";
import userAvatarPlaceholder from "../../images/user.png"; // Placeholder for advertiser avatar

// SVG Icons for Amenities
const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

const BillsIcon = () => ( // Using a simple "receipt" or "document" icon for bills
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const FurnishedIcon = () => ( // Using a simple "bed" icon for furnished
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path>
    <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
    <path d="M12 10v10"></path>
    <path d="M2 16h20"></path>
  </svg>
);

function RoomsList() {
    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: "Spacious Double in Central Detroit",
            description: "Bright and airy double room in a modern apartment complex. Close to amenities and transport links.",
            city: "Detroit",
            state: "MI",
            addressLine1: "123 Main Street",
            pricePerMonth: 750,
            imageUrl: detroitImage,
            roomType: "Double room",
            propertyType: "shared apartment",
            availableFrom: "Now",
            advertiserName: "Alex P.",
            advertiserAvatarUrl: userAvatarPlaceholder,
            amenities: ["wifi", "furnished", "bills_included"]
        },
        {
            id: 2,
            name: "Cosy Studio in Brooklyn",
            description: "Charming studio with exposed brickwork. Perfect for a single professional or student.",
            city: "New York",
            state: "NY",
            addressLine1: "456 Liberty Ave",
            pricePerMonth: 1200,
            imageUrl: nyImage,
            roomType: "Studio flat",
            propertyType: "apartment building",
            availableFrom: "15th June",
            advertiserName: "Maria K.",
            advertiserAvatarUrl: userAvatarPlaceholder,
            amenities: ["wifi", "furnished"]
        },
        {
            id: 3,
            name: "Modern Room near Golden Gate Park",
            description: "Contemporary room in a recently renovated house. Access to a beautiful garden.",
            city: "San Francisco",
            state: "CA",
            addressLine1: "789 Parkside Dr",
            pricePerMonth: 1500,
            imageUrl: sfImage,
            roomType: "Single room",
            propertyType: "shared house",
            availableFrom: "1st July",
            advertiserName: "John B.",
            advertiserAvatarUrl: userAvatarPlaceholder,
            amenities: ["wifi", "bills_included"]
        },
        {
            id: 4,
            name: "Victorian Flatshare in Islington",
            description: "Large double room in a beautiful Victorian flat. Sharing with friendly professionals.",
            city: "London",
            state: "", // UK listings might not always show state
            addressLine1: "10 Angel Lane",
            pricePerMonth: 950,
            imageUrl: londonImage,
            roomType: "Double room",
            propertyType: "flatshare",
            availableFrom: "Now",
            advertiserName: "Properties Ltd.",
            advertiserAvatarUrl: null, // Example for no avatar / company
            amenities: ["furnished", "bills_included"]
        }
    ]);

    const renderAmenityIcon = (amenity) => {
        if (amenity === "wifi") return <span className="amenity-icon"><WifiIcon /></span>;
        if (amenity === "bills_included") return <span className="amenity-icon"><BillsIcon /></span>;
        if (amenity === "furnished") return <span className="amenity-icon"><FurnishedIcon /></span>;
        return null;
    };

    return (
        <div className="page-container-spareroom">
            <div className="filter-sort-bar-spareroom">
                <div className="filter-group-spareroom">
                    <select name="price-range" aria-label="Price range">
                        <option value="">Price Range</option>
                        <option value="0-500">Up to $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="1000-1500">$1000 - $1500</option>
                        <option value="1500+">$1500+</option>
                    </select>
                    <select name="room-type" aria-label="Room type">
                        <option value="">Room Type</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="studio">Studio</option>
                        <option value="ensuite">En-suite</option>
                    </select>
                    <input type="text" placeholder="Move-in Date (e.g., ASAP, 1st July)" aria-label="Move-in date" className="filter-input-spareroom"/>
                    <button className="more-filters-button-spareroom">More Filters</button>
                </div>
                <div className="sort-group-spareroom">
                    <label htmlFor="sort-by">Sort by: </label>
                    <select name="sort-by" id="sort-by">
                        <option value="relevance">Relevance</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                        <option value="date_new">Date Added: Newest</option>
                    </select>
                </div>
            </div>

            <div className="RoomsList-spareroom">
                {rooms.map(room => (
                    <div key={room.id} className="room-card-spareroom">
                        <div className="room-thumbnail-spareroom" style={{ backgroundImage: `url(${room.imageUrl})` }}>
                            <div className="room-price-spareroom">${room.pricePerMonth} pcm</div>
                        </div>
                        <div className="room-details-spareroom">
                            <h3 className="room-name-spareroom">{room.name}</h3>
                            <p className="room-location-spareroom">{room.addressLine1}, {room.city}</p>
                            <p className="room-type-spareroom">{room.roomType} in a {room.propertyType}</p>
                            <p className="room-availability-spareroom">Available from: {room.availableFrom}</p>
                            
                            <div className="room-amenities-spareroom">
                                {room.amenities.map(amenity => renderAmenityIcon(amenity))}
                            </div>

                            <div className="room-description-snippet-spareroom">
                                <p>{room.description.substring(0, 100)}{room.description.length > 100 ? '...' : ''}</p>
                            </div>

                            <div className="advertiser-info-spareroom">
                                {room.advertiserAvatarUrl ? (
                                    <img src={room.advertiserAvatarUrl} alt={room.advertiserName} className="advertiser-avatar-spareroom" />
                                ) : (
                                    <div className="advertiser-avatar-placeholder-spareroom"></div>
                                )}
                                <span className="advertiser-name-spareroom">Advertised by {room.advertiserName}</span>
                            </div>
                            
                            <Link to={`/rooms/${room.id}`} className="view-details-button-spareroom">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoomsList;
