import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { defaultContent } from '../config/content';

const Editor = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        senderName: location.state?.senderName || '',
        recipientName: location.state?.recipientName || '',
        landingTitle: defaultContent.landing.title,
        landingSubtitle: defaultContent.landing.subtitle,
        questionText: defaultContent.question.text,
        yesBtn: defaultContent.question.yesBtn,
    });
    const [loading, setLoading] = useState(false);
    const [createdId, setCreatedId] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const contentToSave = {
                ...defaultContent,
                senderName: formData.senderName,
                recipientName: formData.recipientName,
                landing: {
                    ...defaultContent.landing,
                    title: formData.landingTitle,
                    subtitle: formData.landingSubtitle,
                },
                question: {
                    ...defaultContent.question,
                    text: formData.questionText,
                    yesBtn: formData.yesBtn,
                }
            };

            const docRef = await addDoc(collection(db, "valentines"), contentToSave);
            setCreatedId(docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error saving your valentine. Check console.");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        const url = `${window.location.origin}/${createdId}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handlePreview = () => {
        navigate(`/${createdId}`);
    };

    if (createdId) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Valentine Created!</h2>
                    <p className="text-gray-500 text-sm mb-6">Your special link is ready to share.</p>

                    <div className="space-y-3">
                        <button
                            onClick={copyToClipboard}
                            className={`w-full py-3 px-4 rounded-xl font-semibold transition-all border ${copied ? 'bg-green-50 border-green-200 text-green-600' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'}`}
                        >
                            {copied ? 'Copied! ✅' : 'Copy Link 🔗'}
                        </button>

                        <button
                            onClick={handlePreview}
                            className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-lg transform hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Preview ❤️
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-rose-500">Create Your Valentine ❤️</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input name="senderName" value={formData.senderName} onChange={handleChange} placeholder="e.g. Secret Admirer" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipient Name</label>
                        <input name="recipientName" value={formData.recipientName} onChange={handleChange} placeholder="e.g. Crush" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" required />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-sm font-medium text-gray-700">Landing Title</label>
                        <input name="landingTitle" value={formData.landingTitle} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Landing Subtitle</label>
                        <input name="landingSubtitle" value={formData.landingSubtitle} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <label className="block text-sm font-medium text-gray-700">Question Text</label>
                        <input name="questionText" value={formData.questionText} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 transition-colors mt-6">
                        {loading ? 'Creating Magic...' : 'Generate Link 🔗'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Editor;
