import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
  <>
            <div className="rounded-lg transition-shadow duration-300 shadow-lg bg-slate-200">
                <div className="flex flex-col sm:flex-row sm:h-72 sm:justify-between gap-4 p-4">
                    {/* Image Section */}
                    <div className="sm:w-1/3 sm:h-72 sm:flex-shrink-0 border rounded-md overflow-hidden">
                        <Link to={`/books/${book._id}`}>
                            <img
                                src={`${getImgUrl(book.coverImage)}`}
                                alt={book.title}
                                className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                            />
                        </Link>
                    </div>
    
                    {/* Book Info Section */}
                    <div className="flex flex-col justify-between">
                        <Link to={`/books/${book._id}`}>
                            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                                {book?.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600 mb-4 text-sm">
                            {book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}
                        </p>
                        <p className="font-medium mb-4">
                            ${book?.newPrice} <span className="line-through font-normal text-gray-400 ml-2">${book?.oldPrice}</span>
                        </p>
    
                        {/* Add to Cart Button */}
                        <button
                            onClick={() => handleAddToCart(book)}
                            className="bg-yellow-400 text-black px-6 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-500 transition-all duration-200"
                        >
                            <FiShoppingCart />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
  </>
    )
}

export default BookCard;
