import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        senderName: '',
        recipientName: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/create', {
            state: {
                senderName: formData.senderName,
                recipientName: formData.recipientName
            }
        });
    };

    return (
        <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-rose-100">
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4">💌</div>
                    <h2 className="text-2xl font-bold text-gray-800">Create Valentine</h2>
                    <p className="text-gray-500 text-sm mt-2">Enter names to start the magic</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Your Name</label>
                        <input
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange}
                            placeholder="e.g. Romeo"
                            className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-rose-500 focus:ring-rose-500 p-3 text-gray-800 transition-all outline-none border"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Partner's Name</label>
                        <input
                            name="recipientName"
                            value={formData.recipientName}
                            onChange={handleChange}
                            placeholder="e.g. Juliet"
                            className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-rose-500 focus:ring-rose-500 p-3 text-gray-800 transition-all outline-none border"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transform hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        Enter ❤️
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400">
                        Made with love for love.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
