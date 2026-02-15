import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { defaultContent } from '../config/content';
import ValentineFlow from './ValentineFlow';

const Viewer = () => {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchValentine = async () => {
            if (!id) return;
            try {
                const docRef = doc(db, "valentines", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setContent(docSnap.data());
                } else {
                    console.log("No such document!");
                    setError(true);
                }
            } catch (err) {
                console.error("Error getting document:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchValentine();
    }, [id]);

    if (loading) {
        return <div className="h-screen flex items-center justify-center text-rose-500 text-xl">Loading Love... ❤️</div>;
    }

    if (error) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-gray-600">
                <p className="text-xl mb-4">Valentine not found 💔</p>
                <Link to="/create" className="text-rose-500 underline">Create one instead?</Link>
            </div>
        );
    }

    return <ValentineFlow content={content || defaultContent} />;
};

export default Viewer;
