import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <div className="text-center text-white">Loading...</div>;
    if (isError) return <div className="text-center text-red-500">Error occurred while loading book info</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="max-w-lg bg-white text-black rounded-lg shadow-lg p-6">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6 text-center">{book.title}</h1>

                {/* Image */}
                <div className="mb-6">
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Details */}
                <div className="space-y-4">
                    <p>
                        <strong>Author:</strong> {book.author || 'Admin'}
                    </p>
                    <p>
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p>
                        <strong>Description:</strong> {book.description}
                    </p>
                </div>

                {/* Add to Cart Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md shadow-md transition duration-200"
                    >
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
