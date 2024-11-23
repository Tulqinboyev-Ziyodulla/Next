import React from "react";
import { UserType } from "../page";

interface UserItemsProps {
  item: UserType;
}

const UserItems: React.FC<UserItemsProps> = ({ item }) => {
  return (
    <div className="w-90 p-6 border border-gray-300 rounded-xl mb-7 relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="w-full h-64 rounded-lg">
        <img
          src="https://picsum.photos/300/300"
          alt="Random Person"
          className="w-full h-64 object-contain duration-300 hover: cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-black">
          {item.firstName} {item.lastName}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{item.email}</p>
        <p className="text-sm text-gray-600 mt-1">Phone: {item.phone}</p>
      </div>
    </div>
  );
};

export default UserItems;
